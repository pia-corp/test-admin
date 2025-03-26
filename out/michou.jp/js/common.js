const url = location.pathname
  , tabW = 1024
  , spW = 767
  , header = $(".js-header")
  , img = $('img[data-size="true"]')
  , source = $('source[data-size="true"]')
  , footerColor = $("main").attr("data-footer-color")
  , pageDate = $("main").attr("data-page");

function originalImgSize(e, t) {
  e.each((function () {
    let e = $(this)
      , a = e.attr(t)
      , o = new Image;
    o.src = a,
      o.onload = function () {
        let t = o.width
          , a = o.height;
        e.attr("width", t),
          e.attr("height", a)
      }
  }
  ))
}
originalImgSize(img, "src"),
  originalImgSize(source, "srcset");


//smooth_scroll
$('a[href^="#"]').click(function () {
  let speed = 500;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});


// モーダルを開く - js-headerModal01
$(".js-headerModal01Open").on("click", function () {
  $(".js-headerModal01").fadeIn();
});
// モーダルを閉じる（.js-headerModal01Inner 以外をクリック）
$(".js-headerModal01").on("click", function (e) {
  if (!$(e.target).closest(".js-headerModal01Inner").length) {
    $(".js-headerModal01").fadeOut();
  }
});
// 閉じるボタンを押したときに閉じる
$(".js-headerModal01Close").on("click", function () {
  $(".js-headerModal01").fadeOut();
});

// モーダルを開く - js-headerModal02
$(".js-headerModal02Open").each(function () {
  $(this).on("click", function () {
    $(".js-headerModal02").fadeIn();
  });
});
// モーダルを閉じる（.js-headerModal02Inner 以外をクリック）
$(".js-headerModal02").on("click", function (e) {
  if (!$(e.target).closest(".js-headerModal02Inner").length) {
    $(".js-headerModal02").fadeOut();
  }
});
// 閉じるボタンを押したときに閉じる
$(".js-headerModal02Close").on("click", function () {
  $(".js-headerModal02").fadeOut();
});



// //スクロールアニメーション
// var scroll_show = function (e) {
//   $('*[data-scroll]').each(function () {
//     const POS = $(this).offset().top;  //fade-inがついている要素の位置
//     const scroll = $(window).scrollTop();  //スクロール
//     const windowHeight = $(window).height();  //ウィンドウの高さ

//     if (scroll > POS - windowHeight + windowHeight / 5) {
//       $(this).addClass('scroll-show');
//     } else {
//       // $(this).removeClass('scroll-show');
//     }
//   });
// };
// window.addEventListener('scroll', scroll_show);

// $(window).on('load', function () {
//   scroll_show();
//   $('[data-load]').addClass('scroll-show');
// });


// //ページトップ handler
// const $pageTop = $(".js-scrolltop"); // ボタン要素
// const $footer = $(".l-footer"); // フッター要素
// const $topMv = $(".p-topMv"); // .p-topMv 要素
// let offset = -190; // ボタンとフッターの間隔 (px)
// // デバイスに応じたオフセット値を設定する関数
// function updateOffset() {
//   // if ($(window).width() <= 768) {
//   if ($(window).width() <= tabW) {
//     offset = -50; // スマホの場合
//   } else {
//     offset = -190; // PCの場合
//   }
// }
// updateOffset();
// // ページトップボタンのクリックイベント
// $pageTop.click(function () {
//   $("body,html").animate({
//     scrollTop: 0,
//   }, 500);
//   return false;
// });


// // スクロール・リサイズ時の処理
// $(window).on("scroll resize", function () {
//   updateOffset(); // リサイズ時にオフセット値を更新
//   const scrollTop = $(window).scrollTop(); // 現在のスクロール位置
//   const scrollBottom = scrollTop + $(window).height(); // 画面下端の位置
//   const footerTop = $footer.offset().top; // フッターの上端の位置
//   //if (scrollTop < topMvHeight) {
//   if (scrollTop < 200) {
//     $pageTop.css({
//       opacity: 0,
//       pointerEvents: "none", // クリック操作を無効化
//     });
//   } else {
//     $pageTop.css({
//       opacity: 1,
//       pointerEvents: "auto", // クリック操作を有効化
//     });
//   }
//   if (scrollBottom >= footerTop) {
//     // フッターに重なる場合はボタンの位置を調整
//     const overlap = scrollBottom - footerTop + offset;
//     $pageTop.css({
//       transform: `translateY(-${overlap}px)`,
//     });
//   } else {
//     // 通常時は固定
//     $pageTop.css({
//       transform: "translateY(0)",
//     });
//   }
// });
