//  API
const Api = {
    key: "23dffb5c692e598cbf8f63b524e82989",
    base: "https://api.openweathermap.org/data/2.5/"
}

//  Selectors
const searchBox = document.querySelector(`.search-box`);
const mainSection = document.querySelector(`.main-section`)
const cityName = document.querySelector(`.city`);
const temperature = document.querySelector(`.temperature`);
const weatherDescription = document.querySelector(`.weather`);
const hiLow = document.querySelector(`.hi-low`)

//  Functions
function searchValue(Event) {
    if (Event.keyCode == 13) {
        getWeather(searchBox.value);
    }
}
function getWeather(searchValue) {
    fetch(`${Api.base}weather?q=${searchValue}&units=metric&APPID=${Api.key}`)
    .then (weather => {return weather.json();})
    .then (displayWeather)
}
function displayWeather(weather) {
    cityName.innerHTML = `${weather.name}`;
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    weatherDescription.innerHTML = weather.weather[0].main;
    hiLow.innerHTML = `H:${Math.round(weather.main.temp_max)}° L:${Math.round(weather.main.temp_min)}°`
    mainSection.classList.add(`active`);
}

//  Event Listener
searchBox.addEventListener('keypress', searchValue);