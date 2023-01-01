const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src','https://placeimg.com/200/200/animals');
newImage.setAttribute('alt','Description');
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newTitle = document.createElement('h2');
newTitle.innerText = 'CSE 121b';
newSection.appendChild(newTitle);
const newParagraph2 = document.createElement('p');
newParagraph2.innerText = 'Welcome to Javascript Language';
newSection.appendChild(newParagraph2);
document.body.appendChild(newSection);
