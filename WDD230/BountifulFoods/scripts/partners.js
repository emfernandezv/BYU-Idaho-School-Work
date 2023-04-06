// FETCH PARTNERS DATA
async function getPartnersData(){
    const response = await fetch("data.json");
    const data = await response.json();
    displayPartners(data.partners)
}
// DISPLAY PARTNERS
const displayPartners = (partners) => {
    const cards = document.querySelector("div.cards");
    partners.forEach((partner) => {
        //CREATING OBJECTS
        let card = document.createElement("section");
        let h3 = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p")
        let phone =  document.createElement("p");
        let url =  document.createElement("a");
        //POPULATING OBJECTS
        h3.textContent = `${partner.name}`;
        address.textContent = `${partner.address}`;
        phone.textContent = `${partner.phone}`;
        logo.setAttribute("class", 'cardimg');
        logo.setAttribute("src", partner.image);
        logo.setAttribute("alt", `${partner.name}'s Logo`);
        logo.setAttribute("loading", "lazy");
        url.setAttribute("href", partner.websiteurl)
        url.textContent = `Website`
        address.setAttribute("id","address")
        phone.setAttribute("id","phone")
        //APPENDING OBJECTS
        card.appendChild(logo);
        card.appendChild(h3)
        card.appendChild(address);
        card.append(phone);
        card.appendChild(url);
        cards.appendChild(card);
    })
}
//CARDS / LIST HANDLER
const cards = document.querySelector(".cards");
function showGrid(){
    cards.classList.add("cards");
	cards.classList.remove("list");
    document.querySelector("#gridview").classList.add("active")
    document.querySelector("#listview").classList.remove("active")
}

function showList() {
	cards.classList.add("list");
	cards.classList.remove("cards");
    document.querySelector("#gridview").classList.remove("active")
    document.querySelector("#listview").classList.add("active")
}
// EVENT LISTENERS
document.querySelector("#gridview").addEventListener("click", showGrid);
document.querySelector("#listview").addEventListener("click", showList); 
//EXECUTE FUNCTIONS
getPartnersData();