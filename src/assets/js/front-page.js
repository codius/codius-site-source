jQuery(function($) {
  function updateScroll() {
    var scroll = $(window).scrollTop() + $('.canvas').scrollTop();

    if (scroll >= 20) {
      $(document.body).removeClass("near-top");
    } else {
      $(document.body).addClass("near-top");
    }
  };
  $(window).scroll(updateScroll);
  $('.canvas').scroll(updateScroll);
  updateScroll();
});
