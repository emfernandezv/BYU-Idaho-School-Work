
// Page tittle
document.getElementById('pagetitle').innerText = 'Eduardo Fernandez';

//Section Name
document.getElementById('sectionName').innerText = 'WDD 230: Assignment Portal';

//Adding Section List
const aList = {
    lessons : [
        {   lessonNumber:'01',
            lessonTitle:'W1 Activity: Applied JavaScript - CodePen',
            lessionPage: 'https://codepen.io/emfernandezv/pen/oNMYEom'
        } ,
        {   lessonNumber:'02',
            lessonTitle:'W02 Assignment: Design Principles Document',
            lessionPage: './lesson2/design-principles.html'
        } ,
        {   lessonNumber:'03',
            lessonTitle:'W03 Assignment: Website Planning Document',
            lessionPage: './lesson3'
        },
        {   lessonNumber:'04',
            lessonTitle:'Chamber of Commerce',
            lessionPage: './chamber'
        },
        {   lessonNumber:'05',
            lessonTitle:'W05 Assignment: BOM',
            lessionPage: './lesson05/bom.html'
        },
        {   lessonNumber:'06',
            lessonTitle:'Tittle 06',
            lessionPage: 'Page 06'
        },
        {   lessonNumber:'07',
            lessonTitle:'Tittle 07',
            lessionPage: 'Page 07'
        },
        {   lessonNumber:'08',
            lessonTitle:'Tittle 08',
            lessionPage: 'Page 08'
        },
        {   lessonNumber:'09',
            lessonTitle:'Tittle 09',
            lessionPage: 'Page 09'
        },
        {   lessonNumber:'10',
            lessonTitle:'Tittle 10',
            lessionPage: 'Page 10'
        },
        {   lessonNumber:'11',
            lessonTitle:'Tittle 11',
            lessionPage: 'Page 11'
        }
    ]
};

function renderList(section){
    const html = section.map(
        (sec) => `<ul>
            <li>Lesson ${sec.lessonNumber}: <a href="${sec.lessionPage}">${sec.lessonTitle}</a></li>
            </ul>`
    );

    document.getElementById('list').innerHTML = html.join('');
};
renderList(aList.lessons);

//Section Disclaimer
document.getElementById('disclaimer').innerText = 'Some lessons may need more than one activity/assignment link.';

//foother paragraph
const d = new Date();
let year = d.getFullYear();
document.querySelector('#pfooter').innerText = `©${year} - Eduardo Fernandez .:|:. Utah`;



//footer date 
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
document.querySelector('#date').innerText = `Last Updated: ${oLastModif}`;
