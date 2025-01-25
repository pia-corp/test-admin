/*
window.addEventListener('load', function() {
    if (!sessionStorage.getItem('disp_popup')) {
        const dispPopup = function() {
            sessionStorage.setItem('disp_popup', 'on');
            const body = document.querySelector('body');
            const bgPopup = document.querySelector('.bg_onetime_popup');
            const popup = document.querySelector('.onetime_popup');
            const popupTitleClose = document.querySelector('.onetime_popup_title_close');
            const popupLinks = popup.querySelectorAll('a'); // ポップアップ内のアンカーリンクを取得
            body.classList.add('open_popup');

            bgPopup.addEventListener('click', function() {
                closePopup();
            });
            popup.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            popupTitleClose.addEventListener('click', function() {
                closePopup();
            });

            // ポップアップ内のアンカーリンクにクリックイベントリスナーを追加
            popupLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    closePopup();
                });
            });

            function closePopup() {
                body.classList.remove('open_popup');
            }
        };

        setTimeout(dispPopup, 3000);
    }
}, false);
*/

window.addEventListener('load', () => {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 1199) {
    document.getElementById('prof-wrap-1').style.display = 'none';
    document.getElementById('prof-wrap-2').style.display = 'none';
  }
});

// ウィンドウ幅が1199px以下の場合に実行される関数
function setupAccordion() {
  const accordionBtns = document.querySelectorAll('.accordion-open');

  accordionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const wrap = btn.nextElementSibling;
      wrap.classList.toggle('open');
    });
  });
}

// ページ読み込み時の処理
window.addEventListener('load', () => {
  if (window.innerWidth <= 1199) {
    setupAccordion();
  }
});

// ウィンドウリサイズ時の処理
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1199) {
    setupAccordion();
  }
});
