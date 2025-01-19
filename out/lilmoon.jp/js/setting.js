$(function () {
  // PARALLAX
  new WOW().init();
  const rellaxin = document.querySelectorAll('.rellax');
  rellaxin.forEach((el) => {
    const rellax = new Rellax(el, {
      relativeToWrapper: true,
      wrapper: el.parentElement,
    });
  });
  // ACCORDION - shop menu
  $('.js-shop_btn_ttl').on('click', function () {
    $(this).next().slideToggle(800);
    $(this).toggleClass('open', 800);
  });
});
