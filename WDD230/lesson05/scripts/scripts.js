let chapters = [];

function renderChapter(chapters) {
    const element = document.getElementById('list');
    element.innerHTML = '';
    chapters.forEach((chapter) => {
        element.innerHTML +=    `
      <li ${chapter.action ? 'class="strike"' : ""}>
      <p>${chapter.detail}</p>
      <div>
        <span data-function="delete"  aria-label="delete">❌</span>
      </div>
    </li>`;
    });  
};
  
function removeChapter(ChapterElement) {
    chapters = chapters.filter(
      (chapter) => chapter.detail != ChapterElement.childNodes[1].innerText
    );
    ChapterElement.remove();
}

document.getElementById("submit").addEventListener("click", function(){
    const input = document.getElementById('favchap').value;
    chapters.push({ detail: input, action: false });
    renderChapter(chapters);
});

document.getElementById("list").addEventListener("click", function(event){
    console.log(event.target);
    const parent = event.target.closest('li');
    if (event.target.dataset.function === 'delete'){
        removeChapter(parent);
    }
});