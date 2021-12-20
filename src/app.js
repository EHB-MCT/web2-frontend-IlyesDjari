var redirect_uri = "http://127.0.0.1:5500/web2-frontend-IlyesDjari/docs/pages/home.html";
const baseURL = "https://otomusic.herokuapp.com";

document.documentElement.addEventListener("load", function () {
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});


document.getElementById('loginbutton').addEventListener("click", async function() {
        window.open("https://otomusic.herokuapp.com/connect");
        console.log(window.location);
      });







