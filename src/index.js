"use strict"

const baseURL = "https://otomusic.herokuapp.com";
let CHOICES = [];


document.documentElement.addEventListener("load", function() {
	document.getElementById("loader").style.display = "block";

});

window.addEventListener("load", function() {
	getReleases();
	user();
	latestPlaylists();
	document.getElementById("loader").style.display = "none";
});

async function getReleases() {
	await fetch(baseURL + "/newreleases")
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < 5; i++) {
				document.getElementById("release").insertAdjacentHTML('afterbegin', `
        <a href="${data.body.albums.items[i].external_urls.spotify}" target="_blank">
        <div>
        <img src="${data.body.albums.items[i].images[0].url}" alt="cover">
        <h3>${data.body.albums.items[i].artists[0].name}</h3>
        <p>${data.body.albums.items[i].name}</p>
        </div>
        </a>`);
			}
		});
}

async function latestPlaylists() {
    console.log("gghello");
    await fetch(baseURL + "/allgenerated")
    .then((response) => response.json())
    .then((data) => {
        console.log("Received data", data);
        for(let i = 0; i<data.length; i++) {
        document.getElementById("latestgenerated").insertAdjacentHTML('afterbegin', `
		<a href="${data[i].external_urls.spotify}" target="_blank">
        <div id="lastestplaylistadded">
        <img src="${data[i].images[0].url}" alt="">
		<div id="lastestplaylistaddedtxt">
		<h2>${data[i].name}</h2>
		<p>${data[i].owner.display_name}</p>
		</div>
        </div>
		</a>`);
    }
      });
}

setInterval(async function current() {
	await fetch(baseURL + "/currentsong")
		.then((response) => response.json())
		.then((data) => {
			if (data.body.item != null) {
				document.getElementById("imgcurrent").src = data.body.item.album.images[0].url;
				document.getElementById("artistcurrent").innerHTML = data.body.item.artists[0].name;
				document.getElementById("songcurrent").innerHTML = data.body.item.name;
				document.getElementById("imgcurrent").style.margin = "0";
				document.getElementById("imgcurrent").style.width = "10vw";
				document.getElementById("imgcurrent").style.opacity = "100%";
			}
		});
}, 1000)


async function user() {
	await fetch(baseURL + "/getuser")
		.then((response) => response.json())
		.then((data) => {
			const time = new Date().getHours();
			document.getElementById("username").innerHTML = data.body.display_name;
			document.getElementById("userpicture").src = data.body.images[0].url
			document.getElementById('toProfile').setAttribute("href", data.body.external_urls.spotify);
			if (time < 12) {
				document.getElementById("daytime").innerHTML = "Good morning, "
			} else if (time < 18) {
				document.getElementById("daytime").innerHTML = "Good afternoon, "
			} else {
				document.getElementById("daytime").innerHTML = "Good evening, "
			}
		});
}


function handleClick(event) {
	let buttonValue = event.target.parentElement.id;
	if (CHOICES[0] == undefined) {
		document.getElementById('genretxt').innerHTML = `${buttonValue}`;
		genre();
		CHOICES.push(buttonValue);
	} else if (CHOICES[0] !== undefined && CHOICES[1] == undefined && CHOICES[2] == undefined) {
		document.getElementById('moodtxt').innerHTML = `${buttonValue}`;
		if (buttonValue == "chill") {
			let energy = Math.ceil(Math.random() * 33)
			CHOICES.push(energy);
		} else if (buttonValue == "party") {
			let energy = Math.ceil(Math.random() * (66 - 33) + 33)
			CHOICES.push(energy);
		} else if (buttonValue == "energetic") {
			let energy = Math.ceil(Math.random() * (100 - 66) + 66)
			CHOICES.push(energy);
		}
		mood();

	} else {
		document.getElementById('knowntxt').innerHTML = `${buttonValue}`;
		if (buttonValue == "indie") {
			let popularity = Math.ceil(Math.random() * 33)
			CHOICES.push(popularity);
		} else if (buttonValue == "mixed") {
			let popularity = Math.ceil(Math.random() * (66 - 33) + 33)
			CHOICES.push(popularity);
		} else if (buttonValue == "trending") {
			let popularity = Math.ceil(Math.random() * (100 - 66) + 66)
			CHOICES.push(popularity);
		}
		showName();
	}
}
document.querySelector("#choices").addEventListener("click", handleClick);
document.querySelector("#choicesmood").addEventListener("click", handleClick);
document.querySelector("#choicespopularity").addEventListener("click", handleClick);
document.querySelector("#back").addEventListener("click", back);


