/* scrollTop */
var urlHash = location.hash;
if (urlHash) {
  $('body,html').stop().scrollTop(0);
  setTimeout(function () {
    var speed = 450;
    var target = $(urlHash);
    var position = target.offset().top;
    $('html, body').animate(
      {
        scrollTop: position,
      },
      speed,
      'swing'
    );
  }, 400);
}
$('a[href^="#"]').click(function () {
  var speed = 450;
  var href = $(this).attr('href');
  var target = $(href);
  var position = target.offset().top;
  $('html, body').animate(
    {
      scrollTop: position,
    },
    speed,
    'swing'
  );
});

/* dropdown */
var w = $(window).width();
var x = 768;
if (w <= x) {
  var $nav = $('.js-dropdown__bg');
  var $btn = $('.js-dropdown');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
} else {
  $('.js-dropdown').hover(
    function () {
      $('.js-dropdown__bg').addClass('open');
    },
    function () {
      $('.js-dropdown__bg').removeClass('open');
    }
  );
}

/* ビューポートの高さを取得 */
// 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
let vh = window.innerHeight * 0.01;
// カスタム変数--vhの値をドキュメントのルートに設定
document.documentElement.style.setProperty('--vh', `${vh}px`);
