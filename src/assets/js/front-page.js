jQuery(function($) {
  // Scroll effects
  function updateScroll() {
    var scroll = $(window).scrollTop() + $('.canvas').scrollTop();

    if (scroll >= 20) {
      $(document.body).removeClass("near-top");
    } else {
      $(document.body).addClass("near-top");
    }

    $('.hero').css('perspectiveOrigin',
       "50% " + (scroll-300) + "px");
  };
  $(window).scroll(updateScroll);
  $('.canvas').scroll(updateScroll);
  updateScroll();
});
