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
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value",list[i].id);
        option.setAttribute("label",list[i].name);
        listField.appendChild(option)
    }
}

document.querySelector("#input-fruit1").addEventListener("change", function() {fruitValue(1)});
document.querySelector("#input-fruit2").addEventListener("change", function() {fruitValue(2)});
document.querySelector("#input-fruit3").addEventListener("change", function() {fruitValue(3)});

function fruitValue(number){
    let selectedValue = document.getElementById(`input-fruit${number}`).value;
    for (let i = 0; i < data.length; i++) {
       if (data[i].id == selectedValue) {
            document.getElementById(`fruit${number}-name`).textContent = data[i].name;
            document.getElementById(`fruit${number}-carbs`).textContent = parseFloat(data[i].nutritions.carbohydrates).toFixed(2);
            document.getElementById(`fruit${number}-protein`).textContent = parseFloat(data[i].nutritions.protein).toFixed(2);
            document.getElementById(`fruit${number}-fat`).textContent = parseFloat(data[i].nutritions.fat).toFixed(2);
            document.getElementById(`fruit${number}-sugar`).textContent = parseFloat(data[i].nutritions.sugar).toFixed(2);
            document.getElementById(`fruit${number}-cal`).textContent = parseFloat(data[i].nutritions.calories).toFixed(2);
        }
    }
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
    document.getElementById("total-carbs").textContent = totalCarbs.toFixed(2);
    document.getElementById("total-protein").textContent = totalProtein.toFixed(2);
    document.getElementById("total-fat").textContent = totalFat.toFixed(2);
    document.getElementById("total-sugar").textContent = totalSugar.toFixed(2);
    document.getElementById("total-cal").textContent = totalCal.toFixed(2);
}

const f4class = document.getElementById('fs4');
const f5class = document.getElementById('fs5');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    if (validate() == 0){
        f5class.classList.replace('active','hidden');
        if (f4class.classList == 'active'){
            f4class.classList.replace('active','hidden');
        }else{
            f4class.classList.replace('hidden','active');
            summary();
        }
    }else{
        if (f5class.classList == 'active'){
            summary();
        }else{
            f5class.classList.replace('hidden','active');
            summary();
        }
    }
}, false);

function validate(){
    let errorCount = 0;
    let list = document.getElementById('errorlist')
    list.innerHTML = ''
    var name = document.getElementById("input-name").value;
    if(name == ''){
        let optionName = document.createElement("li");
        optionName.innerText = 'You need add your name.';
        list.appendChild(optionName);
        errorCount = errorCount + 1;
    }
    var email = document.getElementById("input-email").value;
    if(email == ''){
        let optionEmail = document.createElement("li");
        optionEmail.innerText = 'You need add your email.';
        list.appendChild(optionEmail);
        errorCount = errorCount + 1;
    }
    var cellphone = document.getElementById("input-cellphone").value;
    if(cellphone == ''){
        let optionPhone = document.createElement("li");
        optionPhone.innerText = 'You need add your phone number.';
        list.appendChild(optionPhone);
        errorCount = errorCount + 1;
    }
    var f1 = document.getElementById('input-fruit1')[document.getElementById('input-fruit1').selectedIndex].label
    if(f1 == 'Please select your fruit'){
        let optionf1 = document.createElement("li");
        optionf1.innerText = 'You need to choose a fruit 1.';
        list.appendChild(optionf1);
        errorCount = errorCount + 1;
    }
    var f2 = document.getElementById('input-fruit2')[document.getElementById('input-fruit2').selectedIndex].label;
    if(f2 == 'Please select your fruit'){
        let optionf2 = document.createElement("li");
        optionf2.innerText = 'You need to choose a fruit 2.';
        list.appendChild(optionf2);
        errorCount = errorCount + 1;
    }
    var f3 = document.getElementById('input-fruit3')[document.getElementById('input-fruit3').selectedIndex].label;
    if(f3 == 'Please select your fruit'){
        let optionf3 = document.createElement("li");
        optionf3.innerText = 'You need to choose a fruit 3.';
        list.appendChild(optionf3);
        errorCount = errorCount + 1;
    }
    return errorCount;
}

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
    document.getElementById("order-obs").textContent = String(document.getElementById("input-additional").value);
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

    // Store the current visit date in local storage
    var qDrinks = parseInt(localStorage.getItem('qDrinks'));
    if (isNaN(qDrinks)){
        localStorage.setItem('qDrinks', 1) ;
    }else{
        qDrinks = qDrinks + 1
        localStorage.setItem('qDrinks', qDrinks) ;
    }

}

