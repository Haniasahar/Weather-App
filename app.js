let apiKey = "e00e43ea72cc622b30ad937a8c847770";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector("#search input");
let searchBtn = document.querySelector("#search button");
let weatherIcon = document.querySelector("#weather_icon");

let parent = document.querySelector("#parent");

if (searchBox.value == "") {
    document.querySelector("#error").style.display = "none";
    document.querySelector("#weather").style.display = "flex";
}

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector("#error").style.display = "flex";
        document.querySelector("#weather").style.display = "none";
    }

    else {
        let data = await response.json();

        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#feels_like").innerHTML = "Feels Like " + Math.round(data.main.feels_like) + "°C";
        document.querySelector("#explain ").innerHTML = data.weather[0].main;
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloud.png";
        }

        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.jpg";
        }

        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.jpg";
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }

        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.jpg";
        }

        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.jpg";
        }

        else if (data.weather[0].main == "Smoke" || "Haze") {
            weatherIcon.src = "images/smoke.jpg";
        }

        document.querySelector("#weather").style.display = "flex";
        document.querySelector("#error").style.display = "none";

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})