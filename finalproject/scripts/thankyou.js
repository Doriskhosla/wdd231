const params = new URLSearchParams(window.location.search);

document.getElementById("fname").textContent = params.get("fname");
document.getElementById("email").textContent = params.get("email");
document.getElementById("rating").textContent = params.get("rating");
document.getElementById("comments").textContent = params.get("comments");
document.getElementById("timestamp").textContent = params.get("timestamp");
