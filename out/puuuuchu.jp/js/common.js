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

//hash
$(function () {
  var headH = $('header').outerHeight(); //ヘッダーの高さを取得
  var animeSpeed = 500; //アニメーションスピード
  $("a[href^='#']").on({
    click: function () {
      var href = $(this).attr('href');
      var target = $(href == '#' || href === '' ? 'html' : href);
      var position;
      position = target.offset().top - headH; //ターゲットまでの距離からヘッダーの高さを引く
      $('body,html').stop().animate(
        {
          scrollTop: position,
        },
        animeSpeed
      );
      return false;
    },
  });
});
$(function () {
  var headH = $('header').outerHeight();
  var animeSpeed = 500;
  var urlHash = location.hash; //URLのハッシュタグを取得
  if (urlHash) {
    //ハッシュタグが有る場合
    $('body,html').scrollTop(0);
    setTimeout(function () {
      //無くてもいいが有ると動作が安定する
      var target = $(urlHash);
      var position = target.offset().top - headH;
      $('body,html').stop().animate(
        {
          scrollTop: position,
        },
        animeSpeed
      );
    }, 0);
  }
});

/* animation */
$(window).scroll(function () {
  const o = $(window).height(),
    t = $(window).scrollTop();
  $('.effect-fade').each(function () {
    const c = $(this).offset().top;
    t > c - o + 100 && $(this).addClass('effect-scroll');
  });
});

/* lazy */
$('img.lazyload').lazyload();

/* 4lens */
$('.js-sub-img img').on('click', function () {
  // メイン画像に切り替えるimgのsrc取得
  img = $(this).attr('src').replace('_thumb', '');
  // currentクラス付け替え(枠線などを変えたい時に)
  $('.js-sub-img li').removeClass('current');
  $(this).parent().parent().addClass('current');
  // fadeOutできたらsrc変更してfadeIn
  $('.js-main-img img').fadeOut(500, function () {
    $('.js-main-img img')
      .attr('src', img)
      .on('load', function () {
        $(this).fadeIn(500);
      });
  });
});
