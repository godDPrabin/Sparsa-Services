$(function () {
    "use strict";

    var winH = $(window).height();

    $("header").height(winH);

    $("header .container > div").css(
      "top",
      winH / 2 - $("header .container > div").height() / 2
    );
    $(".navbar ul.navbar-nav li a").on("click", function (e) {
      var getAttr = $(this).attr("href");

      e.preventDefault();
      $("html").animate({ scrollTop: $(getAttr).offset().top }, 1000);
    });
  });
  


// Call Us ========================================
document.addEventListener('DOMContentLoaded', function() {
  var callButton = document.querySelector('.call-us-btn');
  callButton.addEventListener('click', function(event) {
    // Check if the device is a phone
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
      // Open WhatsApp application on phone
      window.open('whatsapp://send?phone=0452549408');
    } else {
      // Redirect to WhatsApp Web on PC
      window.open('https://web.whatsapp.com/send?phone=0452549408');
      event.preventDefault();
    }
  });
});




  
