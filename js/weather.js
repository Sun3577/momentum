const API_KEY = "54924e9ac20430fe2747d2fb293e58ad"

function onGeoOK (position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoFail () {
    alert("I can't find you. No weather for you. ")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail);