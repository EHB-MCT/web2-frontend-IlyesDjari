
document.documentElement.addEventListener("load", function () {
    document.getElementById("loader").style.display = "block";
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

window.onload = function onPageLoad() {
    let code = null;
const queryString = window.location.search;
if ( queryString.length > 0 ){
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get('code');
}

console.log(code);

    }

    
 fetch(baseURL + "/getcode", {
  method: 'POST', 
  mode: 'cors', 
  headers: {
    'Content-Type': 'application/json',
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
  body: JSON.stringify(code) 
})

  .then((res) => {
    console.log("Request complete! response:", res);
});
