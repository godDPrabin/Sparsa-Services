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
        alert('Call us at: 61-488-900-468');
      }
    });
  });


// Book Now ========================================
var modal = document.getElementById("myModal");
document.addEventListener("DOMContentLoaded", function() {
var btnss = document.getElementsByClassName("booknow");
var span = document.querySelector(".closes");

// When the user clicks on any button, open the modal
for (var i = 0; i < btnss.length; i++) {
  btnss[i].onclick = function () {
    modal.style.display = "block";
    setTimeout(function () {
      modal.classList.add("show");
    }, 50);
  };
}
// If user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
});
// Close the modal
function closeModal() {
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
  }, 500);
}

  