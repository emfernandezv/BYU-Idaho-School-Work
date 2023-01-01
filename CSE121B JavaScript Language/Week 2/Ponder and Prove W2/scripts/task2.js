/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let strName = 'Eduardo Fernandez'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = strName;

// Step 3: declare and instantiate a variable to hold the current year
let numYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = numYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const newImage = document.createElement('img');

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src','images/imagename.jpg');

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let arrFood = ['Ceviche','Arroz con Pato', 'Seco de Res','Sancochado']

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = arrFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let strFavFood = 'Chicharron';

// Step 4: add the variable holding another favorite food to the favorite food array
arrFood.push(strFavFood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = arrFood;

// Step 6: remove the first element in the favorite foods array
arrFood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = arrFood;

// Step 8: remove the last element in the favorite foods array
arrFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = arrFood;



