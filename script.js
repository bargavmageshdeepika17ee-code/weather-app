const apiKey = "3b34376fe1e03e035215c8d17b5b3784"; // 🔴 Replace here!

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("errorMsg").classList.remove("hidden");
            document.getElementById("weatherDetails").classList.add("hidden");
            return;
        }

        document.getElementById("errorMsg").classList.add("hidden");
        document.getElementById("weatherDetails").classList.remove("hidden");

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;

        const iconCode = data.weather[0].icon;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (err) {
        console.error(err);
    }
}
