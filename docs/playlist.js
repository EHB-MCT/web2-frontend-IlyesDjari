/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/playlist.js":
/*!*************************!*\
  !*** ./src/playlist.js ***!
  \*************************/
/***/ (() => {

eval("const baseURL = \"https://otomusic.herokuapp.com\";\r\n\r\n\r\ndocument.documentElement.addEventListener(\"load\", function() {\r\n\tdocument.getElementById(\"loader\").style.display = \"block\";\r\n});\r\n\r\nwindow.addEventListener(\"load\", function() {\r\n\tdocument.getElementById(\"loader\").style.display = \"none\";\r\n});\r\n\r\nwindow.onload = async function onPageLoad() {\r\n\tuser();\r\n\tgetReleases();\r\n\tuser();\r\n\tplaylistgenerator();\r\n\tcurrent();\r\n}\r\n\r\nasync function getReleases() {\r\n\tawait fetch(baseURL + \"/newreleases\")\r\n\t\t.then((response) => response.json())\r\n\t\t.then((data) => {\r\n\t\t\tfor (let i = 0; i < 5; i++) {\r\n\t\t\t\tdocument.getElementById(\"release\").insertAdjacentHTML('afterbegin', `\r\n        <a href=\"${data.body.albums.items[i].external_urls.spotify}\" target=\"_blank\">\r\n        <div>\r\n        <img src=\"${data.body.albums.items[i].images[0].url}\" alt=\"cover\">\r\n        <h3>${data.body.albums.items[i].artists[0].name}</h3>\r\n        <p>${data.body.albums.items[i].name}</p>\r\n        </div>\r\n        </a>`);\r\n\t\t\t}\r\n\t\t});\r\n}\r\n\r\nsetInterval(async function current() {\r\n\tawait fetch(baseURL + \"/currentsong\")\r\n\t\t.then((response) => response.json())\r\n\t\t.then((data) => {\r\n\t\t\tif (data.body.item != null) {\r\n\t\t\t\tdocument.getElementById(\"imgcurrent\").src = data.body.item.album.images[0].url;\r\n\t\t\t\tdocument.getElementById(\"artistcurrent\").innerHTML = data.body.item.artists[0].name;\r\n\t\t\t\tdocument.getElementById(\"songcurrent\").innerHTML = data.body.item.name;\r\n\t\t\t\tdocument.getElementById(\"imgcurrent\").style.margin = \"0\";\r\n\t\t\t\tdocument.getElementById(\"imgcurrent\").style.width = \"10vw\";\r\n\t\t\t\tdocument.getElementById(\"imgcurrent\").style.opacity = \"100%\";\r\n\t\t\t}\r\n\t\t});\r\n}, 1000)\r\n\r\n\r\nasync function user() {\r\n\tawait fetch(baseURL + \"/getuser\")\r\n\t\t.then((response) => response.json())\r\n\t\t.then((data) => {\r\n\t\t\tconst time = new Date().getHours();\r\n\t\t\tconsole.log(data);\r\n\t\t\tdocument.getElementById(\"username\").innerHTML = data.body.display_name;\r\n\t\t\tdocument.getElementById(\"userpicture\").src = data.body.images[0].url\r\n\t\t\tdocument.getElementById('toProfile').setAttribute(\"href\", data.body.external_urls.spotify);\r\n\t\t\tif (time < 12) {\r\n\t\t\t\tdocument.getElementById(\"daytime\").innerHTML = \"Good morning, \"\r\n\t\t\t} else if (time < 18) {\r\n\t\t\t\tdocument.getElementById(\"daytime\").innerHTML = \"Good afternoon, \"\r\n\t\t\t} else {\r\n\t\t\t\tdocument.getElementById(\"daytime\").innerHTML = \"Good evening, \"\r\n\t\t\t}\r\n\t\t});\r\n}\r\n\r\n\r\nasync function playlistgenerator() {\r\n\tawait fetch(baseURL + \"/lastplaylist\")\r\n\t\t.then((response) => response.json())\r\n\t\t.then((data) => {\r\n\t\t\tdocument.getElementById('playlistname').innerHTML = data.name;\r\n\t\t\tdocument.getElementById('playlistowner').innerHTML = data.owner.display_name;\r\n\t\t\tdocument.getElementById('coveradded').src = data.images[0].url;\r\n\t\t\tdocument.getElementById('linktoplaylist').setAttribute(\"href\", data.external_urls.spotify);\r\n\t\t\tfor (let i = 0; i < 20; i++) {\r\n\t\t\t\tdocument.getElementById(\"addedsongscontainer\").insertAdjacentHTML('afterbegin', `\r\n                    <a href=\"${data.tracks.items[i].track.external_urls.spotify} target=\"_blank\"\">\r\n                    <div>\r\n                    <img class=\"play\" src=\"../images/play.png\" alt=\"play\">\r\n                    <img class=\"addedcovers\" src=\"${data.tracks.items[i].track.album.images[0].url}\" alt=\"cover\">\r\n                    <div class=\"info\">\r\n                    <h3>${data.tracks.items[i].track.artists[0].name}</h3>\r\n                    <p class=\"songname\">${data.tracks.items[i].track.name}</p>\r\n                    </div>\r\n                    </div>\r\n                    </a>`);\r\n\t\t\t}\r\n\t\t});\r\n\r\n}\n\n//# sourceURL=webpack://web2-frontend-ilyesdjari/./src/playlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/playlist.js"]();
/******/ 	
/******/ })()
;