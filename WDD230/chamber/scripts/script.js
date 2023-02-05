//footer date 
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-EN', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) ;
document.getElementById('date').innerText = `${oLastModif}`;

//foother paragraph
const d = new Date();
let year = d.getFullYear();
let oLastModif2 = new Date(document.lastModified).toLocaleDateString('en-us') ;
document.querySelector('#info').innerText = `©${year}    |    Eduardo Fernandez    |    WDD 230 Project    |    Last Modification: ${oLastModif2}`;

const mainnav = document.getElementById('nav-menu')
const hambutton = document.getElementById('menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
