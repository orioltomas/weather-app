// OpenWeather API for weather data
let weather = {
    city: "",
    description: "",
    temperature: "",
    feelsLike: "",
    humidity: "",
    apiKey: config.OPENWEATHERMAP_KEY,
    fetchWeather: function (cityName, changeBackground = true) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${this.apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod && data.cod === "404") {
                document.querySelector('.weather-error').innerHTML = data.message;
                this.showErrorContent();
            } else {
                this.handleApiData(data);
                this.addWeatherInfoToHtmlElements();

                if (changeBackground) {
                    backgroundImage.changeBackgroundImage(cityName);
                }
            }
        });
    },
    handleApiData: function (data) {
        weather.city = data['name'];
        weather.description = data['weather'][0]['description'];
        weather.temperature = data['main']['temp'] + " ºC";
        weather.feelsLike = data['main']['feels_like'] + " ºC";
        weather.humidity = data['main']['humidity'] + " %";
    },
    addWeatherInfoToHtmlElements: function () {
        document.querySelector('.weather-city-name').innerHTML = weather.city;
        document.querySelector('.weather-description').innerHTML = weather.description;
        document.querySelector('.weather-temp span').innerHTML = weather.temperature;
        document.querySelector('.weather-feeling span').innerHTML = weather.feelsLike;
        document.querySelector('.weather-humidity span').innerHTML = weather.humidity;
        document.querySelector('.weather-input').value = "";
        this.showWeatherContent();
    },
    showWeatherContent: function () {
        document.querySelector('.weather-error').classList.remove('show');
        document.querySelector('.weather-content').classList.add('show');
    },
    showErrorContent: function () {
        document.querySelector('.weather-content').classList.remove('show');
        document.querySelector('.weather-error').classList.add('show');
    }
}

// Unsplash API for background images
let backgroundImage = {
    apiKey: config.UNSPLASH_KEY,
    changeBackgroundImage: function (query) {
        fetch(`https://api.unsplash.com/search/photos/?query=${query}&orientation=landscape&client_id=${this.apiKey}`)
            .then(response => response.json())
            .then(data => {
                const numResults = data['results'].length;
                console.log(data['results']);
                if (numResults > 0) {
                    const random = Math.floor(Math.random() * numResults);
                    const imageUrl = data['results'][random]['urls']['regular'];
                    document.querySelector('.weather-background-image').style.backgroundImage = `url("${imageUrl}")`;
                }
            })
    }
}

function handleSearchClick () {
    const searchString = document.querySelector('.weather-input').value;
    weather.fetchWeather(searchString);
}

document.querySelector('.weather-search-btn').addEventListener('click', () => handleSearchClick());

document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleSearchClick();
    }
});

weather.fetchWeather('Barcelona', false);