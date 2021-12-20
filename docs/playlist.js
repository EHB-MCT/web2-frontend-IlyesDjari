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

eval("const baseURL = \"https://otomusic.herokuapp.com\";\r\n\r\n\r\ndocument.documentElement.addEventListener(\"load\", function () {\r\n    document.getElementById(\"loader\").style.display = \"block\";\r\n});\r\n\r\nwindow.addEventListener(\"load\", function () {\r\n    document.getElementById(\"loader\").style.display = \"none\";\r\n});\r\n\r\nwindow.onload = async function onPageLoad() {\r\n    user(); \r\n    getReleases();\r\n    user(); \r\n    current();\r\n    playlistgenerator();\r\n}\r\n\r\nasync function getReleases() {\r\n    await fetch(baseURL + \"/newreleases\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n        for(let i = 0; i<5; i++) {\r\n        document.getElementById(\"release\").insertAdjacentHTML('afterbegin', `\r\n        <a href=\"${data.body.albums.items[i].external_urls.spotify}\"\">\r\n        <div>\r\n        <img src=\"${data.body.albums.items[i].images[0].url}\" alt=\"cover\">\r\n        <h3>${data.body.albums.items[i].artists[0].name}</h3>\r\n        <p>${data.body.albums.items[i].name}</p>\r\n        </div>\r\n        </a>`);\r\n    }\r\n      });\r\n}\r\n\r\nasync function current() {\r\n     await fetch(baseURL + \"/currentsong\")\r\n     .then((response) => response.json())\r\n     .then((data) => {\r\n        if ( data.body.item != null ){       \r\n            document.getElementById(\"imgcurrent\").src = data.body.item.album.images[0].url;\r\n            document.getElementById(\"artistcurrent\").innerHTML = data.body.item.artists[0].name;\r\n            document.getElementById(\"songcurrent\").innerHTML = data.body.item.name;\r\n            document.getElementById(\"imgcurrent\").style.margin = \"0\";\r\n            document.getElementById(\"imgcurrent\").style.width = \"10vw\";\r\n            document.getElementById(\"imgcurrent\").style.opacity = \"100%\";\r\n        }\r\n       });\r\n }\r\n\r\n\r\n async function user() {\r\n     await fetch(baseURL + \"/getuser\")\r\n     .then((response) => response.json())\r\n     .then((data) => {\r\n        const time = new Date().getHours();\r\n        document.getElementById(\"username\").innerHTML = data.body.display_name; \r\n        document.getElementById(\"userpicture\").src = data.body.images[0].url\r\n        if (time < 12) {\r\n            document.getElementById(\"daytime\").innerHTML = \"Good morning, \"\r\n        }\r\n        else if (time < 18) {\r\n            document.getElementById(\"daytime\").innerHTML = \"Good afternoon, \"\r\n        }\r\n        else {\r\n            document.getElementById(\"daytime\").innerHTML = \"Good evening, \"\r\n        }\r\n       });\r\n }\r\n\r\n\r\nasync function playlistgenerator() {\r\n    console.log(\"Whut PT1\");\r\n    await fetch(baseURL + \"/lastplaylist\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\nconsole.log(data);\r\n\r\ndocument.getElementById('playlistname').innerHTML = data.name;\r\ndocument.getElementById('playlistowner').innerHTML = data.owner.display_name;\r\ndocument.getElementById('coveradded').src = data.images[0].url;\r\ndocument.getElementById('linktoplaylist').setAttribute(\"href\", data.external_urls.spotify);\r\n        for(let i = 0; i<20; i++) {\r\n            document.getElementById(\"addedsongscontainer\").insertAdjacentHTML('afterbegin', `\r\n                    <a href=\"./home\"\">\r\n                    <div>\r\n                    <img class=\"play\" src=\"../images/play.png\" alt=\"play\">\r\n                    <img class=\"addedcovers\" src=\"${data.tracks.items[i].track.album.images[0].url}\" alt=\"cover\">\r\n                    <div class=\"info\">\r\n                    <h3>${data.tracks.items[i].track.artists[0].name}</h3>\r\n                    <p class=\"songname\">${data.tracks.items[i].track.name}</p>\r\n                    </div>\r\n                    </div>\r\n                    </a>`);\r\n        }\r\n      });\r\n\r\n}\r\n\r\n \n\n//# sourceURL=webpack://web2-frontend-ilyesdjari/./src/playlist.js?");

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