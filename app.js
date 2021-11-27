"use strict"

document.documentElement.addEventListener("load", function(){
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});




const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "AQBEQNGmtE6A0NJSIkc1oEScGyf91av4THmQArDtZI30ZczRcpGjUs6lfhKz1E4tOBgnVrRJvQhehj91O725AYfpPYFzHlu5HGDeC7xC9SrsxrTr1KZuWoPkKp7GKSX2wYaj1ssQwLfJ7AGKkDWZVnQrI_9UukHpSG7x0_7aGrGC3qliUFwoFeCjCYue6kmtHK9N7EsSdEF5YYxZ1493wvRn4arynlQ6kh7Txnprl2tt1shzTB_ntSicJ9mXJXR-IzI2kvGZgFL9Dwt5f1KMgC2Jj5pMjCJMJP8HgEGYWkfgNzOAWAbSjwqCk8V1vBh13S7cxZtJGFXZ9Fu723L4QEspQaWIuyklDsrcTtPXRPM735uYKmevSQ-x3QcK3COiKL2oD6wK5TYQL9FEqJbjrXSx-3ipbiChYH4UpMFJGvyeHpONuzxRDMgOGPY3CorHBKNpHzS3sNnCCaDcUmnWaPOkPSfF58k7a2bCML000PmqybczwvkVEf2MjAirRjV_8WNjbXuiKd0y11XdUPxFJUuU8FfYWS2bEvu3EytoW1d8MER4Fs08EWzWKq-BJwaQM6xY-BIy8wUFFZTlF7-he9Tfz6EFRqdHYKMlJzoENnGx_Mys0TYfLyAfkZzI8LgyOI5ajbmbBCO-aQlVVvG90-0GoUvcg4Y6Wy8Wr-8DTsOW0lhWWS2yEVBymabvXMS8wh6UxlRzj_eOspyZw5kUfpeOIECmvU-A73mS";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body);
    //getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("---------------+++++++++++++++++++++++++")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id)
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    fs.writeFileSync(playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name)
  }
  
  console.log("---------------+++++++++++++++++++++++++")
  return tracks;
}

getMyData();


















 /*



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



    
 document.getElementById("choices").style.display = "none";
    document.getElementById("lengthtimeline").style.backgroundColor = "#A065FF";
    document.getElementById("lengthtimeline").style.width = "22.5vw";
    document.getElementById("genre").style.transform = "scale(1)";
    document.getElementById("mood").style.transform = "scale(1.1)";
    document.getElementById("mood").style.backgroundColor = "#A065FF";
    document.getElementById("moodimg").style.opacity = "1";
    document.getElementById("choicesmood").style.display = "flex";
    document.getElementById("generate").style.display = "none";
    */

