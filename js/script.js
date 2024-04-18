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
      // Check if the device is not a phone
      if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
        // Prevent default 'tel:' link behavior
        event.preventDefault();
        // Display the number in an alert or any other way you prefer
        alert('Call us at: 0452549408');
      }
    });
  });





  