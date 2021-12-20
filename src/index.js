const baseURL = "https://otomusic.herokuapp.com";
let CHOICES = [];


document.documentElement.addEventListener("load", function () {
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

window.onload = function onPageLoad() {
getReleases();
user(); 
current();
playlistgenerator();
}

async function getReleases() {
    await fetch(baseURL + "/newreleases")
    .then((response) => response.json())
    .then((data) => {
        for(let i = 0; i<5; i++) {

        document.getElementById("release").insertAdjacentHTML('afterbegin', `
        <a href="${data.body.albums.items[i].external_urls.spotify}"">
        <div>
        <img src="${data.body.albums.items[i].images[0].url}" alt="cover">
        <h3>${data.body.albums.items[i].artists[0].name}</h3>
        <p>${data.body.albums.items[i].name}</p>
        </div>
        </a>`);
    }
      });
}

async function current() {
     await fetch(baseURL + "/currentsong")
     .then((response) => response.json())
     .then((data) => {
        if ( data.body.item != null ){       
            document.getElementById("imgcurrent").src = data.body.item.album.images[0].url;
            document.getElementById("artistcurrent").innerHTML = data.body.item.artists[0].name;
            document.getElementById("songcurrent").innerHTML = data.body.item.name;
            document.getElementById("imgcurrent").style.margin = "0";
            document.getElementById("imgcurrent").style.width = "10vw";
            document.getElementById("imgcurrent").style.opacity = "100%";
        }
       });
 }


 async function user() {
     await fetch(baseURL + "/getuser")
     .then((response) => response.json())
     .then((data) => {
        const time = new Date().getHours();
        document.getElementById("username").innerHTML = data.body.display_name; 
        document.getElementById("userpicture").src = data.body.images[0].url

        if (time < 12) {
            document.getElementById("daytime").innerHTML = "Good morning, "
        }
        else if (time < 18) {
            document.getElementById("daytime").innerHTML = "Good afternoon, "
        }
        else {
            document.getElementById("daytime").innerHTML = "Good evening, "
        }
       });
 }


 function handleClick(event) {
    let buttonValue = event.target.parentElement.id;
    CHOICES.push(buttonValue);
    if (CHOICES[1] == undefined) {
    genre();
   } else if (CHOICES[0] !== undefined && CHOICES[1] !== undefined && CHOICES[2] == undefined) {
       mood();
   } else {
     popularity();
   }

  }
  document.querySelector("#choices").addEventListener("click", handleClick);
  document.querySelector("#choicesmood").addEventListener("click", handleClick);
  document.querySelector("#choicespopularity").addEventListener("click", handleClick);

//   function handleClick2(event) {
//     let buttonValue = event.target.parentElement.id;
//     CHOICES.push(buttonValue);
//     console.log(buttonValue);
//     mood();
//   }
//   document.querySelector("#choicesmood").addEventListener("click", handleClick2);
  




function genre() {
    document.getElementById("choices").style.display = "none";
    document.getElementById("lengthtimeline").style.backgroundColor = "#A065FF";
    document.getElementById("lengthtimeline").style.width = "22.5vw";
    document.getElementById("genre").style.transform = "scale(1)";
    document.getElementById("mood").style.transform = "scale(1.1)";
    document.getElementById("mood").style.transition = "all 1s";
    document.getElementById("mood").style.backgroundColor = "#A065FF";
    document.getElementById("moodimg").style.opacity = "1";
    document.getElementById("choicesmood").style.display = "flex";
    document.getElementById("generate").style.display = "none";
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

function popularity() {
    console.log(CHOICES);
    document.getElementById("choicespopularity").style.display = "none";
    document.getElementById("lengthtimeline").style.backgroundColor = "#1DB954";
    document.getElementById("lengthtimeline").style.width = "57.5vw";
    document.getElementById("popularity").style.transform = "scale(1)";
    document.getElementById("playlist").style.transform = "scale(1.1)";
    document.getElementById("playlist").style.backgroundColor = "#1DB954";
    document.getElementById("playlistimg").style.opacity = "1";
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