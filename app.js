document.documentElement.addEventListener("load", function(){
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});


// Redirection to Spotify login with Back-end 
function requestAuthorization() {
    location.replace("http://localhost:3000/login");
}







function newRelease(){
    var x = Math.floor(Math.random()*20);
    const RELEASE = `https://api.spotify.com/v1/browse/new-releases?country=BE&limit=5&offset=${x}`;
    callApi( "GET", RELEASE, null, newRealeaseResponse);
}



function userResponse() {
    var data = JSON.parse(this.responseText);
    const time = new Date().getHours();
            //document.getElementById("username").innerHTML = data.display_name; 
            //document.getElementById("userpicture").src = data.images[0].url;

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


function handleCurrentlyPlayingResponse(){
    var data = JSON.parse(this.responseText);
        if ( data.item != null ){       
            document.getElementById("imgcurrent").src = data.item.album.images[0].url;
            document.getElementById("artistcurrent").innerHTML = data.item.artists[0].name;
            document.getElementById("songcurrent").innerHTML = data.item.name;
           //setTimeout(currentlyPlaying, 1000); 
        }
}


function newRealeaseResponse(){
    var data = JSON.parse(this.responseText);
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

