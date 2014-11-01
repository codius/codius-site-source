jQuery(function($) {
  var logos = [
    {
      "x":52,
      "y":467,
      "z":0.57
    },
    {
      "x":203,
      "y":84,
      "z":0.12
    },
    {
      "x":257,
      "y":425,
      "z":0.71
    },
    {
      "x":-310,
      "y":216,
      "z":0.74
    },
    {
      "x":-215,
      "y":293,
      "z":0.31
    },
    {
      "x":-137,
      "y":60,
      "z":0.42
    },
    {
      "x":-219,
      "y":451,
      "z":0.48
    },
    {
      "x":224,
      "y":292,
      "z":0.76
    },
    {
      "x":-227,
      "y":90,
      "z":0.55
    },
    {
      "x":201,
      "y":146,
      "z":0.4
    }
  ];
  var perspective = 100;

  // Render hero
  function createFloatingLogos() {
    var hero = $('.hero .scene');
    logos.forEach(function (i) {
      var dof = Math.round(Math.pow(i.z - 0.2, 2) * 40);
      var size = Math.round(i.z * i.z * 16);
      var container = $('<div class="layer"><div class="floating-logo icon-logo"></div></div>');
      container.attr('data-depth', i.z);
      var logo = container.find('div');
      logo.css('top', i.y*2+'px');
      logo.css('left', i.x*2+'px');
      logo.css('font-size', size+'em');
      logo.css('webkitFilter', 'blur('+dof+'px)');
      logo.css('mozFilter', 'blur('+dof+'px)');
      logo.css('oFilter', 'blur('+dof+'px)');
      logo.css('msFilter', 'blur('+dof+'px)');
      logo.css('filter', 'blur('+dof+'px)');
      logo.attr('data-settings', JSON.stringify(i));
      container.appendTo(hero);
    });
    hero.parallax();
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

    $('.hero').css('perspectiveOrigin',
       "50% " + (scroll-300) + "px");
  };
  $(window).scroll(updateScroll);
  $('.canvas').scroll(updateScroll);
  updateScroll();
});
