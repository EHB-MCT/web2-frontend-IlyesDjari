var redirect_uri = "http://127.0.0.1:5500/web2-frontend-IlyesDjari/docs/pages/home.html";
const baseURL = "https://otomusic.herokuapp.com";
var access_token = null;
var refresh_token = null;
const CHOICES = [];

document.documentElement.addEventListener("load", function () {
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});



document.getElementById('loginbutton').addEventListener("click", function() {
    fetch(baseURL + "/connect")
    .then((response) => response.json())
    .then((data) => {
    console.log(data.data);
    window.location = data.data
      });
    })



function handleRedirect() {
    let code = getCode();
    fetchAccessToken(code);
    window.history.pushState("", "", redirect_uri);
}

function getCode() {
    let code = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
        const urlParams = new URLSearchParams(queryString);
        code = urlParams.get('code');
    }
    return code;
}


function reply_click(clicked_id) {
    CHOICES.push(clicked_id);
    console.log(CHOICES);
    document.getElementById("choices").style.display = "none";
    document.getElementById("lengthtimeline").style.backgroundColor = "#A065FF";
    document.getElementById("lengthtimeline").style.width = "22.5vw";
    document.getElementById("genre").style.transform = "scale(1)";
    document.getElementById("mood").style.transform = "scale(1.1)";
    document.getElementById("mood").style.backgroundColor = "#A065FF";
    document.getElementById("moodimg").style.opacity = "1";
    document.getElementById("choicesmood").style.display = "flex";
    document.getElementById("generate").style.display = "none";
}