function back() {
	if (CHOICES[1] == undefined) {
		// Choice of doing this way instead of simple window reload for good looking transitions incorporation
		CHOICES.pop();
		document.getElementById("choices").style.display = "flex";
		document.getElementById("back").style.display = "none";
		document.getElementById("lengthtimeline").style.backgroundColor = "#1DB954";
		document.getElementById("lengthtimeline").style.width = "6.5vw";
		document.getElementById("genre").style.transform = "scale(1.1)";
		document.getElementById("mood").style.transform = "scale(1)";
		document.getElementById("genre").style.backgroundColor = "#1DB954";
		document.getElementById("mood").style.backgroundColor = "#262626";
		document.getElementById("moodimg").style.opacity = "0.5";
		document.getElementById("choicesmood").style.display = "none";
		document.getElementById("generate").style.display = "flex";
		document.getElementById('genretxt').innerHTML = "Genre";



	} else if (CHOICES[0] !== undefined && CHOICES[1] !== undefined && CHOICES[2] == undefined) {
		CHOICES.pop();
		document.getElementById("choicesmood").style.display = "flex";
		document.getElementById("lengthtimeline").style.backgroundColor = "#A065FF";
		document.getElementById("lengthtimeline").style.width = "22.5vw";
		document.getElementById("mood").style.transform = "scale(1.1)";
		document.getElementById("popularity").style.transform = "scale(1)";
		document.getElementById("genre").style.backgroundColor = "#1DB954";
		document.getElementById("popularity").style.backgroundColor = "#262626";
		document.getElementById("popularityimg").style.opacity = "0.5";
		document.getElementById("choicespopularity").style.display = "none";
		document.getElementById('backtxt').innerText = "Back to genre";
		document.getElementById('genretxt').innerHTML = "Genre";
	} else {
		CHOICES.pop();
		document.getElementById("choicespopularity").style.display = "flex";
		document.getElementById("lengthtimeline").style.backgroundColor = "#FF7448";
		document.getElementById("lengthtimeline").style.width = "40vw";
		document.getElementById("popularity").style.transform = "scale(1.1)";
		document.getElementById("playlist").style.transform = "scale(1)";
		document.getElementById("playlist").style.backgroundColor = "#262626";
		document.getElementById("playlistimg").style.opacity = "0.5";
		document.getElementById("choosename").style.display = "none";
		document.getElementById('backtxt').innerText = "Back to mood";
	}
}

function genre() {
	document.getElementById("choices").style.display = "none";
	document.getElementById("back").style.display = "flex";
	document.getElementById("lengthtimeline").style.backgroundColor = "#A065FF";
	document.getElementById("lengthtimeline").style.width = "22.5vw";
	document.getElementById("genre").style.transform = "scale(1)";
	document.getElementById("mood").style.transform = "scale(1.1)";
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
	document.getElementById('backtxt').innerText = "Back to mood";
}

async function popularity(res) {
	const playlistid = res.body.id;

	const obj = {
		limit: 20,
		market: "BE",
		seed_genres: CHOICES[0],
		target_energy: CHOICES[1],
		target_popularity: CHOICES[2]
	}

	await fetch(baseURL + '/featured', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(obj)
		})
		.then(res => res.json())
	playlistgenerator(playlistid);
}

async function playlistgenerator(playlistid) {
	const songs = []

	await fetch(baseURL + "/lastfeatured")
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < 20; i++) {
				songs.push(data.bodycode[i].uri);
			}

			let create = {
				playlistid: playlistid,
				songs: songs
			}
			addtoserver(create);
		});
}

async function addtoserver(create) {
	await fetch(baseURL + '/addtoplaylist', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(create)
		})
		.then(res => res.json())
	window.location = "https://ehb-mct.github.io/web2-frontend-IlyesDjari/pages/custom-playlist.html"
}



function showName() {
	document.getElementById("choicespopularity").style.display = "none";
	document.getElementById("lengthtimeline").style.backgroundColor = "#1DB954";
	document.getElementById("lengthtimeline").style.width = "57.5vw";
	document.getElementById("popularity").style.transform = "scale(1)";
	document.getElementById("playlist").style.transform = "scale(1.1)";
	document.getElementById("playlist").style.backgroundColor = "#1DB954";
	document.getElementById("playlistimg").style.opacity = "1";
	document.getElementById("choosename").style.display = "flex";
	document.getElementById('backtxt').innerText = "Back to known";
	document.getElementById("submitname").addEventListener("click", async function(event) {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const create = {
			"name": name
		}
		await fetch(baseURL + '/create', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(create)
			})
			.then(res => res.json())
			.then(res => popularity(res))
	})
}