
const apiKey = "8dd595c2cde56236dc6d0547dc63e0ec"; // replace with your OpenWeatherMap API key
const lat = 40.564978; // Sandy City latitude
const lon = -111.838972; // Sandy City longitude

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("current-weather").innerHTML = `
        <p><strong>Temperature:</strong> ${data.main.temp}°F</p>
        <p><strong>Conditions:</strong> ${data.weather[0].description}</p>
    `;
}

async function getForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    let forecastHTML = "";

    // Get 3 days (24h apart)
    for (let i = 0; i < 24 * 3; i += 8) {
        const day = data.list[i];
        forecastHTML += `
            <p>
                <strong>${day.dt_txt.split(" ")[0]}</strong><br>
                Temp: ${day.main.temp}°F<br>
                ${day.weather[0].description}
            </p>
        `;
    }

    document.getElementById("forecast").innerHTML = forecastHTML;
}

getWeather();
getForecast();
