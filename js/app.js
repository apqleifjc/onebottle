// 메인 대문 슬라이드쇼
(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const SLIDE_MS = 6000;
  const slides = Array.from(hero.querySelectorAll('.slide'));
  const dotsWrap = hero.querySelector('.hero__dots');
  const currentEl = hero.querySelector('.js-current');
  const totalEl = hero.querySelector('.js-total');
  const pad = (n) => String(n).padStart(2, '0');

  if (slides.length < 2) return;

  hero.style.setProperty('--slide-ms', SLIDE_MS + 'ms');
  totalEl.textContent = pad(slides.length);

  const dots = slides.map((_, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hero__dot';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-label', `${i + 1}번째 사진`);
    btn.appendChild(document.createElement('span'));
    btn.addEventListener('click', () => {
      go(i);
      restart();
    });
    dotsWrap.appendChild(btn);
    return btn;
  });

  let index = 0;
  let timer = null;

  function go(next) {
    index = (next + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-done', i < index);
      dot.classList.remove('is-active');
      dot.setAttribute('aria-selected', String(i === index));
    });
    // 진행 바 애니메이션을 처음부터 다시 시작
    void dots[index].offsetWidth;
    dots[index].classList.add('is-active');

    currentEl.textContent = pad(index + 1);
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), SLIDE_MS);
  }

  // 탭이 숨겨지면 멈췄다가 돌아오면 이어서 재생
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
      hero.classList.add('is-paused');
    } else {
      hero.classList.remove('is-paused');
      go(index);
      restart();
    }
  });

  // 키보드 좌우 화살표로 넘기기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { go(index + 1); restart(); }
    if (e.key === 'ArrowLeft') { go(index - 1); restart(); }
  });

  // 모바일 스와이프
  let startX = null;
  hero.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      go(index + (dx < 0 ? 1 : -1));
      restart();
    }
    startX = null;
  });

  go(0);
  restart();
})();
