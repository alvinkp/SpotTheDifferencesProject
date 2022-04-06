//Fact Button Functionality
$("#factButton").on("click", function() {

	var number = Math.floor((Math.random() * booFacts.length));
	
	$("#factText").text(booFacts[number])
})

//Error: Facts are not enclosed in double quotes so they print as 1 long string instead of individual facts.
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

//Error: Pink was not in double quotes and the function needs a string to work properly.
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//Error: Click was not in double quotes / Formatting needed correction
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//Error: Click was not in double quotes
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})