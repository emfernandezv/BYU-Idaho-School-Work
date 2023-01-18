let date = null;

// set initial values on the HTML
function setInitialFields(){
    document.getElementById('appTitle').innerText = 'MONEY EXCHANGER';
    document.getElementById('OriginTitle').innerText = 'Origin Currency:';
    document.getElementById('ExchangeTitle').innerText = 'Final Currency:';
    document.getElementById('RateTitle').innerText = 'Exchange Rate:';
    document.getElementById('AmountTitle').innerText = 'Final Amount:';
    document.getElementById('getrate').innerText = 'Get Rate';
    document.getElementById('submit').innerText = 'Submit';
    document.getElementById('message').innerText = '';
}

// return all the currencies and symbols
const url1 = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
async function getSymbol(url1) {
const response = await fetch(url1);
if (response.ok) {
        let CurrencySymbolList = await response.json();
        populateDropDown('originDD',CurrencySymbolList);
        populateDropDown('exchangeDD',CurrencySymbolList);
    }else{
        document.getElementById('message').innerText = 'There was an API Error trying to reach the first URL!';  
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

//INITIAL LOAD PAGE
setInitialFields();
getSymbol(url1) ;

// CLICK EVENTS
document.getElementById("getrate").addEventListener("click", getRate);
document.getElementById("submit").addEventListener("click", submit);

// gets the input values and executes the conversion
function getRate(){
    let s1 = document.getElementById('originDD').value
    let s2 = document.getElementById('exchangeDD').value
    let val = parseFloat(document.getElementById('originValue').value);
    if (s1 == '' || s2 == '' || s1 == null || s2 == null || val <= 0 || isNaN(val)){
        document.getElementById('message').innerText = 'You must input an amount and select the origin/final currency!';  
    } else {
        getExchange(s1,s2);
    }
}

// return all the conversion rate for the selected origin - dynamic url
async function getExchange(v1,v2) {
    let url2 = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${v1}.json`;
    const response = await fetch(url2);
    if (response.ok) {
            let valueList = await response.json();
            date = valueList['date'];
            let currencyValue = valueList[v1];
            populateConversion(parseFloat(currencyValue[v2]));
        } else {
            document.getElementById('message').innerText = 'There was an API Error trying to reach the second URL!';  
        }
};

// calculates and populares the conversion fields
function populateConversion(rate){
    document.getElementById('exchangeRate').value = rate;
    document.getElementById('updDate').innerText = `Updated: ${date}`;
    let amount = parseFloat(document.getElementById('originValue').value);
    document.getElementById('finalValue').value = amount * rate;
    document.getElementById('message').innerText = '';
};

// displays success message waits 5 secs and resets the page
function submit(){
    let val2 = parseFloat(document.getElementById('finalValue').value);
    if ( val2 <= 0 || isNaN(val2)){
        document.getElementById('message').innerText = 'You must get a quote first!';
    }else {
        document.getElementById('message').innerText = 'You exchange has been executed successfully!';
        setTimeout(reset, 5000);
    }
}

//reloads the page
function reset(){
    location.reload();
}

