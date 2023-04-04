let data = [];

async function getFruitData() {
    try {
        const response = await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json");
      if (response.ok) {
        data = await response.json();
        populateLists(data,1);
        populateLists(data,2);
        populateLists(data,3);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
getFruitData();

function populateLists(list,number){
    let listField = document.getElementById(`input-fruit${number}`);
    // first value
    let option = document.createElement("option");
    option.setAttribute("value"," ");
    option.setAttribute("label","Select a fruit");
    listField.appendChild(option)

    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value",list[i].id);
        option.setAttribute("label",list[i].name);
        listField.appendChild(option)
    }
}

document.querySelector("#input-fruit1").addEventListener("change", function() {
    fruitValue(1)
});
document.querySelector("#input-fruit2").addEventListener("change", function() {
    fruitValue(2)
});
document.querySelector("#input-fruit3").addEventListener("change", function() {
    fruitValue(3)
});
function fruitValue(number){
    let selectedValue = document.getElementById(`input-fruit${number}`).value;
    let nameField = document.getElementById(`fruit${number}-name`);
    let carbsField = document.getElementById(`fruit${number}-carbs`);
    let proteinField = document.getElementById(`fruit${number}-protein`);
    let fatField = document.getElementById(`fruit${number}-fat`);
    let sugarField = document.getElementById(`fruit${number}-sugar`);
    let calField = document.getElementById(`fruit${number}-cal`);

    for (let i = 0; i < data.length; i++) {
       if (data[i].id == selectedValue) {
            nameField.textContent = data[i].name;
            carbsField.textContent = parseFloat(data[i].nutritions.carbohydrates).toFixed(2);
            proteinField.textContent = parseFloat(data[i].nutritions.protein).toFixed(2);
            fatField.textContent = parseFloat(data[i].nutritions.fat).toFixed(2);
            sugarField.textContent = parseFloat(data[i].nutritions.sugar).toFixed(2);
            calField.textContent = parseFloat(data[i].nutritions.calories).toFixed(2);
        }
    }

    let totalCarbField = document.getElementById("total-carbs");
    let totalProteinField = document.getElementById("total-protein");
    let totalFatField = document.getElementById("total-fat");
    let totalSugarField = document.getElementById("total-sugar");
    let totalCalField = document.getElementById("total-cal");
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCal = 0;
    for (let a=1; a<4; a++){
        totalCarbs = totalCarbs + parseFloat(document.getElementById(`fruit${a}-carbs`).textContent);
        totalProtein = totalProtein + parseFloat(document.getElementById(`fruit${a}-protein`).textContent);
        totalFat = totalFat + parseFloat(document.getElementById(`fruit${a}-fat`).textContent);
        totalSugar = totalSugar + parseFloat(document.getElementById(`fruit${a}-sugar`).textContent);
        totalCal = totalCal + parseFloat(document.getElementById(`fruit${a}-cal`).textContent);
    }
    totalCarbField.textContent = totalCarbs.toFixed(2);
    totalProteinField.textContent = totalProtein.toFixed(2);
    totalFatField.textContent = totalFat.toFixed(2);
    totalSugarField.textContent = totalSugar.toFixed(2);
    totalCalField.textContent = totalCal.toFixed(2);
}

const f4class = document.getElementById('fs4');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    if (f4class.classList == 'active'){
        f4class.classList.replace('active','hidden');
    }else{
        f4class.classList.replace('hidden','active');
        summary();
    }
}, false);

function summary(){
    /*CLIENT DATA*/
    var f1 = document.getElementById('input-fruit1')[document.getElementById('input-fruit1').selectedIndex].label;
    var f2 = document.getElementById('input-fruit2')[document.getElementById('input-fruit2').selectedIndex].label;
    var f3 = document.getElementById('input-fruit3')[document.getElementById('input-fruit3').selectedIndex].label;
    let orderDate = new Date().toLocaleDateString('en-EN', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) ;;
    document.getElementById("order-date").textContent = orderDate;
    document.getElementById("order-name").textContent = document.getElementById("input-name").value;
    document.getElementById("order-email").textContent = document.getElementById("input-email").value;
    document.getElementById("order-cellphone").textContent = document.getElementById("input-cellphone").value;
    document.getElementById("order-obs").textContent = document.getElementById("input-additional").innerText;
    document.getElementById("order-f1").textContent = f1;
    document.getElementById("order-f2").textContent = f2;
    document.getElementById("order-f3").textContent = f3;


    /*TOTAL*/
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCal = 0;
    for (let a=1; a<4; a++){
        totalCarbs = totalCarbs + parseFloat(document.getElementById(`fruit${a}-carbs`).textContent);
        totalProtein = totalProtein + parseFloat(document.getElementById(`fruit${a}-protein`).textContent);
        totalFat = totalFat + parseFloat(document.getElementById(`fruit${a}-fat`).textContent);
        totalSugar = totalSugar + parseFloat(document.getElementById(`fruit${a}-sugar`).textContent);
        totalCal = totalCal + parseFloat(document.getElementById(`fruit${a}-cal`).textContent);
    }
    document.getElementById("order-carbs").textContent = totalCarbs.toFixed(2);
    document.getElementById("order-protein").textContent = totalProtein.toFixed(2);
    document.getElementById("order-fat").textContent = totalFat.toFixed(2);
    document.getElementById("order-sugar").textContent = totalSugar.toFixed(2);
    document.getElementById("order-cal").textContent = totalCal.toFixed(2);
}

