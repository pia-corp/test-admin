$(function () {
  $('#header_top .menu_btn').click(function () {
    $('#header_nav').addClass('show');
    $('#header_top').addClass('active');
    $('.main_contents').addClass('blur');
  });

  $('#header_nav #navtitle_area').click(function () {
    $('#header_nav').removeClass('show');
    $('#header_top').removeClass('active');
    $('.main_contents').removeClass('blur');
  });

  $('#header_nav .close_btn').click(function () {
    $('#header_nav').removeClass('show');
    $('#header_top').removeClass('active');
    $('.main_contents').removeClass('blur');
  });

  $('.online_btn').click(function () {
    $(this).toggleClass('active');
    $(this).next('.shoplist_area').fadeToggle();
  });

  // Pagetop
  // var appear = false;
  // var pagetop = $('.pagetop');
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     if (appear == false) {
  //       appear = true;
  //       pagetop.stop().animate({
  //         'bottom': '70px'
  //       }, 300);
  //     }
  //   } else {
  //     if (appear) {
  //       appear = false;
  //       pagetop.stop().animate({
  //         'bottom': '-160px'
  //       }, 300);
  //     }
  //   }
  // });
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop: position}, speed, 'swing');
    return false;
  });

  // Color LineUp
  $('.under_contents .color_lineup_area h2').click(function () {
    $(this).next('.cnt_g').slideToggle();
    $(this).next('.cnt_g').toggleClass('open');
    $(this).toggleClass('open');
  });

  // Scroll
  // var startPos = 0, winScrollTop = 0;
  // $(window).on('scroll', function () {
  //   if ($(window).scrollTop() > 300) {
  //     $('.l-header').addClass('is-show');
  //   } else {
  //     $('.l-header').removeClass('is-show');
  //   }
  //   winScrollTop = $(this).scrollTop();
  //   if (winScrollTop >= startPos) {
  //     if (winScrollTop >= 200) {
  //       $('.l-header').addClass('is-down');
  //     }
  //   } else {
  //     $('.l-header').removeClass('is-down');
  //   }
  //   startPos = winScrollTop;
  // });

  // Shoplink
  // $('.js-shoplink_trigger, .shoplink-back-overlay').click(function () {
  //   if ($('.js-shoplink-menu').is(':visible')) {
  //     // if ($(window).scrollTop() < 180) $('.site-header').removeClass('is-on-contents');
  //     $('.shoplink-back-overlay').hide();
  //     $('.js-shoplink-menu').slideUp(300);
  //   } else {
  //     // $('.site-header').addClass('is-on-contents');
  //     $('.shoplink-back-overlay').show();
  //     $('.js-shoplink-menu').slideDown(300);
  //   }
  //   return false;
  // });
});

// Show Banner
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $('.check_ban').removeClass('DownMove');
    $('.check_ban').addClass('UpMove');
  } else {
    if ($('.check_ban').hasClass('UpMove')) {
      $('.check_ban').removeClass('UpMove');
      $('.check_ban').addClass('DownMove');
    }
  }
}
$(window).scroll(function () {
  PageTopAnime();
});
$(window).on('load', function () {
  PageTopAnime();
});
$('.check_ban a').click(function () {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// Scroll-nav
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('scroll-nav', window.scrollY > 100);
});
