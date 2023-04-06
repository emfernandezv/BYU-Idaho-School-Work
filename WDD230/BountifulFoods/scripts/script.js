// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('responsive');
    if (document.getElementById('menu').textContent != "≡ Menu"){
        document.getElementById('menu').textContent = "≡ Menu";
    }else{
        document.getElementById('menu').textContent = "X Close";
    }
}, false);

//footer date 
function displayModDate(){
    let oLastModif = new Date(document.lastModified).toLocaleDateString('en-EN', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) ;
    document.getElementById('update').innerText = `Last Update:  ${oLastModif}`;
}

//EXECUTING FUNCTION
displayModDate();