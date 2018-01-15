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

// function showWorking(){
//   var working = document.getElementsByClassName("working-m");
//   working.classList.toggle("mystyle");
// }




$(document).ready(function() {
 
$("#owl-demo-fasad").owlCarousel({
      navigation: true,
      pagination: false,
      navigationText : false,
      // autoPlay: 5000, //Set AutoPlay to 3 seconds
      responsive: true,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
// $("#howWork").click(function(){
//     $("#workingM").toggle();
// });
$("#howWork").click(function(e) {
  e.preventDefault();
  $("#howWork").toggleClass("arrow-top")
  $("#workingM").toggle();
})
});


function myFunction() {
    if($(window).width() < 768)
    {   
        $("#howWork").addClass("heading-show");
        $(".mobile-header").addClass("mobi-header");

    }
    else
    {
        $("#howWork").removeClass("heading-show");
        $(".mobile-header").removeClass("mobi-header");
    }
}

//вызываем
myFunction();

//ну и при ресайзе перепроверяем
$(window).resize(function() {
    myFunction();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 108) {
        $('.mobi-header').addClass('mobi-header-fixed');
    } else if ($(this).scrollTop() < 108) {
        $('.mobi-header').removeClass('mobi-header-fixed');
    }
});

