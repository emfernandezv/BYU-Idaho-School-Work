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
    let today = new Date();
    today.setMinutes(0);
    today.setSeconds(0);
    let currentTime = today.getHours();
    today.setDate(today.getDate() + 1);
    // to retrieve the forecast for the next day on the next time range
    do{
        currentTime = currentTime + 1
    }
    while (currentTime%3!=0);
    today.setHours(currentTime);

    //To get the index for the 5 days at the time specified above
    let index=[];
    for (let x = 0; x < forecast.list.length; x++ ){
        let compareDate = new Date(forecast.list[x].dt_txt)
        if(compareDate.getHours() == today.getHours()){
            index.push(x);
            today.setDate(today.getDate() + 1);
        }
    }
    // to loop the 3 day forecast
    for (let i = 0; i < 3; i++ ){
        //to get the next 3 days index
        let node = index[i];
        let date = weekDay(new Date(forecast.list[node].dt_txt).getDay());
        let temp = parseFloat(forecast.list[node].main.temp).toFixed(2);
        let desc = forecast.list[node].weather[0].description.toUpperCase();
        let img = `https://openweathermap.org/img/w/${forecast.list[node].weather[0].icon}.png`;
        //Setting values
        document.getElementById(`fc${i+1}Img`).setAttribute('src', img);
        document.getElementById(`fc${i+1}Img`).setAttribute('alt', `${desc} ${date}`);
        document.getElementById(`fc${i+1}Desc`).innerText = desc;
        document.getElementById(`fc${i+1}Grade`).innerText = temp;
        document.getElementById(`fc${i+1}Date`).innerText = date;
    }
}
// to determine the weekday in text
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
    document.getElementById('grade').innerHTML = `<strong>${temp}</strong>`;
    //setting the icon
    document.getElementById('weatherimg').setAttribute('src', iconsrc);
    document.getElementById('weatherimg').setAttribute('alt', desc.toUpperCase());
    //setting descripcion
    document.getElementById('weatherdesc').textContent = desc.toUpperCase();
    //setting humidity
    document.getElementById("humidityvalue").innerText = humidity;

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

//Slider
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