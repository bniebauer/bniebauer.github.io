//Create a personal greeting for the page via JavaScript

var today = new Date();
var hoursNow = today.getHours();
var name = "Breanna";
var greeting;
var welcomeMsg;

if (hoursNow > 18) {
    greeting = "Good evening";
} else if (hoursNow > 12) {
    greeting = "Good afternoon";
} else {
    greeting = "Good morning";
}

welcomeMsg = greeting + ' ' + name + '!';

var elGreeting = document.getElementById('greeting');
elGreeting.textContent = welcomeMsg;
