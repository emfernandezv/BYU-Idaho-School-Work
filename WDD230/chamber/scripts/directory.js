
async function getCompanyData(){
    const response = await fetch("data.json");
    const data = await response.json();
    displayCompanies(data.companies)

}
getCompanyData();

const displayCompanies = (companies) => {
    const cards = document.querySelector("div.cards");
    companies.forEach((company) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p")
        let phone =  document.createElement("p");
        let url =  document.createElement("a");



        h2.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        logo.setAttribute("src", company.image);
        logo.setAttribute("alt", `${company.name}'s Logo`);
        logo.setAttribute("loading", "lazy");
        url.setAttribute("href", company.websiteurl)
        url.textContent = `${company.websiteurl}`
    
        address.setAttribute("id","address")
        phone.setAttribute("id","phone")

        card.appendChild(logo);
        card.appendChild(h2)
        card.appendChild(address);
        card.append(phone);
        card.appendChild(url);

        cards.appendChild(card);
        
    })
}

const gridbutton = document.querySelector("#gridview");
const listbutton = document.querySelector("#listview");
const cards = document.querySelector(".cards");


document.querySelector("#gridview").addEventListener("click", showGrid);

document.querySelector("#listview").addEventListener("click", showList); 

function showGrid(){
    cards.classList.add("cards");
	cards.classList.remove("list");
    gridbutton.classList.add("active")
    listbutton.classList.remove("active")
}

function showList() {
	cards.classList.add("list");
	cards.classList.remove("cards");
    gridbutton.classList.remove("active")
    listbutton.classList.add("active")
}

function search() {
    // Declare variables
    const sections = document.querySelectorAll("section");
    const sectionTitles = [];
    const noBusiness = document.getElementById("noBusinessFound")

    sections.forEach(section => {
        const title = section.querySelector("h2").textContent;
        sectionTitles.push(title);
        
    });

    const filterInput = document.getElementById("searchInput");

    filterInput.addEventListener("input", () => {
        const inputValue = filterInput.value.toLowerCase();
        const filteredTitles = sectionTitles.filter(title => title.toLowerCase().includes(inputValue));
    


        sections.forEach(section => {
            const title = section.querySelector("h2").textContent;
            if (filteredTitles.includes(title)){
                section.style.display = ""
            } else {
                section.style.display = "none"
            }
        });
        const allHidden = [...sections].every(section => section.style.display === 'none');

        if (allHidden) {
            noBusiness.style.display = 'block';
        } else {
            noBusiness.style.display = 'none';
        }
    });

    
}

