// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections : [
        {   sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        {   sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function(sectionNum){
        const secIndexE = this.sections.findIndex(
            (a) => a.sectionNum == sectionNum
        );
        if (secIndexE >= 0){
            this.sections[secIndexE].enrolled++;
            renderSection(this.sections);
        };
    },
    dropStudent: function(sectionNum){
        const secIndexD = this.sections.findIndex(
            (a) => a.sectionNum == sectionNum
        );
        if (secIndexD >= 0){
            this.sections[secIndexD].enrolled--;
            renderSection(this.sections);
        };
    }
};

function setInfo(course){
    const pageCourseName = document.getElementById('courseName');
    const pageCourseCode = document.getElementById('courseCode');

    pageCourseName.textContent = course.name;
    pageCourseCode.textContent = course.code;
};

function renderSection(section){
    const html = section.map(
        (sec) => `<tr>
            <th>${sec.sectionNum}</th>
            <th>${sec.roomNum}</th>
            <th>${sec.enrolled}</th>
            <th>${sec.days}</th>
            <th>${sec.instructor}</th>
        </tr>`
    );

    document.getElementById('sections').innerHTML = html.join('');
};

setInfo(aCourse);
renderSection(aCourse.sections);

document.getElementById("enrollStudent").addEventListener("click", function (){
    const sect = document.getElementById('sectionNumber').value;
    aCourse.enrollStudent(sect);
});
document.getElementById("dropStudent").addEventListener("click", function (){
    const sect = document.getElementById('sectionNumber').value;
    aCourse.dropStudent(sect);
});