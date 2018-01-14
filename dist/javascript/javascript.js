console.log("loaded");

// mobile menu
function mobMenu() {
    var x = document.getElementById("TopNav");
    if (x.className === "topnav") {
        x.className += " nav-mobi";
    } else {
        x.className = "topnav";
    }
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var myBtn = document.getElementById("BtnTop");
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}