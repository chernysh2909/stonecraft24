console.log("loaded");

function mobMenu() {
    var x = document.getElementById("TopNav");
    if (x.className === "topnav") {
        x.className += " nav-mobi";
    } else {
        x.className = "topnav";
    }
}
