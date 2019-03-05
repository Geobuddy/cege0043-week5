
function trackAndCircle(){
	trackLocation();
	addPointLinePoly();
	//getEarthquakes();
}

// function to load the HTML
function loadW3HTML() {
w3.includeHTML();
}

// add Point/Line/Circle data and track location automatically - useful for setting up different startup functions!
function startup(){
	document.addEventListener('DOMContentLoaded',function(){
		getPort();
		loadW3HTML();
	},false);
}