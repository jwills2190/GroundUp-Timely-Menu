const dateTime = new Date();
let hour = dateTime.getHours();
console.log(hour);
let linkText = "";
let linkHref = "";

//if-else if-else logic to handle
//breakfast, lunch, and dinner
// let hour = 17;

if(hour < 11) {
    linkText = 'Breakfast';
    linkHref = 'breakfast.html';
} else if(hour < 16) {
    linkText = 'Lunch';
    linkHref = 'lunch.html';
} else {
    linkText = 'Dinner';
    linkHref = 'dinner.html';
}

//target the meal-link and assign the linkText and linkHref
// dynamically generate an a-tag, assign it its properties and output it to the DOM as a child of the current-menu div.
const mealLink = document.createElement('a');
mealLink.href = linkHref;
mealLink.textContent = linkText;
mealLink.className = "button";
const currentMenuDiv = document.getElementById('current-menu');
currentMenuDiv.appendChild(mealLink);

// challenge: put a "Timely Greeting" out in the nav
// if hour < 12 say "Good Morning! 10:34 is Coffee Time!"
// else if hour less than 17, say "Good Afternoon! 16:34 is Coffee Time!"
// else is at least 17 say "Good Evening! 18:34 is Coffee Time!"
// use getMinutes() to get the current minute.
// you need some tag to hold this stuff, such as a span perhaps or a li-tag so you can either type the html right in the nav 
const greetingSpan = document.getElementById('greeting');
let greeting = "";
let min = dateTime.getMinutes();
if(hour < 12) {
    greeting = "Good morning ";
} else if(hour < 17) {
    greeting = "Good afternoon ";
} else {
    greeting = "Good evening ";
}
greetingSpan.textContent = greeting + hour + ":" + min + " is Coffee Time!";
