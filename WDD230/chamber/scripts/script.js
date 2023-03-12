const visitsDisplay = document.querySelector("#visits");
// Get the current date
const nowDate = new Date();
// Get the date of the last visit from local storage
const lastVisit = localStorage.getItem('lastVisit');
if (lastVisit) {
  // Calculate the difference in time between the last visit and the current visit
  const diffTime = nowDate.getTime() - new Date(lastVisit).getTime();
  // Convert the time difference to days and round to the nearest whole number
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  // Display the number of days since the last visit
  if (diffDays < 1){
    visitsDisplay.innerText = `Last visit: Today`;
  } else{
    visitsDisplay.innerText = `Last visit: ${diffDays} day(s) ago`;
  }
} else{
    visitsDisplay.innerText = "This is your first visit"
}
// Store the current visit date in local storage
localStorage.setItem('lastVisit', nowDate);


//footer date 
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-EN', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) ;
document.getElementById('date').innerText = `Last Update:  ${oLastModif}`;

//foother paragraph
const d = new Date();
let year = d.getFullYear();
let oLastModif2 = new Date(document.lastModified).toLocaleDateString('en-us') ;
document.querySelector('#info').innerText = `©${year}    |    Eduardo Fernandez    |    WDD 230 Project    |    Last Modification: ${oLastModif2}`;

let day = d.getDay();
let banner = document.querySelector('.banner')

if (d.getDay() == 1 || d.getDay() == 2){
    banner.style.display = 'block'
}else {
    banner.style.display = 'none'
}
const mainnav = document.getElementById('nav-menu')
const hambutton = document.getElementById('menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
var localeDateTime = new Date();
document.getElementById('datetime').innerText = localeDateTime;
