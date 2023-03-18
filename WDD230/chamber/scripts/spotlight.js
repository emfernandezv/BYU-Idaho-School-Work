const url2 = "data.json";

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.companies, "#class1");
    displayData(data.companies, "#class2");
    displayData(data.companies, "#class3");
}

getData(url2);

function displayData(businesses, container) {
    const rand = Math.random() * (businesses.length - 1);

    let name = document.querySelector(container).querySelector(".content-title");
    let logo = document.querySelector(container).querySelector(".content-img");
    let email = document.querySelector(container).querySelector(".content-email");
    let link = document.querySelector(container).querySelector(".content-email-link");
    let phone = document.querySelector(container).querySelector(".content-phone");
    let member = document.querySelector(container).querySelector(".content-member");
    



    name.textContent = businesses[rand.toFixed(0)].name;
    logo.setAttribute('src', businesses[rand.toFixed(0)].image);
    logo.setAttribute('alt', businesses[rand.toFixed(0)].name);
    email.textContent = businesses[rand.toFixed(0)].email;
    link.setAttribute('href', `mailto:${businesses[rand.toFixed(0)].email}`);
    
    phone.textContent = businesses[rand.toFixed(0)].phone;
    
    switch (businesses[rand.toFixed(0)].membershiplevel){
        case "1":
            member.textContent = "Non-Profit \n Member"
            break;
        case "2":
            member.textContent = "Bronze \n Member"
            break;
        case "3":
            member.textContent = "Silver \n Member"
            break;
        case "4":
            member.textContent = "Gold \n Member"
            break;
    }

}