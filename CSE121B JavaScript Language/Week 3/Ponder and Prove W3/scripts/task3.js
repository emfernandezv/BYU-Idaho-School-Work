/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named "add" that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(a,b){
    return parseFloat(a)+parseFloat(b);
};

// Step 3: Step 3: Using function declaration, define another function named "addNumbers" that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers(){
    const addend1 = document.getElementById("addend1").value;
    const addend2 = document.getElementById("addend2").value;
    document.getElementById("sum").value = String(add(addend1,addend2));
};

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(a,b){
    return parseFloat(a)-parseFloat(b);
};

function subtractNumbers(){
    const minuend = document.getElementById("minuend").value;
    const subtrahend = document.getElementById("subtrahend").value;
    document.getElementById("difference").value = String(subtract(minuend,subtrahend));
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (a,b)  => parseFloat(a) * parseFloat(b);

function mulitplyNumbers(){
    const factor1 = document.getElementById("factor1").value;
    const factor2 = document.getElementById("factor2").value;
    document.getElementById("product").value = String(multiply(factor1,factor2));
};

document.getElementById("multiplyNumbers").addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (a,b)  => parseFloat(a) / parseFloat(b);

function divideNumbers(){
    const dividend = document.getElementById("dividend").value;
    const divisor = document.getElementById("divisor").value;
    document.getElementById("quotient").value = String(divide(dividend,divisor));
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentdate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear = 0;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentdate.getFullYear();
console.log(currentYear);

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerText = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let arrayList = []
for (i = 0; i < 25 ; i++ ){
    arrayList.push(i+1);
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').innerText = arrayList;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let arrayOdd = arrayList.filter(number => number % 2 != 0);
document.getElementById('odds').innerText = arrayOdd;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let arrayEven = arrayList.filter(number => number % 2 == 0);
document.getElementById('evens').innerText = arrayEven;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById('sumOfArray').innerText = arrayList.reduce((a,b) => a + b,0)

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById('multiplied').innerText = arrayList.map( a => a*2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById('sumOfMultiplied').innerText = arrayList.map( a => a*2).reduce((a,b) => a+b,0);
