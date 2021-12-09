(() => {
    "use strict";
    document.documentElement.addEventListener("load", (function () {
        document.getElementById("loader").style.display = "block"
    })), window.addEventListener("load", (function () {
        document.getElementById("loader").style.display = "none"
    }))
})();