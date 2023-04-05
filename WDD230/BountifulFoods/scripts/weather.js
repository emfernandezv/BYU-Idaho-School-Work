// select HTML elements in the document
const currentTemp = document.getElementById('grade');
const weatherIcon = document.getElementById('weatherimg');
const captionDesc = document.getElementById('weatherdesc');
const humidityVal = document.getElementById("humidityvalue")


const url =   "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=df316398a3c9e783d731138fffc20584&units=imperial"

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

const url2 =   "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=df316398a3c9e783d731138fffc20584&units=imperial"

async function apiForecastFetch() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
        const forecast = await response.json();
        displayForecast(forecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
    
apiFetch();
apiForecastFetch();

function displayForecast(forecast){

    //getting mid day forecast day 1 [10]
    let d1Date = weekDay(new Date(forecast.list[10].dt_txt).getDay());
    let d1Temp = forecast.list[10].main.temp;
    let d1Desc = forecast.list[10].weather[0].description.toUpperCase();
    let d1Img = `https://openweathermap.org/img/w/${forecast.list[2].weather[0].icon}.png`;

    document.getElementById('fc1Img').setAttribute('src', d1Img);
    document.getElementById('fc1Img').setAttribute('alt', d1Desc.toUpperCase());
    document.getElementById('fc1Desc').innerText = d1Desc;
    document.getElementById('fc1Grade').innerText = d1Temp;
    document.getElementById('fc1Date').innerText = d1Date;

    //getting mid day forecast day 2 [18]
    let d2Date = weekDay(new Date(forecast.list[18].dt_txt).getDay());
    let d2Temp = forecast.list[18].main.temp;
    let d2Desc = forecast.list[18].weather[0].description.toUpperCase();
    let d2Img = `https://openweathermap.org/img/w/${forecast.list[10].weather[0].icon}.png`;

    document.getElementById('fc2Img').setAttribute('src', d2Img);
    document.getElementById('fc2Img').setAttribute('alt', d2Desc.toUpperCase());
    document.getElementById('fc2Desc').innerText = d2Desc;
    document.getElementById('fc2Grade').innerText = d2Temp;
    document.getElementById('fc2Date').innerText = d2Date;

    //getting mid day forecast day 3 [26]
    let d3Date = weekDay(new Date(forecast.list[26].dt_txt).getDay());
    let d3Temp = forecast.list[26].main.temp;
    let d3Desc = forecast.list[26].weather[0].description.toUpperCase();
    let d3Img = `https://openweathermap.org/img/w/${forecast.list[18].weather[0].icon}.png`;

    document.getElementById('fc3Img').setAttribute('src', d3Img);
    document.getElementById('fc3Img').setAttribute('alt', d3Desc.toUpperCase());
    document.getElementById('fc3Desc').innerText = d3Desc;
    document.getElementById('fc3Grade').innerText = d3Temp;
    document.getElementById('fc3Date').innerText = d3Date;
}

function weekDay(number){
    switch (number){
        case 0: return "SUN";
        case 1: return "MON";
        case 2: return "TUE";
        case 3: return "WED";
        case 4: return "THU";
        case 5: return "FRI";
        case 6: return "SAT";
    }
}

function  displayResults(weatherData) {
    //Getting the current temp
    const temp = weatherData.main.temp.toFixed(0);
    //getting the icon
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    // getting the description
    const desc = weatherData.weather[0].description;
    //getting the humidity
    const humidity = weatherData.main.humidity.toFixed(0);

    //setting the temp
    currentTemp.innerHTML = `<strong>${temp}</strong>`;
    //setting the icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc.toUpperCase());
    //setting descripcion
    captionDesc.textContent = desc.toUpperCase();
    //setting humidity
    humidityVal.innerText = humidity;

}

// DRINK COUNTER
const drinksCreated = document.querySelector("#drinknumber");
// Get the number from local storage
const lastValue = localStorage.getItem('qDrinks');
if (lastValue > 0) {
    drinksCreated.innerText = lastValue;
}else{
    drinksCreated.innerText = "NO";
}


var slidePosition = 0;
SlideShow();

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "block";
    setTimeout(SlideShow, 3000); // Change image every 3 seconds
  } 