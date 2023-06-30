const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://mir-s3-cdn-cf.behance.net/projects/404/8050e6166946423.Y3JvcCwxMTM2LDg4OCwwLDE4OA.png";
            break;
        case 'Clear':
            weather_img.src = "https://www.seekpng.com/png/detail/3-39494_vector-cloud-png-white-clouds-vector-png.png";
            break;
        case 'Rain':
            weather_img.src = "https://www.freepnglogos.com/uploads/rain-png/png-rain-cloud-emoji-18.png";
            break;
        case 'Mist':
            weather_img.src = "https://freepngimg.com/thumb/weather/86940-forecasting-weather-sky-atmosphere-rain-png-download-free.png";
            break;
        case 'Snow':
            weather_img.src = "https://www.nicepng.com/png/full/805-8057929_snow-winter-ground-png-clipart-image-gallery-yopriceville.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});