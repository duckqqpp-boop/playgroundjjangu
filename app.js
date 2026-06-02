/* ====================================================
   당신의 공원은? - app.js
   ==================================================== */

'use strict';

// ──────────────────────────────────────────────
// 1. 데이터
// ──────────────────────────────────────────────

const PARKS = {
  '말엉덩이 공원': {
    emoji: '🍑',
    desc: '섹시하고 주변에 이성들이 많이 꼬이는 유혹적인 사람. 당신이 걸어가면 사람들이 고개를 돌린다.'
  },
  '라면 나왔어요 공원': {
    emoji: '🍜',
    desc: '당돌하고 목소리가 크며 사교적이고 당찬 사람. 어딜 가도 존재감 만렙.'
  },
  '대왕쥐며느리 공원': {
    emoji: '🐛',
    desc: '호기심이 많으며 크고 단단한 외강내유 스타일. 겉은 강철, 속은 솜사탕.'
  },
  '팔 꺾어 삼각조르기 공원': {
    emoji: '💪',
    desc: '승부욕이 강하며 늦은 밤 골목에서 급습 당해도 두 발로 집으로 올라올 사람. 건드리지 마세요.'
  },
  '초콜릿 복근의 돌고래 공원': {
    emoji: '🐬',
    desc: '운동을 평소에 많이 하며 복식호흡이 좋아 돌고래의 주파수처럼 유리잔을 깨버릴 수 있는 사람.'
  },
  '오늘은 제가 내겠습니다 아닙니다 김 사장님 오늘은 제가 낼게요 공원': {
    emoji: '💳',
    desc: '배려심이 많으며 사회생활을 잘하고 마음에도 없는 말을 할 수 있는 사람. 계산서 앞에서 빛이 납니다.'
  },
  '엄마한테혼나는 공원': {
    emoji: '😱',
    desc: '모험적이며 혼날 것을 알고도 하는 사람. 다음번에도 혼날 예정이지만 그게 인생.'
  },
  '숙제는내일할게 공원': {
    emoji: '📚',
    desc: '느긋하며 내일의 나는 무엇이든 할 수 있는 슈퍼맨이라고 착각하는 사람. 내일의 나야, 화이팅.'
  },
  '떡볶이냄새나는 공원': {
    emoji: '🌶️',
    desc: '인스타 알고리즘에 엽떡과 마라탕이 가득하며 도파민에 절여져 있는 사람. 맵부심 MAX.'
  },
  '용돈증발 공원': {
    emoji: '💸',
    desc: '돈이 나가야 들어오는 것을 알고 있는 사람. 지갑엔 항상 5만원 이하지만 취미생활은 포기 못 해.'
  },
  '집가기싫은 공원': {
    emoji: '🏃',
    desc: '외향적이며 이 사람과 한번 놀고 집에 가면 진이 빠진다. 감당할 수 없는 텐션의 소유자.'
  },
  '엉덩이탐험대 공원': {
    emoji: '🍑',
    desc: '모험적이며 엉덩이를 좋아하고 말랑한 것을 좋아하는 사람. 세상 모든 푹신한 것들의 친구.'
  },
  '초코비 공원': {
    emoji: '🍫',
    desc: '작은 행복에도 만족하며 초코비 하나만 있어도 행복할 수 있는 순수한 사람. 세상에서 제일 귀여움.'
  },
  '흰둥이 산책 공원': {
    emoji: '🐶',
    desc: '귀차니즘을 이기고 밖을 나와서 흰둥이와 산책을 완수함. 무엇이든지 해낼 수 있는 의지의 인간.'
  },
  '유치원 탈출 공원': {
    emoji: '🏃‍♂️',
    desc: '도전적이며 결과 중심이 아니라 경험 중심으로 모든 것을 시작해보는 사람. 울타리는 넘으라고 있는 것.'
  }
};

