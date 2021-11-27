var redirect_uri = "http://127.0.0.1:5500/pages/home.html";
var client_id = "75d6012515364a608ebbf7ec5113308c"; 
var client_secret = "e9069eeeb800474394cbe578f1a93c67"; 
var access_token = null;
var refresh_token = null;

const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";
const PLAYER = "https://api.spotify.com/v1/me/player";
const CURRENTLYPLAYING = "https://api.spotify.com/v1/me/player/currently-playing";
const PROFILE = "https://api.spotify.com/v1/me";
const CHOICES = [];

document.documentElement.addEventListener("load", function(){
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});


// Login in on Spotify with Back-end 
function requestAuthorization() {
    location.replace("http://localhost:3000/login");
}


















function onPageLoad(){
    client_id = localStorage.getItem("client_id");
    client_secret = localStorage.getItem("client_secret");

    if ( window.location.search.length > 0 ){
        handleRedirect();
    }
    else{
        access_token = localStorage.getItem("access_token");
        if ( access_token == null ){
            document.getElementById("tokenSection").style.display = 'block';  
        }
        else { 
            userInformation();
            currentlyPlaying();
            newRelease();
        }
    }
}








function newRelease(){
    var x = Math.floor(Math.random()*20);
    const RELEASE = `https://api.spotify.com/v1/browse/new-releases?country=BE&limit=5&offset=${x}`;
    callApi( "GET", RELEASE, null, newRealeaseResponse);
}

function currentlyPlaying(){
     callApi( "GET", PLAYER, null, handleCurrentlyPlayingResponse);
     
}

function userInformation() {
    callApi( "GET", PROFILE, null, userResponse);
}

function userResponse() {
    var data = JSON.parse(this.responseText);
    const time = new Date().getHours();
    if ( data != null ){
            document.getElementById("username").innerHTML = data.display_name; 
            document.getElementById("userpicture").src = data.images[0].url;

            if (time < 12) {
                document.getElementById("daytime").innerHTML = "Good morning, ";
            }
            else if (time < 18) {
                document.getElementById("daytime").innerHTML = "Good afternoon, ";
            }
            else {
                document.getElementById("daytime").innerHTML = "Good evening, ";
            }
    }
    else if ( this.status == 401 ){
    refreshAccessToken();
    }
}


function handleCurrentlyPlayingResponse(){
    var data = JSON.parse(this.responseText);
    if ( this.status == 200 ){
        if ( data.item != null ){       
            document.getElementById("imgcurrent").src = data.item.album.images[0].url;
            document.getElementById("artistcurrent").innerHTML = data.item.artists[0].name;
            document.getElementById("songcurrent").innerHTML = data.item.name;
           //setTimeout(currentlyPlaying, 1000); 
        }
    }
    else if ( this.status == 401 ){
        refreshAccessToken();
    }
}


function newRealeaseResponse(){
    var data = JSON.parse(this.responseText);
    if ( data.albums != null ){
        for(let i = 0; i<5; i++) {
            document.getElementById("release").insertAdjacentHTML('afterbegin', `
            <a href="${data.albums.items[i].external_urls.spotify}"">
            <div>
            <img src="${data.albums.items[i].images[0].url}" alt="cover">
            <h3>${data.albums.items[i].artists[0].name}</h3>
            <p>${data.albums.items[i].name}</p>
            </div>
            </a>`);
        }
    }
    else if ( this.status == 401 ){
    refreshAccessToken();
    }
}



    
   /* document.getElementById("choices").style.display = "none";
    document.getElementById("lengthtimeline").style.backgroundColor = "#A065FF";
    document.getElementById("lengthtimeline").style.width = "22.5vw";
    document.getElementById("genre").style.transform = "scale(1)";
    document.getElementById("mood").style.transform = "scale(1.1)";
    document.getElementById("mood").style.backgroundColor = "#A065FF";
    document.getElementById("moodimg").style.opacity = "1";
    document.getElementById("choicesmood").style.display = "flex";
    document.getElementById("generate").style.display = "none";
    */

