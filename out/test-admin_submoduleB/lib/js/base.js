$(window).scroll(function () {
  if ($(window).scrollTop() > 20) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});

$('.popup_lineup').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_lineup_list').addClass('popup');
  $('body').addClass('popup');
  return false;
});
$('.popup_lineup_close , .popup_fixed_bg').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_lineup_list').removeClass('popup');
  $('body').removeClass('popup');
  return false;
});

$('.pop_shop_list').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_shop_list').addClass('popup');
  $('body').addClass('popup');
  return false;
});
$('.popup_shop_list_close , .popup_fixed_bg').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_shop_list').removeClass('popup');
  $('body').removeClass('popup');
  return false;
});

$('.pop_up_brown').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_brown_img').addClass('popup');
  $('body').addClass('popup');
  return false;
});
$('.popup_brown_img_close , .popup_fixed_bg').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_brown_img').removeClass('popup');
  $('body').removeClass('popup');
  return false;
});

$('.pop_up_black').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_black_img').addClass('popup');
  $('body').addClass('popup');
  return false;
});
$('.popup_black_img_close , .popup_fixed_bg').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_black_img').removeClass('popup');
  $('body').removeClass('popup');
  return false;
});

$('.popup_lens').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_lens_img').addClass('popup');
  $('body').addClass('popup');
  return false;
});
$('.popup_lens_img_close , .popup_fixed_bg').on('click , tap', function () {
  $('.popup_fixed_bg, .popup_lens_img').removeClass('popup');
  $('body').removeClass('popup');
  return false;
});
