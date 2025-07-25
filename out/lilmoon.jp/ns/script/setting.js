$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop: position}, speed, 'swing');
    return false;
  });

  new WOW().init();

  const rellaxin = document.querySelectorAll('.rellax');
  rellaxin.forEach((el) => {
    const rellax = new Rellax(el, {
      relativeToWrapper: true,
      wrapper: el.parentElement,
    });
  });
});
