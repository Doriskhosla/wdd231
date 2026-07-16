
const apiKey = "8dd595c2cde56236dc6d0547dc63e0ec";
const lat = 40.564978;
const lon = -111.838972;

// CURRENT WEATHER
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const weatherDiv = document.getElementById("current-weather");
    weatherDiv.querySelector("p").innerHTML = `
        <strong>Temperature:</strong> ${data.main.temp}°F<br>
        <strong>Conditions:</strong> ${data.weather[0].description}
    `;

    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const iconImg = document.getElementById("weather-icon");
    iconImg.src = iconURL;
    iconImg.alt = data.weather[0].description;
}

// 3-DAY FORECAST (SAFE VERSION)
async function getForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.list) {
        document.getElementById("forecast").innerHTML = `
            <p>Forecast unavailable. API returned no data.</p>
        `;
        return;
    }

    // Filter for noon readings (most stable)
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    // Take next 3 days
    const nextThree = daily.slice(0, 3);

    let forecastHTML = "";

    nextThree.forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric"
        });

        forecastHTML += `
            <p>
                <strong>${date}</strong><br>
                Temp: ${Math.round(day.main.temp)}°F<br>
                ${day.weather[0].description}
            </p>
        `;
    });

    document.getElementById("forecast").innerHTML = forecastHTML;
}

getWeather();
getForecast();
