document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temeratureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "3de98761bab3d7dfce18e3e046657497";


    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim()
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }







    })

    async function fetchWeatherData(city) {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);

        console.log(response);

        if (!response.ok) {
            throw new Error("city not found");

        }
        const data = await response.json()
        return data
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;
        cityNameDisplay.textContent = name;
        temeratureDisplay.textContent = `Temperatura : ${Math.round(main.temp)}`; // Round temperature to nearest whole number
        descriptionDisplay.textContent = `Vreme : ${weather[0].description}`;

        weatherInfo.classList.remove("hidden");
    }

    function showError() {

        weatherInfo.classList.add("hidden")
        errorMessage.classList.remove("hidden")
    }
})