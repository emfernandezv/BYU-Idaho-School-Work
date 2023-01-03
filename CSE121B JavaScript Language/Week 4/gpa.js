var listGrades = [];

function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    var array = inputSelector.split(',');
    return array.map(x => x.trim().toUpperCase());
  };
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
      let points = 0;
      if (grade == 'A'){
        points = 4;
      } else if (grade == 'B'){
        points = 3;
      } else if (grade == 'C'){
        points = 2;
      } else if (grade == 'D'){
        points = 1;
      } else {
        points = 0;
      };
      return points;
  };
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
    return (grades.reduce((a, b) => a + b,0) /  grades.length).toFixed(2);
  };
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    document.getElementById(selector).innerText = gpa;
};
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
    listGrades = getGrades(document.getElementById('grades').value);
    outputGpa(calculateGpa(listGrades.map(lookupGrade)),'output')
};

document.getElementById("submitButton").addEventListener("click", clickHandler);