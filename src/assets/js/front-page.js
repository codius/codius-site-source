jQuery(function($) {
  var logos = [
    {
      "x":52,
      "y":467,
      "z":0.57,
      "scale":0.8400000000000001
    },
    {
      "x":203,
      "y":84,
      "z":0.12000000000000001,
      "scale":0.59
    },
    {
      "x":257,
      "y":425,
      "z":0.71,
      "scale":0.7
    },
    {
      "x":-234,
      "y":216,
      "z":0.64,
      "scale":0.62
    },
    {
      "x":-360,
      "y":294,
      "z":0.19,
      "scale":0.54
    },
    {
      "x":-215,
      "y":493,
      "z":0.31,
      "scale":0.9
    },
    {
      "x":-137,
      "y":0,
      "z":0.42000000000000004,
      "scale":0.94
    },
    {
      "x":19,
      "y":451,
      "z":0.48,
      "scale":0.97
    },
    {
      "x":224,
      "y":292,
      "z":0.76,
      "scale":0.75
    },
    {
      "x":-227,
      "y":40,
      "z":0.55,
      "scale":0.79
    },
    {
      "x":201,
      "y":246,
      "z":0.4,
      "scale":0.77
    }
  ];
  var perspective = 100;

  // Render hero
  function createFloatingLogos() {
    var hero = $('.hero');
    logos.forEach(function (i) {
      var logo = $('<div class="floating-logo icon-logo"></div>');
      logo.css('transform', 'translate3d('+i.x+'px,'+i.y+'px,'+i.z*perspective+'px) scale3d(0.25, 0.25, 1)');
      logo.css('opacity', i.z*0.5);
      logo.css('filter', 'blur(100px)');
      logo.attr('data-settings', JSON.stringify(i));
      logo.appendTo(hero);
    });
  }
  createFloatingLogos();

  // Scroll effects
  function updateScroll() {
    var scroll = $(window).scrollTop() + $('.canvas').scrollTop();

    if (scroll >= 20) {
      $(document.body).removeClass("near-top");
    } else {
      $(document.body).addClass("near-top");
    }

    $('.hero').css('webkitPerspectiveOrigin',
       "50% " + scroll + "px");
  };
  $(window).scroll(updateScroll);
  $('.canvas').scroll(updateScroll);
  updateScroll();
});
