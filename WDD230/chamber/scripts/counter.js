const visitsDisplay = document.querySelector("#visits");
var LastVisit = window.localStorage.getItem("LastVisit-ls");
var localeDateTime = new Date();
if (LastVisit == undefined){
    LastVisit = localeDateTime.getTime() ;
}
if (LastVisit  !== localeDateTime.getTime() ) {
    let difference = localeDateTime.getTime() - LastVisit;
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    var display = 'Last time you visited this site was: '+TotalDays+" day(s) ago.";
}else{
    var display = `This is your first visit!`;
}
visitsDisplay.innerHTML = display;

localStorage.setItem("LastVisit-ls",LastVisit)