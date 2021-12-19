const baseURL = "https://otomusic.herokuapp.com";
let CHOICES = [];


document.documentElement.addEventListener("load", function () {
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

window.onload = function onPageLoad() {
    let code = null;
const queryString = window.location.search;
if ( queryString.length > 0 ){
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get('code');
}

let body = {
    "code": code
   }  
postCode(body);
playlistgenerator();
}

function postCode(body) {

    console.log("Sending code");
   fetch(baseURL + "/getcode", {
    method: 'POST', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      "Content-Security-Policy": "upgrade-insecure-requests"
    },
    body: JSON.stringify(body) 
  })
    .then((res) => {
      console.log("Request complete! response:", "" ,res, body);
  });
}

function reply_click(clicked_id) {
    CHOICES.push(clicked_id);
    console.log(CHOICES);
    genre();
}

function genre() {
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


function reply_click2(clicked_id) {
    CHOICES.push(clicked_id);
    console.log(CHOICES);
    mood();
}

function mood() {
    document.getElementById("choicesmood").style.display = "none";
    document.getElementById("lengthtimeline").style.backgroundColor = "#FF7448";
    document.getElementById("lengthtimeline").style.width = "40vw";
    document.getElementById("mood").style.transform = "scale(1)";
    document.getElementById("popularity").style.transform = "scale(1.1)";
    document.getElementById("popularity").style.backgroundColor = "#FF7448";
    document.getElementById("choicespopularity").style.display = "flex";
    document.getElementById("popularityimg").style.opacity = "1";
}

function playlistgenerator() {
for(let i = 0; i<20; i++) {
    document.getElementById("addedsongscontainer").insertAdjacentHTML('afterbegin', `
            <a href="./home"">
            <div>
            <img class="play" src="../images/play.png" alt="play">
            <img class="addedcovers" src="../images/damso.jpg" alt="cover">
            <div class="info">
            <h3>Damso</h3>
            <p class="songname">Ipséité</p>
            <p class="duration">2:13</p>
            </div>
            </div>
            </a>`);
}


}