const mainnav = document.getElementById('nav-menu')
const hambutton = document.getElementById('menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    if (hambutton.textContent != "≡ Menu"){
        hambutton.textContent = "≡ Menu";
    }else{
        hambutton.textContent = "X Close";
    }
}, false);

//footer date 
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-EN', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) ;
document.getElementById('update').innerText = `Last Update:  ${oLastModif}`;
