    // select HTML elements in the document
const currentTemp = document.getElementById('grade');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.getElementById('weathertext');
const windSpeed = document.getElementById("windspeed")

const url =   "https://api.openweathermap.org/data/2.5/weather?q=kirkland&appid=df316398a3c9e783d731138fffc20584&units=imperial"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function  displayResults(weatherData) {
    //Getting the current temp
    const temp = weatherData.main.temp.toFixed(0);
    //getting the icon
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    // getting the description
    const desc = weatherData.weather[0].description;
    //getting the wind speed
    const wind = weatherData.wind.speed.toFixed(0);

    //setting the temp
    currentTemp.innerHTML = `<strong>${temp}</strong>`;
    //setting the icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc.toUpperCase());
    //setting descripcion
    captionDesc.textContent = desc.toUpperCase();
    //setting wind speed
    windSpeed.innerText = wind;
    //calculating & the wind chell
    if (temp <= 50 && windSpeed > 3 ){
        let factor = 35.74 + 0.6215 * temp - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * temp * Math.pow(windSpeed,0.16))
        document.getElementById("windchill").innerText = factor.toFixed(1)
    }else{
        document.getElementById("windchill").innerText = "N/A"
    }
}


