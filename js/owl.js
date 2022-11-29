$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 5,
      nav: true,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      autoHeight: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });