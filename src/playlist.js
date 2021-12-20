const baseURL = "https://otomusic.herokuapp.com";


document.documentElement.addEventListener("load", function () {
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

window.onload = async function onPageLoad() {
    user(); 
    playlistgenerator();
    getReleases();
    user(); 
    current();
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


async function playlistgenerator() {

    console.log("Whut PT1");
    await fetch(baseURL + "/lastplaylist")
    .then((response) => response.json())
    .then((data) => {
      console.log("Whut",data);
      });
}

 //   for(let i = 0; i<20; i++) {
    //     document.getElementById("addedsongscontainer").insertAdjacentHTML('afterbegin', `
    //             <a href="./home"">
    //             <div>
    //             <img class="play" src="../images/play.png" alt="play">
    //             <img class="addedcovers" src="${data.bodycode[i].album.images[0].url}" alt="cover">
    //             <div class="info">
    //             <h3>${data.bodycode[i].artists[0].name}</h3>
    //             <p class="songname">${data.bodycode[i].name}</p>
    //             </div>
    //             </div>
    //             </a>`);
    // }