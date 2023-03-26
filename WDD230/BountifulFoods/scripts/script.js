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