//= require ../../../bower_components/ScrollMagic/js/_dependent/greensock/TweenMax.min.js
//= require ../../../bower_components/gsap/src/uncompressed/jquery.gsap.js
//= require ../../../bower_components/ScrollMagic/js/jquery.scrollmagic.js
//= require ../../../bower_components/ScrollMagic/js/jquery.scrollmagic.debug.js
//= require ../../../bower_components/rangeslider.js/dist/rangeslider.js

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
  $(window).scroll(updateScroll);
  $('.canvas').scroll(updateScroll);
  updateScroll();

  // HTML5 rangeslider polyfill
  $('input[type="range"]').rangeslider({
    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle'
  });

  $('.hostcount-slide').on('change', function(evt) {
    var value = evt.target.value,
        logValue = Math.round(Math.pow(10, +value / 333)),
        fontSize = 96/Math.pow(logValue, 0.45);

    var code = 'codius upload';
    if (+value > 1) {
      code += ' --hosts '+logValue;
    }
    $('.hostcount-pre code').text(code);

    var icon = logValue > 100 ? '◼' : '<i class="icon-logo"></i>';
    $('.hostcount-logo').html(
      new Array(logValue+1).join(icon)
    ).css({
      fontSize: fontSize+'px'
    });
  });
});
