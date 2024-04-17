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


// Book Now ========================================
var modal = document.getElementById("myModal");
var form = document.getElementById("main_contact_form");
var nextPageButton = document.getElementById("nextpage");
var previousPageButton = document.getElementById("previouspage");
var rulesPage = document.getElementById("rules-page");

// When the user clicks on any button, open the modal
document.addEventListener("DOMContentLoaded", function() {
  var btnss = document.getElementsByClassName("booknow");
  var span = document.querySelector(".closes");

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

  // Form validation on blur
  var inputs = form.querySelectorAll("input, textarea, select");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function () {
      if (!this.checkValidity()) {
        this.classList.add("invalid");
      } else {
        this.classList.remove("invalid");
      }
    });
  }

  // Validate form and proceed to rules page
  nextPageButton.addEventListener("click", function() {
    if (form.checkValidity()) {
      form.style.display = "none";
      rulesPage.style.display = "block";
    } else {
      // Show error message or handle invalid form
      alert("Please fill out all fields correctly.");
    }
  });

  // Show form and hide rules page
  previousPageButton.addEventListener("click", function() {
    rulesPage.style.display = "none";
    form.style.display = "block";
  });
});

// Close modal
function closeModal() {
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    form.style.display = "block"; // Show form if it was hidden
    rulesPage.style.display = "none"; // Hide rules page if it was shown
  }, 500);
}



  