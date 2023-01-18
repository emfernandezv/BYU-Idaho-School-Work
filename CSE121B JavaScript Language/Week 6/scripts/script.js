let date = null;

// return all the currencies and symbols
const url1 = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
async function getSymbol(url1) {
const response = await fetch(url1);
if (response.ok) {
        let originCurrencySymbol = await response.json();
        let finalCurrencySymbol =  originCurrencySymbol;
        populateDropDown('originDD',originCurrencySymbol);
        populateDropDown('finalDD',finalCurrencySymbol);
    }
};

// return all the conversion rate for the selected origin
async function getExchange(v1,v2) {
    let url2 = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${v1}.json`;
    const response = await fetch(url2);
    if (response.ok) {
            let valueList = await response.json();
            date = valueList['date'];
            let currencyValue = valueList[v1];
            populateConversion(parseFloat(currencyValue[v2]));
        }
};

// sets the dropdowns
function populateDropDown(name,data) {
    var selectBox, option, prop;
    selectBox = document.getElementById(name);
    for (prop in data) {
       option = document.createElement("option");
       option.textContent = data[prop];
       option.value = prop;
       selectBox.add(option);
    }
}

// gets the input values and executes the conversion
function getValue(){
    let s1 = document.getElementById('originDD').value
    let s2 = document.getElementById('finalDD').value
    getExchange(s1,s2);
}

// calculates and populares the conversion fields
function populateConversion(rate){
    document.getElementById('exchangeRate').value = rate;
    document.getElementById('updDate').innerText = `Updated: ${date}`;
    let amount = parseFloat(document.getElementById('originValue').value);
    document.getElementById('finalValue').value = amount * rate;
    document.getElementById('message').innerText = '';
};

// set initial values on the HTML
function setInitialFields(){
    document.getElementById('appTitle').innerText = 'MONEY EXCHANGER';
    document.getElementById('baseTitle').innerText = 'Origin Currency:';
    document.getElementById('valueTitle').innerText = 'Final Currency:';
    document.getElementById('rateTitle').innerText = 'Exchange Rate:';
    document.getElementById('amountTitle').innerText = 'Final Amount:';
    document.getElementById('exchange').innerText = 'Get Rate';
    document.getElementById('apply').innerText = 'Submit';
    document.getElementById('message').innerText = '';
}

// displays success message waits 5 secs and resets the page
function apply(){
    document.getElementById('message').innerText = 'You exchange has been executed successfully!';
    setTimeout(reset, 5000)
}

//reloads the page
function reset(){
    location.reload();
}

setInitialFields();
getSymbol(url1) ;

document.getElementById("exchange").addEventListener("click", getValue);
document.getElementById("apply").addEventListener("click", apply);

