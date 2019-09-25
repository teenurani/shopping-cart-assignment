(function() {
  //Todo integrate into one container
  var slideIndex = 1;
  showSlides(slideIndex);

  var next = document.getElementById("next");
  next
    ? next.addEventListener("click", function() {
        showSlides((slideIndex += 1));
      })
    : "";

  document.getElementById("prev").addEventListener("click", function() {
    showSlides((slideIndex += -1));
  });

  document.addEventListener(
    "click",
    function(event) {
      var et = event.target;
      switch (et.className) {
        case "dot":
          showSlides((slideIndex = +et.id + 1));
      }
    },
    false
  );

  function showSlides(n) {
    console.log(n);
    var i;
    var slides = document.getElementsByClassName("carousel__item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides > 1 ? (slides[slideIndex - 1].style.display = "block") : "";
    slides > 1 ? (dots[slideIndex - 1].className += " active") : "";
  }
})();
