/*Send alert using Javasript*/
window.alert('Welcome to the Website');
/*Delay one command at specified level*/
setTimeout(function() {
	window.alert('Welcome to the Website. ');
}, 2000);


/*Create and call a JavaScript function that keeps track of the current day and time
Create a date/time calculation in the same function as above*/
function displayDay() {
	var currentDay = new Date("July 12, 2025");
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();
	var nextYear = currentDay.getFullYear() + 1;
	var newYear = new Date ("January 1 " + nextYear);
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);
	
	
	document.getElementById("dateNow").innerHTML = dateStr + " " + timeStr;
	
	/*Use Math Method*/
	document.getElementById("days").textContent = Math.floor(daysLeft);
}

displayDay();

/*convert text to number*/
var textConvert parseInt("10 years old");
	console.log(textConvert);

