const baseURL = "https://otomusic.herokuapp.com";


document.documentElement.addEventListener("load", function() {
	document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function() {
	document.getElementById("loader").style.display = "none";
});

window.onload = async function onPageLoad() {
	user();
	getReleases();
	user();
	playlistgenerator();
	current();
}

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
			console.log(data);
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


async function playlistgenerator() {
	await fetch(baseURL + "/lastplaylist")
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('playlistname').innerHTML = data.name;
			document.getElementById('playlistowner').innerHTML = data.owner.display_name;
			document.getElementById('coveradded').src = data.images[0].url;
			document.getElementById('linktoplaylist').setAttribute("href", data.external_urls.spotify);
			for (let i = 0; i < 20; i++) {
				document.getElementById("addedsongscontainer").insertAdjacentHTML('afterbegin', `
                    <a href="${data.tracks.items[i].track.external_urls.spotify} target="_blank"">
                    <div>
                    <img class="play" src="../images/play.png" alt="play">
                    <img class="addedcovers" src="${data.tracks.items[i].track.album.images[0].url}" alt="cover">
                    <div class="info">
                    <h3>${data.tracks.items[i].track.artists[0].name}</h3>
                    <p class="songname">${data.tracks.items[i].track.name}</p>
                    </div>
                    </div>
                    </a>`);
			}
		});

}