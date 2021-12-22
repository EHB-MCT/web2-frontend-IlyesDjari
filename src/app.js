const baseURL = "https://otomusic.herokuapp.com";

document.documentElement.addEventListener("load", function() {
	document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function() {
	document.getElementById("loader").style.display = "none";
});


document.getElementById('loginbutton').addEventListener("click", async function() {
	window.open("https://otomusic.herokuapp.com/connect");
});