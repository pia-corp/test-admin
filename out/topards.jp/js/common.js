$(function () {
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

  // Accordion
  $('.accordion-open').click(function () {
    $(this).next().slideToggle(800);
    $(this).toggleClass('open', 800);
  });
});
