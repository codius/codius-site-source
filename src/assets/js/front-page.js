//= require ../../../bower_components/ScrollMagic/js/_dependent/greensock/TweenMax.min.js
//= require ../../../bower_components/gsap/src/uncompressed/jquery.gsap.js
//= require ../../../bower_components/ScrollMagic/js/jquery.scrollmagic.js
//= require ../../../bower_components/ScrollMagic/js/jquery.scrollmagic.debug.js

jQuery(function($) {
  var controller = new ScrollMagic();

  // Cache windowHeight
  var windowHeight = $(window).innerHeight();
  $(window).on("resize", function () {
    windowHeight = $(window).innerHeight();
  });

  // new ScrollScene({
  //   triggerElement: ".hero",
  //   triggerHook: 'onLeave',
  //   duration: $('.hero').innerHeight()
  // })
  //   // .setTween(TweenMax.to(".hero h1", 1, {
  //   //   opacity: 0,
  //   //   ease: Linear.easeNone
  //   // }))
  //   .setPin('.hero .animation', {
  //     pushFollowers: false
  //   })
  //   .addTo(controller)
    // .addIndicators({zindex: 100, suffix: "1"});

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
  // $(window).scroll(updateScroll);
  // $('.canvas').scroll(updateScroll);
  // updateScroll();
});
