<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h2>Weather App</h2>

        <div class="search-box">
            <input type="text" id="cityInput" placeholder="Enter city name">
            <button onclick="getWeather()">Search</button>
        </div>

        <div id="weatherDetails" class="weather-info hidden">
            <h3 id="cityName"></h3>
            <img id="icon" src="">
            <p id="temperature"></p>
            <p id="description"></p>
            <p id="humidity"></p>
            <p id="wind"></p>
        </div>

        <p id="errorMsg" class="error hidden">City not found. Try again.</p>
    </div>

<script src="script.js"></script>
</body>
</html>
