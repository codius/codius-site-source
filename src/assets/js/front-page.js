jQuery(function($) {
  function updateScroll() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
      $(".main-header").removeClass("near-top");
    } else {
      $(".main-header").addClass("near-top");
    }
  };
  $(window).scroll(updateScroll);
  updateScroll();
});
