//Page Title1
document.getElementById('pagetitle1').innerText = 'Design Principles Document';
// Page tittle2
document.getElementById('pagetitle2').innerText = 'Eduardo Fernandez';


//Adding Principles List
const aList = {
    principle : [
        {   principleTag: "P1",
            principleTitle:"Hicks's Law",
            principleCompany:"Global Payments",
            principleURL: "https://www.globalpayments.com/",
            principleImage: "./images/principle1.jpeg",
            principleDescription: "On this website, the first option you have is to 'Talk to sales' in order to make the user reach one of the sales representatives and guide them on the purchase of something. As you keep scrolling, you will find more information on what they have to offer and why they are the best option to make business with. This is an eficient way to apply the Hicks's Law"
        } ,
        {   principleTag: "P2",
            principleTitle:'White Space and Clean Design',
            principleCompany:'Quip',
            principleURL: 'https://www.getquip.com/',
            principleImage: './images/principle2.jpeg',
            principleDescription: "On its website, Quip uses active whitespace with purpose. The name doesn't give the viewer any clue or idea of what the page is about, but once you see the toothbrushes images from the image banner surrounded by white spaces, the viewer can easily catch the subject. The same style is found all over the website to make it easy to digest for the viewer"
        },
        {   principleTag: "P3",
            principleTitle:'PARC: Alignment',
            principleCompany:'Dr. Sasquatch',
            principleURL: 'https://drsquatch.com/',
            principleImage: './images/principle3.jpeg',
            principleDescription: "On this website, we can appreciate how the alignment of the elements such as the upper image bar, image carousel, etc. makes the user experience when browsing the site pretty easy to digest. It is interesting how the designer mixed the alignment of the content and gave it a little  'wildness' touch with the upper image banner by making it messy but readable."
        }
    ]
};

function renderList(section){
    const html = section.map(
        (sec) => `<div id="${sec.principleTag}section" class="${sec.principleTag}section">
        
        <h3 class="Title">${sec.principleTitle}</h3>
        <div id="${sec.principleTag}subsection" class="subsection">
        <h4 class="CompanyName">${sec.principleCompany}</h4>
        <a class="URL" href="${sec.principleURL}">${sec.principleURL}</a>
        <img class="Image"src="${sec.principleImage}" alt="${sec.principleDescription}">
        <p class="Description">${sec.principleDescription}</p>
        </div></div>`
    );

    document.getElementById('main').innerHTML = html.join('');
};
renderList(aList.principle);

//foother paragraph
const d = new Date();
let year = d.getFullYear();
document.querySelector('#pfooter').innerText = `©${year} - Eduardo Fernandez .:|:. Utah`;

//footer date 
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
document.querySelector('#date').innerText = `Last Updated: ${oLastModif}`;