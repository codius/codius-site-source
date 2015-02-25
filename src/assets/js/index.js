/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, sr, undefined) {
  "use strict";

  var $document = $(document),

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
          if (!execAsap) {
            func.apply(obj, args);
          }
          timeout = null;
        }

        if (timeout) {
          clearTimeout(timeout);
        } else if (execAsap) {
          func.apply(obj, args);
        }

        timeout = setTimeout(delayed, threshold || 100);
      };
    };

  // metrics handling
  var handleEvents = (function() {

    var showDebug;

    function init(isDebug) {
      showDebug = isDebug || false;

      $('body').on('click', handleEvent);
    }

    function handleEvent(e) {
      if (showDebug) {
        e.preventDefault();
      }

      var $targ = $(e.target),
          data = $targ.data('metrics') || [];

      if (data.length) {
        sendEvent(data);
      }
    }

    function sendEvent(args) {
      var gaArgs = ['send', 'event'];

      if (!args && typeof ga === 'undefined') {
        return false;
      }

      gaArgs = gaArgs.concat(args);

      if (showDebug) {
        console.log(gaArgs);
      }

      ga.apply(null, gaArgs);
    }

    return init;
  })();

  handleEvents();
  // end metrics handling

  $document.ready(function () {

    var $postContent = $(".post-content");
    $postContent.fitVids();

    function updateImageWidth() {
      var $this = $(this),
        contentWidth = $postContent.outerWidth(), // Width of the content
        imageWidth = this.naturalWidth; // Original image resolution

      if (imageWidth >= contentWidth) {
        $this.addClass('full-img');
      } else {
        $this.removeClass('full-img');
      }
    }

    var $img = $("img").on('load', updateImageWidth);
    function casperFullImg() {
      $img.each(updateImageWidth);
    }

    casperFullImg();
    $(window).smartresize(casperFullImg);

    $(".scroll-down").arctic_scroll();

  });

  // smartresize
  jQuery.fn[sr] = function(fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

  // Arctic Scroll by Paul Adam Davis
  // https://github.com/PaulAdamDavis/Arctic-Scroll
  $.fn.arctic_scroll = function (options) {

    var defaults = {
      elem: $(this),
      speed: 500
    },

    allOptions = $.extend(defaults, options);

    allOptions.elem.click(function (event) {
      event.preventDefault();
      var $this = $(this),
        $htmlBody = $('html, body'),
        offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
        position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
        toMove;

      if (offset) {
        toMove = parseInt(offset);
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
      } else if (position) {
        toMove = parseInt(position);
        $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
      } else {
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
      }
    });

  };

  $document.ready(function () {
    $('#drawer-nav').html($('#nav').html());
    $('#drawer-subnav').html($('#subnav').html());
    $('.navbar-header').click(function () {
      $(this).toggleClass('collapsed');
      $(':root').toggleClass('navigating');
    });
    function handleMouseEventOnCanvas(e) {
      if ($(':root').hasClass('navigating')) {
        $(':root').removeClass('navigating');
        $('.navbar-header').addClass('collapsed');
        e.preventDefault();
        e.stopPropagation();
      }
    }
    $('.canvas').click(handleMouseEventOnCanvas);
    $('.canvas').on('touchstart', handleMouseEventOnCanvas);

    // Hide the navbar when zoomed in on mobile
    $(window).scroll(function(e) {
      var ratio = window.innerWidth/document.documentElement.clientWidth;
      if (ratio < 0.9) {
        $(document.body).addClass('zoomed');
      } else {
        $(document.body).removeClass('zoomed');
      }
    });
  });
})(jQuery, 'smartresize');
