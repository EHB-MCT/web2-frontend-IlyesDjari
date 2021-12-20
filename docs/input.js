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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("var redirect_uri = \"http://127.0.0.1:5500/web2-frontend-IlyesDjari/docs/pages/home.html\";\r\nconst baseURL = \"https://otomusic.herokuapp.com\";\r\n\r\ndocument.documentElement.addEventListener(\"load\", function () {\r\n    document.getElementById(\"loader\").style.display = \"block\";\r\n});\r\n\r\nwindow.addEventListener(\"load\", function () {\r\n    document.getElementById(\"loader\").style.display = \"none\";\r\n});\r\n\r\n\r\ndocument.getElementById('loginbutton').addEventListener(\"click\", async function() {\r\n        window.open(\"https://otomusic.herokuapp.com/connect\");\r\n        window.location = \"\"\r\n      });\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://web2-frontend-ilyesdjari/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;