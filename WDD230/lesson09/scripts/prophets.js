const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('#cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let portrait = document.createElement('img');
      let birthday = document.createElement('p');
      let deathday = document.createElement('p');
      let birthplace = document.createElement('p');
      let children = document.createElement('p');
      let years = document.createElement('p');
      let age = document.createElement('p');
      let sep = document.createElement('hr');


      let order_tx = "";
      switch (prophet.order){
        case '1':
            order_tx = `${prophet.order}st`;
            break;
        case '2':
            order_tx = `${prophet.order}nd`;
            break;
        case '3':
            order_tx = `${prophet.order}rd`;
            break;            
        default:
            order_tx = `${prophet.order}th`;
            break;            
      }

      function getAge(birth,death) {
        var dd = new Date(death);
        if (prophet.death == null){
            dd = new Date();
        }
        var bd = new Date(birth);
        var age = dd.getFullYear() - bd.getFullYear();
        var m = dd.getMonth() - bd.getMonth();
        if (m < 0 || (m === 0 && dd.getDate() < bd.getDate())) {
            age--;
        }

        return age;
    }

    let awd = getAge(prophet.birthdate,prophet.death);

      // Build the h2 content out to show the prophet's full name - finish the template string
      name.textContent = `${prophet.name} ${prophet.lastname}`;
      birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
      deathday.textContent = `Date of Death: ${prophet.death}`;
      birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
      children.textContent = `Children: ${prophet.numofchildren}`;
      years.textContent = `Years in the Presidency: ${prophet.length}`;
      if (prophet.death == null){
        age.textContent = `Current Age: ${awd}`;
      } else {
        age.textContent = `Age when deceased: ${awd}`;
      }


      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${name.textContent} - ${order_tx} Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(sep);
      card.appendChild(portrait);
      card.appendChild(birthday);
      if (prophet.death != null){
        card.appendChild(deathday);
      }
      card.appendChild(birthplace);
      card.appendChild(children);
      card.appendChild(years);
      card.appendChild(age);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression