/* ロード後scrollTop */
$('html,body').animate({scrollTop: 0}, '1');

/* mainvisual */
(function () {
  var $boxs = $('.p-top_mainvisual-item');
  var length = $boxs.length;
  var last = -1;
  var current = -1;
  var visibleClass = 'mainvisual_item-visible';
  var duration = 4000;

  function init() {
    setTimeout(start, 600);
  }

  function start() {
    update();
    setInterval(update, duration);
  }

  function update() {
    last = current;
    current = current + 1 === length ? 0 : current + 1;
    $boxs.eq(current).addClass(visibleClass);
    setTimeout(function () {
      $boxs.eq(last).removeClass(visibleClass).appendTo('.p-top_mainvisual-wrap');
    }, 1600);
  }

  window.addEventListener('load', init);
})();

(function () {
  var $body = $('body');
  function init() {
    $body.addClass('loaded');
  }
  window.addEventListener('load', init);
})();

/* loading */
var images = document.getElementsByTagName('img'); // ページ内の画像取得
var percent = document.getElementById('c-loading__txt'); // パーセントのテキスト部分
var gauge = document.getElementById('c-loading__gauge'); // ゲージ
var loadingBg = document.getElementById('c-loading__bg'); // ローディング背景
var loading = document.getElementById('c-loading'); // ローディング要素
var imgCount = 0;
var baseCount = 0;
var gaugeMax = 220; // ゲージの幅指定
var current;

for (var i = 0; i < images.length; i++) {
  var img = new Image();
  img.onload = function () {
    imgCount += 1;
  };
  img.onerror = function () {
    imgCount += 1;
  };
  img.src = images[i].src;
}

var nowLoading = setInterval(function () {
  if (baseCount <= imgCount) {
    current = Math.floor((baseCount / images.length) * 100);
    percent.innerHTML = current;
    gauge.style.width = Math.floor((gaugeMax / 100) * current) + 'px';
    baseCount += 1;
    if (baseCount == images.length) {
      loadingBg.classList.add('fadeout');
      loading.classList.add('fadeout');
      clearInterval(nowLoading);
    }
  }
}, 10);
