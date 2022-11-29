$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 10,
      padding:10,
      nav: true,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      autoHeight: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1200: {
          items: 4,
        },
      },
    });
  });