const visitsDisplay = document.querySelector("#visits");

// Get the current date
const nowDate = new Date();

// Get the date of the last visit from local storage
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
  // Calculate the difference in time between the last visit and the current visit
  const diffTime = nowDate.getTime() - new Date(lastVisit).getTime();

  // Convert the time difference to days and round to the nearest whole number
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  // Display the number of days since the last visit
  if (diffDays < 1){
    visitsDisplay.innerText = `Last visit: Today`;

  } else{
    visitsDisplay.innerText = `Last visit: ${diffDays} day(s) ago`;
    
  }
} else{
    visitsDisplay.innerText = "This is your first visit"
}

// Store the current visit date in local storage
localStorage.setItem('lastVisit', nowDate);
