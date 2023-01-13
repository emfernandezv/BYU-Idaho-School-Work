// fetch.js
const url = "https://pokeapi.co/api/v2/4";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    const outputElement =   document.querySelector("#output") ;
    results = data;
    const html =    `
                    <h1>${results.name}</h1>
                    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">
                    `;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);