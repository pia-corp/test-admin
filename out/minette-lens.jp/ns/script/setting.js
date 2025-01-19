
var scrollElm = (function () {
  if (document.scrollingElement) return document.scrollingElement;
  if (navigator.userAgent.indexOf('WebKit') != -1) return 'body';
  return document.documentElement;
})();
var hash;

jQuery(function($) {

  $.pjax({
    area : '.site-header,.page-contents,.site-footer',
    link : 'a:not([target]),a:not([href="#"])',
    ajax : { timeout: 2500 },
    wait : 500,
    scrollTop: false,
    cache: { click: false, submit: false, popstate: false },
    load: { head: 'base, meta, link', css: true, script: true },
    callbacks:{
      ajax : {
        success: function(event, setting, data, textStatus, jqXHR){
        }
      },
      update : {
        content: {
          after : function( event, setting, srcContent, dstContent ) {
            _header = $(".site-header");
            _toTop = $(".to-page-top");
            _firstLine = 300;
            commonSet();
          }
        }
      }
    }
  });

  // OUT anime
  document.addEventListener('pjax:fetch', function(){
    $("body").addClass("isLoader").delay(1000).queue(function() {
      $("body").removeClass("isLoader").dequeue();
      onscrollTrigger();
      slideSet();
    });
    setTimeout (function() {
      $(scrollElm).animate({scrollTop: 0}, 0, "swing");
    },500);
  });

  document.addEventListener('pjax:ready', function() {
  }, false)

  commonSet();
  var _header = $(".site-header");
  var _toTop = $(".to-page-top");
  var _firstLine = 300;
  var _scrollTop,_h,_footerline;
  onscrollTrigger();
  $(window).on("scroll", function() {
      onscrollTrigger();
  });
  function onscrollTrigger() {
    _scrollTop = $(window).scrollTop();
    _h = (window.innerHeight)? window.innerHeight:$(window).height();
    _footerline = $(".site-footer").offset().top;
    var _onContentsLine = 70;
    if (_header.hasClass("is-site-top")) {
      _onContentsLine = 180;
    }
    if (_scrollTop > _onContentsLine) _header.addClass("is-on-contents");
    else {
      if (!$('.js-lineup-menu').is(':visible')) _header.removeClass("is-on-contents");
    }
    if (_scrollTop > _firstLine) _toTop.removeClass("is-stand-by");
    else _toTop.addClass("is-stand-by");
    if (_scrollTop > _footerline - _h) _toTop.addClass("is-on-footer");
    else _toTop.removeClass("is-on-footer");

    if ($(".top-fadein-item").not(".is-show").length > 0) {
      $(".top-fadein-item").not(".is-show").each(function () {
        var _thisTop = $(this).offset().top;
        if (_scrollTop > _thisTop - _h + 200) {
          $(this).addClass("is-show");
        }
      });
    }
  }
  slideSet();
});

function commonSet() {
  $('a[href^="#"]').not('a[href="#"]').click(function() {
    hash = this.hash;
    if(!hash || hash == "#") return false;
    $(scrollElm).animate({scrollTop: $(hash).offset().top}, 500, "swing", function() {$(hash).focus();});
    return false;
  });

  if ($(".top-fadein-item").not(".is-show").length > 0) {
    $(".top-fadein-item").not(".is-show").addClass("is-stand-by");
  }
  $('.js-lineup-menu__trigger, .lineup-pulldown-back-overlay').click(function() {
    if ($('.js-lineup-menu').is(':visible')) {
      if ($(window).scrollTop() < 180) $('.site-header').removeClass('is-on-contents');
      $('.lineup-pulldown-back-overlay').hide();
      $('.js-lineup-menu').slideUp(300);
    } else {
      $('.site-header').addClass('is-on-contents');
      $('.lineup-pulldown-back-overlay').show();
      $('.js-lineup-menu').slideDown(300);
    }
    return false;
  });
}



function slideSet() {
if ($('.top-feature-slide-wrapper').length > 0) {
  $('.top-feature-slide-wrapper').each(function() {
    var _this = $(this);
    var _images = _this.find('.slide-image-item');
    var _texts = _this.find('.slide-text-item-outer');
    var _list = _this.find('.slide-navigation__item');
    var _left_arrow = _this.find('.slide-arrow-left');
    var _right_arrow = _this.find('.slide-arrow-right');
    var _index = 0;
    var _length = _list.length;
    var _lrFlag = true;
    var _delay = 50;
    var _duration = 1200;
    var _busy = false;

    _list.each(function(index){
      var __index = index;
      $(this).click(function() {
        _lrFlag = (__index > _index);
        if (__index != _index) slideMove(__index);
      });
    });
    _left_arrow.click(function() {
      var __index = _index - 1;
      if (__index < 0) __index = _length - 1;
      _lrFlag = false;
      slideMove(__index);
    });
    _right_arrow.click(function() {
      var __index = _index + 1;
      if (__index > _length - 1) __index = 0;
      _lrFlag = true;
      slideMove(__index);
    });

    function slideMove(index) {
      if (!_busy) {
        _busy = true;
        var __index = index;
        _images.eq(_index).addClass("animation")
        .delay(_delay)
        .queue(function(next) {
          $(this).addClass((_lrFlag)? "right":"left")
          .removeClass("show").delay(_duration)
          .queue(function(next) {
            $(this).removeClass("right")
            .removeClass("left")
            .removeClass("animation")
            .hide();
            next();
          });
          next();
      });
        _texts.eq(_index).addClass("animation")
        .delay(_delay)
        .queue(function(next) {
          $(this).addClass((_lrFlag)? "right":"left")
          .removeClass("show").delay(_duration)
          .queue(function(next) {
            $(this).removeClass("right")
            .removeClass("left")
            .removeClass("animation")
            .hide();
            next();
          });
          next();
        });
        _list.eq(_index).removeClass('is-current');
        _images.eq(__index).show().addClass((_lrFlag)? "left":"right")
        .addClass("animation")
        .delay(_delay)
        .queue(function(next) {
            $(this).removeClass("right")
            .removeClass("left")
            .addClass("show").delay(_duration)
            .queue(function(next) {
              $(this).removeClass("animation");
              _busy = false;
              next();
            });
            next();
        });
        _texts.eq(__index).show().addClass((_lrFlag)? "left":"right")
        .addClass("animation")
        .delay(_delay)
        .queue(function(next) {
          $(this).removeClass("right")
          .removeClass("left")
          .addClass("show").delay(_duration)
          .queue(function(next) {
            $(this).removeClass("animation");
            _busy = false;
            next();
          });
          next();
        });
        _list.eq(__index).addClass('is-current');
        _index = __index;
      }
    }
  });
}
}

// $(function() {
//   $('a:not([href^="#"]):not([target])').on('click', function(e){
//     e.preventDefault();
//     url = $(this).attr('href');
//     if (url !== '') {
//       $('body').addClass('fadeout');
//       setTimeout(function(){
//         window.location = url;
//       }, 800);
//     }
//     return false;
//   });
// });
// $(window).on('load', function(){
//   $('body').removeClass('fadeout');
// });
