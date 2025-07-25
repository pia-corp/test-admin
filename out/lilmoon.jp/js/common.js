$(function () {
  // Pagetop
  var appear = false;
  var pagetop = $('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate(
          {
            bottom: '70px',
          },
          300
        );
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate(
          {
            bottom: '-160px',
          },
          300
        );
      }
    }
  });
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
  // Scroll-nav
  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-nav', window.scrollY > 100);
  });

  // Modal
  var w = $(window).width();
  var x = 768;
  if (w <= x) {
    $('.js-header-btn').on('click', function () {
      $('.js-header-nav').fadeToggle();
    });
  } else {
    $('.js-header-btn').on('mouseenter', function () {
      $('.js-header-nav').fadeIn();
    });
    $('.js-header-nav').on('mouseleave', function () {
      $('.js-header-nav').fadeOut();
    });
  }
  $('.js-modal-open').on('click', function () {
    var target = $(this).data('modal');
    $(target).addClass('is-open');
  });
  $('.js-modal-close').on('click', function () {
    var target = $(this).parent('.c-modal_wrap');
    $(target).removeClass('is-open');
  });
  // shop_nav_list
  $('.js-shop_nav_trigger, .shop_nav_bg').click(function () {
    if ($('.js-shop_nav').is(':visible')) {
      // if ($(window).scrollTop() < 180) $('.site-header').removeClass('is-on-contents');
      $('.shop_nav_bg').hide();
      $('.js-shop_nav').slideUp(300);
    } else {
      // $('.site-header').addClass('is-on-contents');
      $('.shop_nav_bg').show();
      $('.js-shop_nav').slideDown(300);
    }
    return false;
  });
  // Accordion
  $('.accordion-open').click(function () {
    $(this).next().slideToggle(800);
    $(this).toggleClass('open', 800);
  });
});
