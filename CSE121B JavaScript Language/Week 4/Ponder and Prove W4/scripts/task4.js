/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let personalInformation = {}; 
// Step 2: Inside of the object, add a property named name with a value of your name as a string
personalInformation = { name: 'Eduardo Fernandez' }
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
personalInformation['photo'] = 'images/imagename.jpg';
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
personalInformation['favoriteFoods'] = ['Picanha','Brisket','Ceviche'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
personalInformation['hobbies'] = ['Play Music','Travel','Cooking'];
// Step 6: Add another property named placesLived with a value of an empty array
personalInformation['placesLived'] = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
let arrPlaces = personalInformation['placesLived'] 
arrPlaces.push({ name:'Lima', strLenght:'29 years' });
// Step 8: For each property, add appropriate values as strings
arrPlaces.push({ name:'SLC', strLenght:'14 months' });
// Step 9: Add additional objects with the same properties for each place you've lived
arrPlaces.push({ name:'Kirkland', strLenght:'14 months' });

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerText = personalInformation['name'];
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('src',personalInformation['photo']);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('alt',personalInformation['name']);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const arrFavFood = personalInformation['favoriteFoods'];
const htmlFood = arrFavFood.map( (fav) => `<li>${fav}</li>` );
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.getElementById('favorite-foods').innerHTML = htmlFood.join('');
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const arrFavHobbies = personalInformation['hobbies'];
const htmlHobbies = arrFavHobbies.map( (fav) => `<li>${fav}</li>` );
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.getElementById('hobbies').innerHTML = htmlHobbies.join('');
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const arrPlacesLived = personalInformation['placesLived'];
const htmlPlaces = arrPlacesLived.map( 
    (fav) =>   `<dt>${fav.name}
                <dd>${fav.strLenght}</dd>
                </dt>` );

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.getElementById('places-lived').innerHTML = htmlPlaces.join('');