const QUESTIONS = [
  {
    text: '용돈 5만원이 생겼다.',
    a: { text: '바로 써버린다.', park: '용돈증발 공원' },
    b: { text: '간식부터 산다.', park: '초코비 공원' }
  },
  {
    text: '친구들이 갑자기 놀자고 한다.',
    a: { text: '당장 나간다.', park: '집가기싫은 공원' },
    b: { text: '귀찮지만 나간다.', park: '흰둥이 산책 공원' }
  },
  {
    text: '하지 말라고 한 일이 있다.',
    a: { text: '일단 해본다.', park: '엄마한테혼나는 공원' },
    b: { text: '새로운 방법으로 해본다.', park: '유치원 탈출 공원' }
  },
  {
    text: 'SNS 알고리즘은?',
    a: { text: '엽떡, 마라탕', park: '떡볶이냄새나는 공원' },
    b: { text: '헬스, 운동', park: '초콜릿 복근의 돌고래 공원' }
  },
  {
    text: '처음 보는 사람들과 있다.',
    a: { text: '먼저 말을 건다.', park: '라면 나왔어요 공원' },
    b: { text: '매력으로 존재감 발산', park: '말엉덩이 공원' }
  },
  {
    text: '이상한 벌레를 발견했다.',
    a: { text: '가까이 가서 관찰한다.', park: '대왕쥐며느리 공원' },
    b: { text: '잡아서 친구 보여준다.', park: '엉덩이탐험대 공원' }
  },
  {
    text: '친구와 게임한다.',
    a: { text: '무조건 이긴다.', park: '팔 꺾어 삼각조르기 공원' },
    b: { text: '재밌으면 된다.', park: '초코비 공원' }
  },
  {
    text: '밥 먹고 계산할 때',
    a: { text: '제가 낼게요!', park: '오늘은 제가 내겠습니다 아닙니다 김 사장님 오늘은 제가 낼게요 공원' },
    b: { text: '감사합니다 😎', park: '용돈증발 공원' }
  },
  {
    text: '주말에 시간이 남았다.',
    a: { text: '안 가본 곳 탐험', park: '유치원 탈출 공원' },
    b: { text: '친구들과 놀기', park: '집가기싫은 공원' }
  },
  {
    text: '푹신한 인형을 보면',
    a: { text: '만져본다.', park: '엉덩이탐험대 공원' },
    b: { text: '운동하러 간다.', park: '초콜릿 복근의 돌고래 공원' }
  },
  {
    text: '거울을 봤는데 오늘 잘 나왔다.',
    a: { text: '셀카 찍는다.', park: '말엉덩이 공원' },
    b: { text: '친구들한테 보여준다.', park: '라면 나왔어요 공원' }
  },
  {
    text: '해야 할 숙제가 있다.',
    a: { text: '내일의 나를 믿는다.', park: '숙제는내일할게 공원' },
    b: { text: '지금 끝낸다.', park: '흰둥이 산책 공원' }
  },
  {
    text: '새로운 취미가 생겼다.',
    a: { text: '일단 해본다.', park: '유치원 탈출 공원' },
    b: { text: '정보부터 찾아본다.', park: '대왕쥐며느리 공원' }
  },
  {
    text: '친구가 힘들다고 한다.',
    a: { text: '위로해준다.', park: '오늘은 제가 내겠습니다 아닙니다 김 사장님 오늘은 제가 낼게요 공원' },
    b: { text: '같이 놀러간다.', park: '집가기싫은 공원' }
  },
  {
    text: '내일 시험인데',
    a: { text: '오늘 논다.', park: '숙제는내일할게 공원' },
    b: { text: '밤새서 공부한다.', park: '팔 꺾어 삼각조르기 공원' }
  }
];

const LOADING_MSGS = [
  '당신의 공원을 찾는 중이에요...',
  '짱구한테 물어보는 중...',
  '흰둥이가 냄새 맡는 중... 🐶',
  '초코비 먹으면서 분석 중...',
  '거의 다 됐어요! 조금만요...'
];

const STORAGE_KEY = 'park_test_result_v1';

// ──────────────────────────────────────────────
// 2. 상태
// ──────────────────────────────────────────────
let currentQ = 0;
let scores = {};

// ──────────────────────────────────────────────
// 3. DOM 헬퍼
// ──────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const screens = {
  start:   $('screen-start'),
  quiz:    $('screen-quiz'),
  loading: $('screen-loading'),
  result:  $('screen-result')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ──────────────────────────────────────────────
// 4. 시작 화면 초기화
// ──────────────────────────────────────────────
function initStartScreen() {
  const saved = loadResult();
  if (saved) {
    $('prev-result-box').style.display = 'block';
    $('prev-result-name').textContent = saved.park;
    $('btn-show-prev').onclick = () => renderResult(saved.park);
  }
}

// ──────────────────────────────────────────────
// 5. 퀴즈 시작
// ──────────────────────────────────────────────
function startQuiz() {
  currentQ = 0;
  scores = {};
  Object.keys(PARKS).forEach(k => { scores[k] = 0; });
  showScreen('quiz');
  renderQuestion();
}

// ──────────────────────────────────────────────
// 6. 질문 렌더링
// ──────────────────────────────────────────────
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const num = currentQ + 1;

  $('q-num').textContent = num;
  $('q-label-num').textContent = num;
  $('progress-bar').style.width = ((currentQ / 15) * 100) + '%';

  $('question-text').textContent = q.text;
  $('choice-a-text').textContent = q.a.text;
  $('choice-b-text').textContent = q.b.text;

  // 카드 재애니메이션
  const card = $('question-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';

  const btnA = $('choice-a');
  const btnB = $('choice-b');
  btnA.classList.remove('selected-a', 'selected-b', 'faded');
  btnB.classList.remove('selected-a', 'selected-b', 'faded');
  btnA.disabled = false;
  btnB.disabled = false;
}

