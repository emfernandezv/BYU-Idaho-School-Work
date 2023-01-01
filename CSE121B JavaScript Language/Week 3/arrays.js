const steps = ["one", "two", "three"];
const stepsHtml = steps.reduce((acumulator, currentvalue) => acumulator +'<li>'+currentvalue+'</li>','');
console.log(stepsHtml);


//activity 2
const act2Array = ['A','B','A'];
function convertLetters2Grades(letter){
    let points = 0;
    if (letter == 'A'){
        points = 4;
    } else {
        if (letter == 'B'){
            points = 3;
        };
    };
    return points;
};

const gpaScore = act2Array.map(convertLetters2Grades);
console.log(gpaScore);

//activity 3 
const initialValue = 0;
const reduced = gpaScore.reduce((acumulator, currentvalue) => acumulator + currentvalue,initialValue) /  gpaScore.length;
console.log(reduced);

//activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filtered = fruits.filter(word => word.length > 6);
console.log(filtered);

//activity 5
const valueList = [12,34,21,54];
let luckNumber = 21;
const indexed = valueList.indexOf(luckNumber)
console.log(indexed);