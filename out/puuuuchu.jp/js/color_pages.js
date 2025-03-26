/* gsap */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // 960px以上
  '(min-width: 960px)': function () {
    gsap.from('.header_onsale,.h_colorno', {autoAlpha: 0, duration: 1.5});
    gsap.from('.color_colorname,.color_mv', {autoAlpha: 0, duration: 1.5});
    gsap.from('.color_txt1,.color_specimg', {
      autoAlpha: 0,
      duration: 1.5,
      y: +45,
      scrollTrigger: {
        trigger: '.color_txt1',
        start: 'top bottom',
      },
    });
    gsap.from('.color_sec1 .shopbtn_area', {
      autoAlpha: 0,
      duration: 1.5,
      y: +45,
      scrollTrigger: {
        trigger: '.shopbtn_area',
        start: 'top bottom',
      },
    });
  },
  '(max-width: 959px)': function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.color_sec1',
        start: 'top bottom',
      },
    });
    tl.from('.header_onsale,.h_colorno', {autoAlpha: 0, duration: 1.5});
    tl.from('.color_colorname,.color_mv', {autoAlpha: 0, duration: 1.5}, '<');
    tl.from('.color_txt1,.color_specimg', {autoAlpha: 0, duration: 1, y: +45}, '<0.5');
    tl.from('.color_sec1 .shopbtn_area', {autoAlpha: 0, duration: 1, y: +45}, '<0.5');
  },
  all: function () {},
});