// ──────────────────────────────────────────────
// 7. 선택 처리
// ──────────────────────────────────────────────
function handleChoice(choice) {
  const q = QUESTIONS[currentQ];
  const park = choice === 'a' ? q.a.park : q.b.park;
  scores[park] = (scores[park] || 0) + 1;

  const btnA = $('choice-a');
  const btnB = $('choice-b');
  if (choice === 'a') {
    btnA.classList.add('selected-a');
    btnB.classList.add('faded');
  } else {
    btnB.classList.add('selected-b');
    btnA.classList.add('faded');
  }
  btnA.disabled = true;
  btnB.disabled = true;

  setTimeout(() => {
    currentQ++;
    if (currentQ < QUESTIONS.length) {
      renderQuestion();
    } else {
      showLoadingAndResult();
    }
  }, 400);
}

// ──────────────────────────────────────────────
// 8. 로딩 → 결과
// ──────────────────────────────────────────────
function showLoadingAndResult() {
  showScreen('loading');

  let msgIdx = 0;
  const msgEl = $('loading-msg');
  const msgInterval = setInterval(() => {
    msgIdx = (msgIdx + 1) % LOADING_MSGS.length;
    msgEl.style.opacity = '0';
    setTimeout(() => {
      msgEl.textContent = LOADING_MSGS[msgIdx];
      msgEl.style.opacity = '1';
    }, 200);
  }, 700);

  setTimeout(() => {
    clearInterval(msgInterval);
    const park = calcResult();
    saveResult(park);
    renderResult(park);
  }, 2800);
}

// ──────────────────────────────────────────────
// 9. 점수 계산
// ──────────────────────────────────────────────
function calcResult() {
  let maxScore = -1;
  let winners = [];
  for (const [park, score] of Object.entries(scores)) {
    if (score > maxScore) { maxScore = score; winners = [park]; }
    else if (score === maxScore) { winners.push(park); }
  }
  return winners[Math.floor(Math.random() * winners.length)];
}

// ──────────────────────────────────────────────
// 10. 결과 렌더링
// ──────────────────────────────────────────────
function renderResult(park) {
  const data = PARKS[park];
  $('result-park-name').textContent = park;
  $('result-desc').textContent = data.desc;
  $('result-emoji').textContent = data.emoji;
  showScreen('result');
  launchConfetti();
}

// ──────────────────────────────────────────────
// 11. 콘페티
// ──────────────────────────────────────────────
const CONFETTI_COLORS = ['#FFE234','#E53935','#FF6D00','#3CB371','#1565C0','#FF4081','#FFCBA4'];

function launchConfetti() {
  const area = $('confetti-area');
  area.innerHTML = '';
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.8}s;
      transform: rotate(${Math.random() * 360}deg);
    `;
    area.appendChild(p);
  }
  setTimeout(() => { area.innerHTML = ''; }, 4000);
}

// ──────────────────────────────────────────────
// 12. 공유
// ──────────────────────────────────────────────
function shareResult() {
  const park = $('result-park-name').textContent;
  const text = `나의 공원은 '${park}'! 🌳 당신의 공원은 뭐예요?\n`;
  const url = window.location.href.split('?')[0];
  const shareText = text + url;

  if (navigator.share) {
    navigator.share({ title: '당신의 공원은?', text: shareText, url })
      .catch(() => copyToClipboard(shareText));
  } else {
    copyToClipboard(shareText);
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(showToast).catch(() => legacyCopy(text));
  } else {
    legacyCopy(text);
  }
}

function legacyCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showToast(); } catch(e) {}
  document.body.removeChild(ta);
}

function showToast() {
  const toast = $('share-toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ──────────────────────────────────────────────
// 13. localStorage
// ──────────────────────────────────────────────
function saveResult(park) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ park, date: Date.now() }));
  } catch(e) {}
}

function loadResult() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

// ──────────────────────────────────────────────
// 14. 이벤트 바인딩
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initStartScreen();

  $('btn-start').addEventListener('click', startQuiz);

  $('choice-a').addEventListener('click', () => handleChoice('a'));
  $('choice-b').addEventListener('click', () => handleChoice('b'));

  $('btn-restart-quiz').addEventListener('click', () => {
    if (confirm('처음으로 돌아갈까요?')) showScreen('start');
  });

  $('btn-share').addEventListener('click', shareResult);

  $('btn-retry').addEventListener('click', () => {
    showScreen('start');
    initStartScreen();
  });
});
