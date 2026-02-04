(function () {
  'use strict';

  function init() {
    // ボタン要素を作成（スタイルは style.css）
    var btn = document.createElement('button');
    btn.className = 'pagetop-btn';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', 'ページトップへ');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    var scrollThreshold = 200;

    function updateVisibility() {
      if (window.scrollY >= scrollThreshold) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });
    btn.addEventListener('click', scrollToTop);

    // 初期表示時にも状態を合わせる
    updateVisibility();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
