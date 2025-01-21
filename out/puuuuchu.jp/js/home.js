/* gsap */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // 960px以上
  '(min-width: 960px)': function () {
    gsap.from('.mv2_wrap', {autoAlpha: 0, duration: 1.2});
    const tlpc = gsap.timeline({
      scrollTrigger: {
        trigger: '.mv2_wrap_lends',
        start: 'top bottom',
      },
    });
    tlpc.from('.mv_lends', {autoAlpha: 0, duration: 1, y: +45});
    tlpc.from('.mv_lensdata', {autoAlpha: 0, duration: 1, y: +45});

    const tlpc2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.brandConcept',
        start: 'center bottom',
      },
    });

    gsap.from('.brandConceptTitle', {
      scrollTrigger: {
        trigger: '.brandConceptTitle',
        start: 'top bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });

    gsap.from('.lineup .centerHeaderTitle', {
      scrollTrigger: {
        trigger: '.lineup',
        start: 'top bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });
    gsap.from('.lineup_txt', {
      scrollTrigger: {
        trigger: '.lineup_txt',
        start: 'center bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });

    /*
    const tlpc3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".lineup_4lends",
        start: "top bottom",
      }
    });
tlpc3.from(".lineup_4lends",{ autoAlpha: 0, duration: 1, y: +45, },"<")
    tlpc3.from(".lends4_01 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<1")
    tlpc3.from(".lends4_02 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<0.5")
    tlpc3.from(".lends4_03 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<0.5")
    tlpc3.from(".lends4_04 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<0.5")
*/
    gsap.from('.producer_img', {
      scrollTrigger: {
        trigger: '.producer',
        start: '20% bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });
    gsap.from('.producer_name', {
      scrollTrigger: {
        trigger: '.producer_name',
        start: 'center bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });
  },
  '(max-width: 959px)': function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.mv',
        start: 'center bottom',
      },
    });
    tl.from('.mv2_wrap', {autoAlpha: 0, duration: 1.2});
    tl.from('.mv2_lensdata', {autoAlpha: 0, duration: 1.2}, '<');
    tl.from('.brandConcept', {autoAlpha: 0, duration: 1.2}, '<');
    tl.from('.mv_lends', {autoAlpha: 0, duration: 1, y: +45}, '<');
    tl.from('.mv_lensdata', {autoAlpha: 0, duration: 1, y: +45});

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.brandConcept',
        start: 'top bottom',
      },
    });
    tl.from('.brandConcept .headerTitle', {autoAlpha: 0, duration: 1, y: +45}, '<1');
    tl.from('.brandConceptTitle', {autoAlpha: 0, duration: 1, y: +45}, '<');

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.lineup',
        start: 'top bottom',
      },
    });
    /*
    tl2.from(".lineup .centerHeaderTitle",{ autoAlpha: 0, duration: 1, y: +45, })
tl2.from(".lineup_txt",{ autoAlpha: 0, duration: 1, y: +45, })
tl2.from(".lineup_4lends",{ autoAlpha: 0, duration: 1, y: +45, },"<")
    tl2.from(".lends4_01 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<1")
    tl2.from(".lends4_02 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<0.5")
    tl2.from(".lends4_03 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<0.5")
    tl2.from(".lends4_04 .lends_wearing", { autoAlpha: 0, duration: 1, y: +20, }, "<0.5")
*/

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.producer',
        start: '40% bottom',
      },
    });
    tl4.from('.producer_img', {autoAlpha: 0, duration: 1, y: +45});
    tl4.from('.producer_name', {autoAlpha: 0, duration: 1, y: +45});
    tl4.from('.producer_txt .headerTitle', {autoAlpha: 0, duration: 1, y: +45}, '<');
  },
  all: function () {
    gsap.from('.brandConceptText_wrap', {
      scrollTrigger: {
        trigger: '.brandConceptText_wrap',
        start: 'center bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });
    gsap.from('.shopbtn_area', {
      scrollTrigger: {
        trigger: '.shopbtn_area',
        start: 'top bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });
    gsap.from('.campaign', {
      scrollTrigger: {
        trigger: '.campaign',
        start: 'center bottom',
      },
      autoAlpha: 0,
      duration: 1,
      y: +45,
    });
  },
});
$(function () {
  $('.lends4_lends_item1').click(function () {
    $('.lens4_img1').toggleClass('showimg');
  });
  $('.lends4_lends_item2').click(function () {
    $('.lens4_img2').toggleClass('showimg');
  });
  $('.lends4_lends_item3').click(function () {
    $('.lens4_img3').toggleClass('showimg');
  });
  $('.lends4_lends_item4').click(function () {
    $('.lens4_img4').toggleClass('showimg');
  });
});
