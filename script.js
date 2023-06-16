const api_key = "2e15f17ec23c808056e6eaa9abf5ecbe"
const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")


const checkWeather = async (city) => {
    const response = await fetch(api_url + city + `&appid=${api_key}`)
    let data = await response.json()
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C"
    document.querySelector(".condition").innerHTML = data.weather[0].main
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/cloud.png"
    }
    else if (data.weather[0].main == "Dust") {
        weatherIcon.src = "assets/dust.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.png"
    }
    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "assets/haze.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rain-icon.png"
    }
}

searchBtn.addEventListener("click", () => {
    if (search.value) {
        checkWeather(search.value)
        search.value = ""
    }
})

