"use strict";
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let toggle = document.getElementById("formatToggle");
let is24Hour = false; // This variable is used to track whether the clock is currently in 24-hour format or not. It is initially set to false, indicating that the clock starts in 12-hour format.
toggle.addEventListener("change", () => {
  // This line adds an event listener to the toggle element that listens for the "change" event. When the user toggles the switch, this event is triggered, and the callback function is executed.
  is24Hour = toggle.checked;
});
// Function to update the clock every second
function updateClock() {
  let currentTime = new Date(); // This line creates a new Date object that contains the current date and time. The Date object provides various methods to retrieve different components of the date and time, such as hours, minutes, and seconds.
  let hours = currentTime.getHours();
  if (!is24Hour) {
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
  }
  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  // This line updates the innerHTML of the hrs element to display the current hours. It checks if the hours are less than 10 and adds a leading zero if necessary to maintain a consistent two-digit format.
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  // This line updates the innerHTML of the min element to display the current minutes. It checks if the minutes are less than 10 and adds a leading zero if necessary to maintain a consistent two-digit format.
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  // This line updates the innerHTML of the sec element to display the current seconds. It checks if the seconds are less than 10 and adds a leading zero if necessary to maintain a consistent two-digit format.
}
updateClock();
setInterval(updateClock, 1000);
// setInterval is used to call the updateClock function every 1000 milliseconds (1 second) to keep the clock updated in real-time.
