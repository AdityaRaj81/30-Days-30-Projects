const apiKey = "9031a2cda973ad489be82ac74b9054f3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".min-temp").innerHTML = "Min: " + Math.round(data.main.temp_min) + "°C";
        document.querySelector(".max-temp").innerHTML = "Max: " + Math.round(data.main.temp_max) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main.toLowerCase() == "clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main.toLowerCase() == "clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main.toLowerCase() == "rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main.toLowerCase() == "drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main.toLowerCase() == "mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
