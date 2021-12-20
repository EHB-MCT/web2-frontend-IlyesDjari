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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const baseURL = \"https://otomusic.herokuapp.com\";\r\nlet CHOICES = [];\r\n\r\n\r\ndocument.documentElement.addEventListener(\"load\", function () {\r\n    document.getElementById(\"loader\").style.display = \"block\";\r\n});\r\n\r\nwindow.addEventListener(\"load\", function () {\r\n    document.getElementById(\"loader\").style.display = \"none\";\r\n});\r\n\r\nwindow.onload = function onPageLoad() {\r\ngetReleases();\r\nuser(); \r\ncurrent();\r\nplaylistgenerator();\r\n}\r\n\r\nasync function getReleases() {\r\n    await fetch(baseURL + \"/newreleases\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n        for(let i = 0; i<5; i++) {\r\n\r\n        document.getElementById(\"release\").insertAdjacentHTML('afterbegin', `\r\n        <a href=\"${data.body.albums.items[i].external_urls.spotify}\"\">\r\n        <div>\r\n        <img src=\"${data.body.albums.items[i].images[0].url}\" alt=\"cover\">\r\n        <h3>${data.body.albums.items[i].artists[0].name}</h3>\r\n        <p>${data.body.albums.items[i].name}</p>\r\n        </div>\r\n        </a>`);\r\n    }\r\n      });\r\n}\r\n\r\nasync function current() {\r\n     await fetch(baseURL + \"/currentsong\")\r\n     .then((response) => response.json())\r\n     .then((data) => {\r\n        if ( data.body.item != null ){       \r\n            document.getElementById(\"imgcurrent\").src = data.body.item.album.images[0].url;\r\n            document.getElementById(\"artistcurrent\").innerHTML = data.body.item.artists[0].name;\r\n            document.getElementById(\"songcurrent\").innerHTML = data.body.item.name;\r\n            document.getElementById(\"imgcurrent\").style.margin = \"0\";\r\n            document.getElementById(\"imgcurrent\").style.width = \"10vw\";\r\n            document.getElementById(\"imgcurrent\").style.opacity = \"100%\";\r\n        }\r\n       });\r\n }\r\n\r\n\r\n async function user() {\r\n     await fetch(baseURL + \"/getuser\")\r\n     .then((response) => response.json())\r\n     .then((data) => {\r\n        const time = new Date().getHours();\r\n        document.getElementById(\"username\").innerHTML = data.body.display_name; \r\n        document.getElementById(\"userpicture\").src = data.body.images[0].url\r\n\r\n        if (time < 12) {\r\n            document.getElementById(\"daytime\").innerHTML = \"Good morning, \"\r\n        }\r\n        else if (time < 18) {\r\n            document.getElementById(\"daytime\").innerHTML = \"Good afternoon, \"\r\n        }\r\n        else {\r\n            document.getElementById(\"daytime\").innerHTML = \"Good evening, \"\r\n        }\r\n       });\r\n }\r\n\r\n\r\n function handleClick(event) {\r\n    let buttonValue = event.target.parentElement.id;\r\n    CHOICES.push(buttonValue);\r\n    genre();\r\n  }\r\n  \r\n  document.querySelector(\"#choices\").addEventListener(\"click\", handleClick);\r\n  \r\n\r\n\r\n\r\n\r\nfunction genre() {\r\n    document.getElementById(\"choices\").style.display = \"none\";\r\n    document.getElementById(\"lengthtimeline\").style.backgroundColor = \"#A065FF\";\r\n    document.getElementById(\"lengthtimeline\").style.width = \"22.5vw\";\r\n    document.getElementById(\"genre\").style.transform = \"scale(1)\";\r\n    document.getElementById(\"mood\").style.transform = \"scale(1.1)\";\r\n    document.getElementById(\"mood\").style.backgroundColor = \"#A065FF\";\r\n    document.getElementById(\"moodimg\").style.opacity = \"1\";\r\n    document.getElementById(\"choicesmood\").style.display = \"flex\";\r\n    document.getElementById(\"generate\").style.display = \"none\";\r\n}\r\n\r\n\r\n\r\n\r\nfunction mood() {\r\n    document.getElementById(\"choicesmood\").style.display = \"none\";\r\n    document.getElementById(\"lengthtimeline\").style.backgroundColor = \"#FF7448\";\r\n    document.getElementById(\"lengthtimeline\").style.width = \"40vw\";\r\n    document.getElementById(\"mood\").style.transform = \"scale(1)\";\r\n    document.getElementById(\"popularity\").style.transform = \"scale(1.1)\";\r\n    document.getElementById(\"popularity\").style.backgroundColor = \"#FF7448\";\r\n    document.getElementById(\"choicespopularity\").style.display = \"flex\";\r\n    document.getElementById(\"popularityimg\").style.opacity = \"1\";\r\n}\r\n\r\nfunction playlistgenerator() {\r\nfor(let i = 0; i<20; i++) {\r\n    document.getElementById(\"addedsongscontainer\").insertAdjacentHTML('afterbegin', `\r\n            <a href=\"./home\"\">\r\n            <div>\r\n            <img class=\"play\" src=\"../images/play.png\" alt=\"play\">\r\n            <img class=\"addedcovers\" src=\"../images/damso.jpg\" alt=\"cover\">\r\n            <div class=\"info\">\r\n            <h3>Damso</h3>\r\n            <p class=\"songname\">Ipséité</p>\r\n            <p class=\"duration\">2:13</p>\r\n            </div>\r\n            </div>\r\n            </a>`);\r\n}\r\n}\n\n//# sourceURL=webpack://web2-frontend-ilyesdjari/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;