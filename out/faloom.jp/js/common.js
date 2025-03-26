function include_header(rootDir) {
  $.ajax({
    url: rootDir + 'header.html',
    async: false,
  }).done(function (header_html) {
    header_html = header_html.replace(/\{root\}/g, rootDir);
    document.write(header_html);
  });
}

function include_footer(rootDir) {
  $.ajax({
    url: rootDir + 'footer.html',
    async: false,
  }).done(function (footer_html) {
    footer_html = footer_html.replace(/\{root\}/g, rootDir);
    document.write(footer_html);
  });
}

function include_footer_under(rootDir) {
  $.ajax({
    url: rootDir + 'footer_under.html',
    async: false,
  }).done(function (footer_under_html) {
    footer_under_html = footer_under_html.replace(/\{root\}/g, rootDir);
    document.write(footer_under_html);
  });
}

function include_shop_list(rootDir) {
  $.ajax({
    url: rootDir + 'shop-list.html',
    async: false,
  }).done(function (shop_list_html) {
    shop_list_html = shop_list_html.replace(/\{root\}/g, rootDir);
    document.write(shop_list_html);
  });
}

$(function () {
  // Scroll-nav
  var $win = $(window),
    $header = $('#headmenu_sticky'),
    animationClass = 'active';

  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    if (value > 200) {
      $header.addClass('active');
    } else {
      $header.removeClass('active');
    }
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
    $('body').css('overflow-y', 'hidden');
  });
  $('.js-modal-close').on('click', function () {
    var target = $(this).parent('.c-modal_wrap');
    $(target).removeClass('is-open');
    $('body').css('overflow-y', 'auto');
  });

  // Accordion
  $('.accordion-open').click(function () {
    $(this).next().slideToggle(800);
    $(this).toggleClass('open', 800);
  });
});

//hash
$(function () {
  var headH = $('#headmenu_sticky').outerHeight(); //ヘッダーの高さを取得
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

/* animation
$(window).scroll(function () {
  const o = $(window).height(),
    t = $(window).scrollTop();
  $(".effect-fade").each(function () {
    const c = $(this).offset().top;
    t > c - o + 100 && $(this).addClass("effect-scroll");
  });
});
 */

/* addclass */
const myFunc = function () {
  const target = document.getElementsByClassName('effect-anime');
  const position = Math.floor(window.innerHeight * 0.75); //左記はビューポート内の上から75%の位置を指定

  for (let i = 0; i < target.length; i++) {
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);

    if (offsetTop < position) {
      target[i].classList.add('effect-scroll');
    }
    /*      else {
  target[i].classList.remove("effect-scroll");
} */
  }
};
window.addEventListener('scroll', myFunc, false);
