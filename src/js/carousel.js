window.carousel = (() => {
  var slideIndex = 1;
  showSlides(slideIndex);

  return {
    plusSlides: n => {
      showSlides((slideIndex += n));
    },
    currentSlide: n => {
      showSlides((slideIndex = n + 1));
    }
  };

  function showSlides(n) {
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

    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }
})();
