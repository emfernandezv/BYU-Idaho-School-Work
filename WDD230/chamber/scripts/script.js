//footer date 
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-EN', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) ;
document.getElementById('date').innerText = `${oLastModif}`;

//foother paragraph
const d = new Date();
let year = d.getFullYear();
let oLastModif2 = new Date(document.lastModified).toLocaleDateString('en-us') ;
document.querySelector('#info').innerText = `©${year}    |    Eduardo Fernandez    |    WDD 230 Project    |    Last Modification: ${oLastModif2}`;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }