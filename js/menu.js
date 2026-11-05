/* =========================================
   ONE BOTTLE - 메뉴 데이터 & 동작
   -----------------------------------------
   ■ 메뉴 수정: 아래 MENU 목록에서 이름·가격·성분 숫자만 바꾸면 됩니다.
   ■ 사진 넣기: images/menu/ 폴더에 "메뉴id.jpg" 이름으로 사진을 넣으면
               자동으로 표시됩니다. (예: images/menu/americano.jpg)
               사진이 없으면 아이콘 그림이 대신 보여요.
   ■ 성분표 숫자는 모두 임시 값입니다.
   ========================================= */

/* ---------- 대주제 ---------- */
const MAJORS = {
  drinks:  { en: 'Drinks',  ko: '음료',   subs: ['coffee', 'latte', 'tea', 'smoothie', 'frappe', 'ade'] },
  dessert: { en: 'Dessert', ko: '디저트', subs: ['bakery', 'cake', 'summer'] }
};

/* ---------- 소주제 ----------
   size: 성분표 기준 용량/중량, allergy: 기본 알레르기 성분, tint: 사진 없을 때 배경색 */
const SUBS = {
  coffee:   { en: 'Coffee',   ko: '커피',     tag: 'HOT / ICE', emoji: '☕', size: '355ml', allergy: '우유', tint: '#d9c2a7' },
  latte:    { en: 'Latte',    ko: '라떼',     tag: 'HOT / ICE', emoji: '🥛', size: '355ml', allergy: '우유', tint: '#e6d3bd' },
  tea:      { en: 'Tea',      ko: '티',       tag: 'HOT / ICE', emoji: '🍵', size: '355ml', allergy: '없음', tint: '#d6dcc0' },
  smoothie: { en: 'Smoothie', ko: '스무디',   tag: '',          emoji: '🥤', size: '473ml', allergy: '우유', tint: '#efcfd2' },
  frappe:   { en: 'Frappe',   ko: '프라페',   tag: '',          emoji: '🧋', size: '473ml', allergy: '우유', tint: '#e2d1c4' },
  ade:      { en: 'Ade',      ko: '에이드',   tag: '',          emoji: '🍹', size: '473ml', allergy: '없음', tint: '#f2dcb8' },
  bakery:   { en: 'Bakery',   ko: '베이커리', tag: '',          emoji: '🥐', size: '1개',   allergy: '밀, 우유, 계란', tint: '#ecd6b3' },
  cake:     { en: 'Cake',     ko: '케이크',   tag: '',          emoji: '🍰', size: '1조각', allergy: '밀, 우유, 계란', tint: '#f0dcd2' },
  summer:   { en: 'Summer',   ko: '빙수',     tag: '2인',       emoji: '🍧', size: '2인분', allergy: '우유', tint: '#dbe4ea' }
};

/* ---------- 메뉴 목록 ----------
   m(소주제, id, 이름, 가격, [열량kcal, 당류g, 단백질g, 포화지방g, 나트륨mg, 카페인mg], 추가옵션)
   추가옵션: emoji(아이콘), allergy(알레르기), size(용량), note(설명) */
const MENU = [];
function m(sub, id, name, price, n, extra) {
  MENU.push(Object.assign({
    sub, id, name, price,
    kcal: n[0], sugar: n[1], protein: n[2], fat: n[3], sodium: n[4], caffeine: n[5]
  }, extra || {}));
}

// Coffee
m('coffee', 'espresso',          '에스프레소',     4500, [5, 0, 0.3, 0, 5, 150],     { size: '30ml', allergy: '없음' });
m('coffee', 'americano',         '아메리카노',     5500, [10, 0, 1, 0, 10, 150],     { allergy: '없음', note: '헤이즐넛 시럽 추가 +1,000 · 샷 추가 +1,000' });
m('coffee', 'americano-venti',   '아메리카노 벤티', 6500, [15, 0, 1, 0, 15, 225],     { size: '591ml', allergy: '없음' });
m('coffee', 'cafe-latte',        '카페라떼',       6000, [180, 12, 9, 6, 120, 150]);
m('coffee', 'cappuccino',        '카푸치노',       6500, [130, 9, 7, 4, 90, 150]);
m('coffee', 'cafe-mocha',        '카페모카',       6500, [290, 28, 9, 9, 130, 160],  { allergy: '우유, 대두' });
m('coffee', 'vanilla-latte',     '바닐라라떼',     6500, [240, 26, 8, 6, 120, 150]);
m('coffee', 'caramel-macchiato', '카라멜마끼아또', 6500, [250, 27, 8, 6, 140, 150]);
m('coffee', 'black-sugar-latte', '흑당라떼',       6500, [270, 32, 8, 6, 125, 150]);
m('coffee', 'condensed-latte',   '연유라떼',       6500, [280, 33, 9, 7, 130, 150]);
m('coffee', 'hazelnut-latte',    '헤이즐넛라떼',   6500, [240, 25, 8, 6, 120, 150]);
m('coffee', 'dalgona-latte',     '달고나라떼',     6800, [310, 36, 8, 7, 150, 150],  { emoji: '🍯' });
m('coffee', 'affogato',          '아포가토',       6800, [210, 20, 4, 8, 60, 150],   { size: '1잔 (아이스크림 1스쿱)', emoji: '🍨' });

// Latte
m('latte', 'choco-latte',        '초코라떼',       6500, [320, 34, 9, 9, 160, 10],   { emoji: '🍫', allergy: '우유, 대두' });
m('latte', 'greentea-latte',     '녹차라떼',       6500, [260, 28, 8, 6, 110, 50],   { emoji: '🍵' });
m('latte', 'blacktea-latte',     '홍차라떼',       6500, [230, 24, 8, 6, 110, 45]);
m('latte', 'sweetpotato-latte',  '고구마라떼',     6500, [300, 30, 8, 6, 140, 0],    { emoji: '🍠' });
m('latte', 'mintchoco-latte',    '민트초코라떼',   6500, [330, 36, 9, 9, 160, 10],   { emoji: '🍫', allergy: '우유, 대두' });
m('latte', 'milk-tea',           '밀크티',         6500, [240, 26, 8, 6, 115, 45]);
m('latte', 'grain-latte',        '곡물라떼',       6500, [280, 25, 10, 5, 150, 0],   { emoji: '🌾', allergy: '우유, 대두, 밀' });

// Tea
m('tea', 'jasmine',          '유기농 진주자스민',   6000, [0, 0, 0, 0, 0, 20]);
m('tea', 'earlgrey',         '유기농 얼그레이',     6000, [0, 0, 0, 0, 0, 40]);
m('tea', 'chamomile',        '유기농 카모마일',     6000, [0, 0, 0, 0, 0, 0],     { emoji: '🌼' });
m('tea', 'peppermint',       '유기농 페퍼민트',     6000, [0, 0, 0, 0, 0, 0],     { emoji: '🌿' });
m('tea', 'rosemary',         '유기농 로즈마리',     6000, [0, 0, 0, 0, 0, 0],     { emoji: '🌿' });
m('tea', 'hibiscus',         '유기농 히비스커스',   6000, [0, 0, 0, 0, 0, 0],     { emoji: '🌺' });
m('tea', 'green-tea',        '유기농 녹차',         6000, [0, 0, 0, 0, 0, 30]);
m('tea', 'citrus-tea',       '유자 / 자몽 / 레몬티', 6000, [180, 42, 0, 0, 10, 0],  { emoji: '🍋' });
m('tea', 'ginger-tea',       '생강차',             6500, [170, 40, 0, 0, 10, 0],  { emoji: '🫚' });
m('tea', 'jujube-tea',       '대추차',             6500, [200, 44, 1, 0, 15, 0]);

// Smoothie
m('smoothie', 'yogurt-smoothie',     '플레인요거트스무디', 7000, [330, 45, 6, 4, 120, 0]);
m('smoothie', 'strawberry-smoothie', '딸기스무디',         7000, [300, 48, 3, 2, 80, 0],   { emoji: '🍓' });
m('smoothie', 'mango-smoothie',      '망고스무디',         7000, [310, 50, 3, 2, 70, 0],   { emoji: '🥭' });
m('smoothie', 'blueberry-smoothie',  '블루베리스무디',     7000, [300, 46, 3, 2, 75, 0],   { emoji: '🫐' });

// Frappe
m('frappe', 'vanilla-frappe',   '바닐라프라페',   7200, [380, 50, 6, 10, 180, 0]);
m('frappe', 'greentea-frappe',  '녹차프라페',     7200, [390, 52, 7, 10, 170, 60],  { emoji: '🍵' });
m('frappe', 'javachip-frappe',  '자바칩프라페',   7200, [450, 58, 7, 14, 220, 90],  { emoji: '🍫', allergy: '우유, 대두, 밀' });
m('frappe', 'mintchoco-frappe', '민트초코프라페', 7200, [440, 56, 7, 13, 200, 15],  { allergy: '우유, 대두' });
m('frappe', 'blueberry-frappe', '블루베리프라페', 7200, [400, 54, 5, 9, 160, 0],   { emoji: '🫐' });

// Ade
m('ade', 'yuja-ade',        '유자에이드',              6800, [190, 45, 0, 0, 20, 0],  { emoji: '🍋' });
m('ade', 'grapefruit-ade',  '자몽에이드',              6800, [180, 42, 0, 0, 20, 0],  { emoji: '🍊' });
m('ade', 'lemon-ade',       '레몬에이드',              6800, [170, 40, 0, 0, 20, 0],  { emoji: '🍋' });
m('ade', 'cherry-ade',      '체리에이드',              6800, [185, 44, 0, 0, 20, 0],  { emoji: '🍒' });
m('ade', 'bluelemon-ade',   '블루레몬에이드',          6800, [190, 46, 0, 0, 20, 0],  { emoji: '🫐' });
m('ade', 'calamansi-ade',   '깔라만시에이드',          6800, [170, 40, 0, 0, 20, 0],  { emoji: '🍋' });
m('ade', 'greengrape-ade',  '청포도에이드',            6800, [190, 45, 0, 0, 20, 0],  { emoji: '🍇' });
m('ade', 'cherry-icetea',   '체리 아이스티',           6500, [150, 36, 0, 0, 15, 30], { emoji: '🍒' });
m('ade', 'peach-icetea',    '복숭아 아이스티',         6500, [150, 36, 0, 0, 15, 30], { emoji: '🍑', allergy: '복숭아' });
m('ade', 'kids-pororo',     '어린이 음료 (뽀로로)',    3500, [90, 20, 0, 0, 20, 0],   { size: '235ml', emoji: '🧃' });
m('ade', 'kids-icecream',   '어린이 음료 (아이스크림)', 5000, [220, 28, 4, 6, 80, 0], { size: '1컵', emoji: '🍦', allergy: '우유' });

// Bakery
m('bakery', 'mocha-bun',          '모카번',            4500, [380, 18, 8, 10, 320, 20]);
m('bakery', 'egg-sandwich',       '에그듬뿍 샌드위치', 4500, [420, 6, 14, 7, 650, 0],  { emoji: '🥪' });
m('bakery', 'ham-cheese-sandwich','햄치즈샌드위치',    4500, [450, 5, 18, 9, 820, 0],  { emoji: '🥪', allergy: '밀, 우유, 계란, 돼지고기' });
m('bakery', 'cheese-bagel',       '치즈베이글',        5500, [390, 6, 14, 8, 560, 0],  { emoji: '🥯' });
m('bakery', 'croque-monsieur',    '크로크무슈',        5500, [480, 6, 19, 12, 900, 0], { emoji: '🥪', allergy: '밀, 우유, 계란, 돼지고기' });
m('bakery', 'croffle',            '크로플 (아이스크림)', 6500, [520, 30, 7, 18, 350, 0], { emoji: '🧇' });
m('bakery', 'walnut-tart',        '호두 타르트',       7800, [450, 28, 7, 11, 210, 0], { emoji: '🥧', allergy: '밀, 우유, 계란, 호두' });

// Cake
m('cake', 'cheesecake',          '치즈케이크',         6500, [380, 24, 7, 15, 260, 0]);
m('cake', 'choco-mousse',        '초코무스케이크',     6500, [410, 30, 6, 16, 150, 15], { allergy: '밀, 우유, 계란, 대두' });
m('cake', 'carrot-cake',         '당근케이크',         7500, [420, 34, 5, 12, 300, 0],  { emoji: '🥕', allergy: '밀, 우유, 계란, 호두' });
m('cake', 'cream-castella',      '크림카스테라',       7500, [360, 30, 7, 10, 140, 0]);
m('cake', 'tiramisu',            '티라미수',           7500, [400, 28, 7, 15, 120, 40]);
m('cake', 'hallabong-tea-cake',  '한라봉홍차케이크',   7500, [390, 32, 5, 12, 160, 20], { emoji: '🍊' });
m('cake', 'basque-cheesecake',   '바스크 치즈케이크',  7500, [430, 25, 8, 18, 280, 0]);
m('cake', 'mille-crepe',         '밀크레이프',         7800, [380, 28, 6, 13, 150, 0]);
m('cake', 'hazelnut-choco-cake', '헤이즐넛 초코케이크', 7800, [460, 34, 7, 17, 160, 15], { allergy: '밀, 우유, 계란, 대두, 헤이즐넛' });
m('cake', 'strawberry-tiramisu', '딸기 티라미수',      7800, [390, 30, 6, 14, 110, 20], { emoji: '🍓' });
m('cake', 'rainbow-cake',        '레인보우케이크',     8000, [440, 38, 6, 14, 200, 0],  { emoji: '🌈' });

// Summer
m('summer', 'pat-bingsu',      '팥빙수',     15000, [780, 110, 18, 12, 260, 0], { allergy: '우유, 대두' });
m('summer', 'injeolmi-bingsu', '인절미빙수', 15000, [820, 105, 22, 13, 280, 0], { allergy: '우유, 대두' });
m('summer', 'mango-bingsu',    '망고빙수',   16000, [760, 120, 12, 11, 200, 0], { emoji: '🥭' });


/* =========================================
   화면 그리기
   ========================================= */
const $major = document.getElementById('filter-major');
const $sub   = document.getElementById('filter-sub');
const $list  = document.getElementById('menu-list');
const $modal = document.getElementById('menu-modal');

const won = n => n.toLocaleString('ko-KR') + '원';
const majorOf = sub => Object.keys(MAJORS).find(k => MAJORS[k].subs.includes(sub));

/* 주소 # 뒤의 값으로 현재 선택 파악: all | drinks | dessert | coffee ... */
function currentKey() {
  const key = decodeURIComponent(location.hash.slice(1));
  return (key === 'all' || MAJORS[key] || SUBS[key]) ? key : 'all';
}

function photoHTML(item, big) {
  const s = SUBS[item.sub];
  return `
    <span class="menu-photo__emoji" aria-hidden="true">${item.emoji || s.emoji}</span>
    <img src="images/menu/${item.id}.jpg" alt="${big ? item.name : ''}" loading="lazy">`;
}

/* 사진이 없으면 img를 지워서 아이콘이 보이게 함 */
function bindPhotoFallback(root) {
  root.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => img.remove(), { once: true });
  });
}

function renderFilter(key) {
  const activeMajor = MAJORS[key] ? key : (SUBS[key] ? majorOf(key) : 'all');

  const majors = [['all', '전체']].concat(Object.keys(MAJORS).map(k => [k, MAJORS[k].en + ' · ' + MAJORS[k].ko]));
  $major.innerHTML = majors.map(([k, label]) =>
    `<a href="#${k}" class="chip chip--major${k === activeMajor ? ' is-active' : ''}">${label}</a>`
  ).join('');

  const subs = activeMajor === 'all'
    ? Object.keys(SUBS)
    : MAJORS[activeMajor].subs;
  $sub.innerHTML = subs.map(s =>
    `<a href="#${s}" class="chip${s === key ? ' is-active' : ''}">${SUBS[s].ko}</a>`
  ).join('');
}

function sectionHTML(sub) {
  const s = SUBS[sub];
  const items = MENU.filter(i => i.sub === sub);
  return `
    <section class="menu-section">
      <header class="menu-section__head">
        <h3>${s.en} <span>${s.ko}</span></h3>
        ${s.tag ? `<span class="tag">${s.tag}</span>` : ''}
        <span class="menu-section__count">${items.length}개</span>
      </header>
      <div class="menu-grid">
        ${items.map(i => `
          <button type="button" class="menu-card" data-id="${i.id}">
            <span class="menu-card__photo menu-photo" style="--tint:${s.tint}">${photoHTML(i)}</span>
            <span class="menu-card__name">${i.name}</span>
          </button>`).join('')}
      </div>
    </section>`;
}

function renderList(key) {
  let html = '';
  if (SUBS[key]) {
    // 소주제: 해당 메뉴만
    html = sectionHTML(key);
  } else {
    // 전체 또는 대주제: 소주제별로 나눠서 모두 표시
    const majors = key === 'all' ? Object.keys(MAJORS) : [key];
    html = majors.map(mk => `
      <div class="menu-major">
        <h2 class="menu-major__title">${MAJORS[mk].en} <span>${MAJORS[mk].ko}</span></h2>
        ${MAJORS[mk].subs.map(sectionHTML).join('')}
      </div>`).join('');
  }
  $list.innerHTML = html;
  bindPhotoFallback($list);
}

function render(scroll) {
  const key = currentKey();
  renderFilter(key);
  renderList(key);
  if (scroll) {
    const top = document.getElementById('menu-filter').getBoundingClientRect().top + window.scrollY;
    const headerH = document.querySelector('.header').offsetHeight;
    window.scrollTo({ top: top - headerH, behavior: 'smooth' });
  }
}

/* =========================================
   상세 팝업
   ========================================= */
function openModal(id) {
  const item = MENU.find(i => i.id === id);
  if (!item) return;
  const s = SUBS[item.sub];

  const photo = document.getElementById('modal-photo');
  photo.className = 'menu-modal__photo menu-photo';
  photo.style.setProperty('--tint', s.tint);
  photo.innerHTML = photoHTML(item, true);
  bindPhotoFallback(photo);

  document.getElementById('modal-cat').textContent = `${MAJORS[majorOf(item.sub)].en} · ${s.en}${s.tag ? ' · ' + s.tag : ''}`;
  document.getElementById('modal-name').textContent = item.name;
  document.getElementById('modal-note').textContent = item.note || '';
  document.getElementById('modal-price').textContent = won(item.price);

  const isDessert = majorOf(item.sub) === 'dessert';
  const rows = [
    [isDessert ? '기준 중량' : '기준 용량', item.size || s.size],
    ['열량', item.kcal + ' kcal'],
    ['당류', item.sugar + ' g'],
    ['단백질', item.protein + ' g'],
    ['포화지방', item.fat + ' g'],
    ['나트륨', item.sodium + ' mg'],
    ['카페인', item.caffeine + ' mg'],
    ['알레르기 유발 성분', item.allergy || s.allergy]
  ];
  document.getElementById('modal-nutrition').innerHTML =
    rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('');

  if (typeof $modal.showModal === 'function') $modal.showModal();
  else $modal.setAttribute('open', '');
}

function closeModal() {
  if (typeof $modal.close === 'function') $modal.close();
  else $modal.removeAttribute('open');
}

/* =========================================
   시작
   - 메뉴를 그리다가 예기치 않은 오류가 나면 빈 화면 대신
     오류 안내 페이지(404.html?error=menu)로 이동합니다.
   ========================================= */
function goErrorPage(err) {
  console.error('[menu] 오류가 발생해 오류 페이지로 이동합니다.', err);
  location.replace('404.html?error=menu');
}

try {
  $list.addEventListener('click', e => {
    const card = e.target.closest('.menu-card');
    if (!card) return;
    try { openModal(card.dataset.id); } catch (err) { goErrorPage(err); }
  });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  $modal.addEventListener('click', e => { if (e.target === $modal) closeModal(); }); // 바깥 클릭 시 닫기

  window.addEventListener('hashchange', () => {
    try { render(true); } catch (err) { goErrorPage(err); }
  });
  render(location.hash.length > 1);
} catch (err) {
  goErrorPage(err);
}
