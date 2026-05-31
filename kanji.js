const ROMA_TO_KO = {
  a: '아', i: '이', u: '우', e: '에', o: '오',
  ka: '카', ki: '키', ku: '쿠', ke: '케', ko: '코',
  sa: '사', shi: '시', su: '스', se: '세', so: '소',
  ta: '타', chi: '치', tsu: '츠', te: '테', to: '토',
  na: '나', ni: '니', nu: '누', ne: '네', no: '노',
  ha: '하', hi: '히', fu: '후', he: '헤', ho: '호',
  ma: '마', mi: '미', mu: '무', me: '메', mo: '모',
  ya: '야', yu: '유', yo: '요',
  ra: '라', ri: '리', ru: '루', re: '레', ro: '로',
  wa: '와', wo: '오', n: '응',
  ga: '가', gi: '기', gu: '구', ge: '게', go: '고',
  za: '자', ji: '지', zu: '즈', ze: '제', zo: '조',
  da: '다', di: '디', du: '두', de: '데', do: '도',
  ba: '바', bi: '비', bu: '부', be: '베', bo: '보',
  pa: '파', pi: '피', pu: '푸', pe: '페', po: '포',
  kya: '캬', kyu: '큐', kyo: '쿄',
  gya: '갸', gyu: '규', gyo: '교',
  sha: '샤', shu: '슈', sho: '쇼',
  ja: '자', ju: '주', jo: '조',
  cha: '차', chu: '추', cho: '초',
  nya: '냐', nyu: '뉴', nyo: '뇨',
  hya: '햐', hyu: '휴', hyo: '효',
  bya: '뱌', byu: '뷰', byo: '뵤',
  pya: '퍄', pyu: '퓨', pyo: '표',
  mya: '먀', myu: '뮤', myo: '묘',
  rya: '랴', ryu: '류', ryo: '료',
  fa: '파', fi: '피', fe: '페', fo: '포',
  va: '바', vi: '비', ve: '베', vo: '보'
};

const KANA_GROUPS = [
  ['아행', [['あ','ア','a'], ['い','イ','i'], ['う','ウ','u'], ['え','エ','e'], ['お','オ','o']]],
  ['카행', [['か','カ','ka'], ['き','キ','ki'], ['く','ク','ku'], ['け','ケ','ke'], ['こ','コ','ko']]],
  ['사행', [['さ','サ','sa'], ['し','シ','shi'], ['す','ス','su'], ['せ','セ','se'], ['そ','ソ','so']]],
  ['타행', [['た','タ','ta'], ['ち','チ','chi'], ['つ','ツ','tsu'], ['て','テ','te'], ['と','ト','to']]],
  ['나행', [['な','ナ','na'], ['に','ニ','ni'], ['ぬ','ヌ','nu'], ['ね','ネ','ne'], ['の','ノ','no']]],
  ['하행', [['は','ハ','ha'], ['ひ','ヒ','hi'], ['ふ','フ','fu'], ['へ','ヘ','he'], ['ほ','ホ','ho']]],
  ['마행', [['ま','マ','ma'], ['み','ミ','mi'], ['む','ム','mu'], ['め','メ','me'], ['も','モ','mo']]],
  ['야행', [['や','ヤ','ya'], ['ゆ','ユ','yu'], ['よ','ヨ','yo']]],
  ['라행', [['ら','ラ','ra'], ['り','リ','ri'], ['る','ル','ru'], ['れ','レ','re'], ['ろ','ロ','ro']]],
  ['와행', [['わ','ワ','wa'], ['を','ヲ','wo'], ['ん','ン','n']]],
  ['탁음', [['が','ガ','ga'], ['ぎ','ギ','gi'], ['ぐ','グ','gu'], ['げ','ゲ','ge'], ['ご','ゴ','go'], ['ざ','ザ','za'], ['じ','ジ','ji'], ['ず','ズ','zu'], ['ぜ','ゼ','ze'], ['ぞ','ゾ','zo'], ['だ','ダ','da'], ['ぢ','ヂ','di'], ['づ','ヅ','du'], ['で','デ','de'], ['ど','ド','do'], ['ば','バ','ba'], ['び','ビ','bi'], ['ぶ','ブ','bu'], ['べ','ベ','be'], ['ぼ','ボ','bo']]],
  ['반탁음', [['ぱ','パ','pa'], ['ぴ','ピ','pi'], ['ぷ','プ','pu'], ['ぺ','ペ','pe'], ['ぽ','ポ','po']]],
  ['요음', [['きゃ','キャ','kya'], ['きゅ','キュ','kyu'], ['きょ','キョ','kyo'], ['ぎゃ','ギャ','gya'], ['ぎゅ','ギュ','gyu'], ['ぎょ','ギョ','gyo'], ['しゃ','シャ','sha'], ['しゅ','シュ','shu'], ['しょ','ショ','sho'], ['じゃ','ジャ','ja'], ['じゅ','ジュ','ju'], ['じょ','ジョ','jo'], ['ちゃ','チャ','cha'], ['ちゅ','チュ','chu'], ['ちょ','チョ','cho'], ['にゃ','ニャ','nya'], ['にゅ','ニュ','nyu'], ['にょ','ニョ','nyo'], ['ひゃ','ヒャ','hya'], ['ひゅ','ヒュ','hyu'], ['ひょ','ヒョ','hyo'], ['びゃ','ビャ','bya'], ['びゅ','ビュ','byu'], ['びょ','ビョ','byo'], ['ぴゃ','ピャ','pya'], ['ぴゅ','ピュ','pyu'], ['ぴょ','ピョ','pyo'], ['みゃ','ミャ','mya'], ['みゅ','ミュ','myu'], ['みょ','ミョ','myo'], ['りゃ','リャ','rya'], ['りゅ','リュ','ryu'], ['りょ','リョ','ryo']]],
  ['외래음', [['ふぁ','ファ','fa'], ['ふぃ','フィ','fi'], ['ふぇ','フェ','fe'], ['ふぉ','フォ','fo'], ['ヴぁ','ヴァ','va'], ['ヴぃ','ヴィ','vi'], ['ヴぇ','ヴェ','ve'], ['ヴぉ','ヴォ','vo']]],
  ['작은 가나', [['ぁ','ァ','a'], ['ぃ','ィ','i'], ['ぅ','ゥ','u'], ['ぇ','ェ','e'], ['ぉ','ォ','o'], ['っ','ッ','tsu'], ['ゃ','ャ','ya'], ['ゅ','ュ','yu'], ['ょ','ョ','yo'], ['ゎ','ヮ','wa']]]
];

const STROKE_SHAPES = [
  [[22,30],[78,30]], [[50,12],[50,88]], [[72,24],[38,58],[66,88]],
  [[24,58],[78,58]], [[30,78],[72,78]], [[28,24],[42,48],[28,78]], [[70,20],[78,50],[60,82]]
];

const CATEGORIES = { 히라가나: [], 가타카나: [] };
let allKanji = [];
let selectedKanji = null;
let masteredSet = new Set(JSON.parse(localStorage.getItem('masteredKanji') || '[]'));
let favoriteSet = new Set(JSON.parse(localStorage.getItem('favoriteKanji') || '[]'));
let currentCategory = null;
let drawingCanvases = [];
let animStrokeIdx = 0;
let animTimer = null;
let animCtx = null;
let kanaExamScript = '히라가나';
let kanaExamCount = 20;
let kanaExamType = 'reading';
let kanaExamItems = [];

function strokesFor(char) {
  const count = Math.min(5, Math.max(2, Array.from(char).length + 1));
  return STROKE_SHAPES.slice(0, count).map(stroke => stroke.map(point => [...point]));
}

function kanaEntry(char, reading, script, group) {
  return { char, reading, meaning: `${ROMA_TO_KO[reading] || reading} · ${script}`, script, group, category: script, id: `${script}:${char}`, strokes: strokesFor(char) };
}

KANA_GROUPS.forEach(([group, rows]) => {
  rows.forEach(([hira, kata, reading]) => {
    CATEGORIES.히라가나.push(kanaEntry(hira, reading, '히라가나', group));
    CATEGORIES.가타카나.push(kanaEntry(kata, reading, '가타카나', group));
  });
});
Object.values(CATEGORIES).forEach(list => allKanji.push(...list));

function saveMastered() { localStorage.setItem('masteredKanji', JSON.stringify([...masteredSet])); }
function saveFavorite() { localStorage.setItem('favoriteKanji', JSON.stringify([...favoriteSet])); }
function updateProgress() { document.getElementById('progressInfo').textContent = `${masteredSet.size} / ${allKanji.length} 완료`; }

function buildTabs() {
  const tabs = document.getElementById('categoryTabs');
  tabs.innerHTML = '';
  [
    ['전체', null],
    ['즐겨찾기', 'FAVORITES'],
    ['완료', 'MASTERED'],
    ['시험지 생성', 'EXAM'],
    ...Object.keys(CATEGORIES).map(cat => [cat, cat])
  ].forEach(([label, value]) => {
    const btn = document.createElement('button');
    btn.className = 'tab' + ((value === currentCategory) || (!value && !currentCategory) ? ' active' : '');
    btn.textContent = label;
    btn.onclick = () => {
      if (value === 'EXAM') return renderKanaExamPage();
      currentCategory = value;
      selectedKanji = null;
      buildTabs();
      buildKanjiList();
      renderKanaEmpty();
    };
    tabs.appendChild(btn);
  });
}

function filteredKana() {
  if (currentCategory === 'FAVORITES') return allKanji.filter(k => favoriteSet.has(k.id));
  if (currentCategory === 'MASTERED') return allKanji.filter(k => masteredSet.has(k.id));
  return currentCategory ? allKanji.filter(k => k.category === currentCategory) : allKanji;
}

function buildKanjiList() {
  const list = document.getElementById('kanjiList');
  list.innerHTML = '';
  const items = filteredKana();
  if (!items.length) {
    list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--gray);font-size:0.9rem;">표시할 가나가 없습니다.</div>';
    return;
  }
  items.forEach(k => {
    const mastered = masteredSet.has(k.id);
    const isFavorite = favoriteSet.has(k.id);
    const card = document.createElement('div');
    card.className = 'kanji-card' + (selectedKanji && selectedKanji.id === k.id ? ' active' : '');
    card.innerHTML = `
      <button class="favorite-btn ${isFavorite ? 'active' : ''}" title="즐겨찾기">♥</button>
      <div class="kanji-char ${k.char.length > 1 ? 'multi' : ''}">
        ${k.char}${mastered ? '<span class="mastered-badge">✓</span>' : ''}
      </div>
      <div class="kanji-info">
        <div class="kanji-reading">${k.reading}</div>
        <div class="kanji-meaning">${k.meaning}</div>
        <div class="kanji-type">${k.group}</div>
      </div>`;
    const favBtn = card.querySelector('.favorite-btn');
    favBtn.style.color = isFavorite ? '#ec6f9a' : '#f4c9d8';
    favBtn.onclick = event => {
      event.stopPropagation();
      favoriteSet.has(k.id) ? favoriteSet.delete(k.id) : favoriteSet.add(k.id);
      saveFavorite();
      buildKanjiList();
    };
    card.onclick = () => selectKanji(k);
    list.appendChild(card);
  });
}

function renderKanaEmpty() {
  document.getElementById('practiceArea').innerHTML = `
    <div class="empty-state">
      <div class="big-char">あ</div>
      <div>왼쪽에서 가나를 선택하세요</div>
    </div>`;
}

function selectKanji(k) {
  selectedKanji = k;
  buildKanjiList();
  renderPractice();
}

function renderPractice() {
  const k = selectedKanji;
  const mastered = masteredSet.has(k.id);
  document.getElementById('practiceArea').innerHTML = `
    <div class="practice-top">
      <div class="info-panel">
        <div class="selected-kanji">${k.char}</div>
        <div class="selected-reading">${k.reading}</div>
        <div class="selected-meaning">${k.meaning}</div>
        <br>${mastered ? '<div class="mastered-indicator">✓ 완료!</div>' : ''}
      </div>
      <div class="stroke-panel">
        <h3>획순 미리보기</h3>
        <div class="stroke-order-display" id="strokeSteps"></div>
      </div>
    </div>
    <div class="writing-section">
      <div class="writing-label">
        <span>4번 따라쓰기</span>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn btn-gold" onclick="openAnimate()">획순 애니메이션</button>
          <button class="btn btn-green" onclick="markMastered()">완료!</button>
          <button class="btn btn-outline" onclick="clearAll()">모두 지우기</button>
        </div>
      </div>
      <div class="writing-container" id="writingContainer"></div>
    </div>`;
  buildStrokeSteps();
  buildWritingBoxes();
}

function drawStroke(ctx, stroke, scale, active) {
  ctx.beginPath();
  ctx.strokeStyle = active ? '#ec6f9a' : '#f4c9d8';
  ctx.lineWidth = active ? 3 : 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.moveTo(scale(stroke[0][0]), scale(stroke[0][1]));
  stroke.slice(1).forEach(point => ctx.lineTo(scale(point[0]), scale(point[1])));
  ctx.stroke();
}

function buildStrokeSteps() {
  const container = document.getElementById('strokeSteps');
  selectedKanji.strokes.forEach((stroke, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'stroke-step';
    const canvas = document.createElement('canvas');
    canvas.width = 60;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');
    selectedKanji.strokes.slice(0, i + 1).forEach((s, j) => drawStroke(ctx, s, v => v * 0.6, j === i));
    const num = document.createElement('div');
    num.className = 'stroke-num';
    num.textContent = `${i + 1}획`;
    wrap.append(canvas, num);
    container.appendChild(wrap);
  });
}

function buildWritingBoxes() {
  const container = document.getElementById('writingContainer');
  drawingCanvases = [];
  for (let i = 0; i < 4; i++) {
    const box = document.createElement('div');
    box.className = 'write-box';
    box.innerHTML = `
      <svg class="guide-lines" width="100%" height="100%">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#f4c9d8" stroke-width="1" stroke-dasharray="4,4"/>
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#f4c9d8" stroke-width="1" stroke-dasharray="4,4"/>
      </svg>
      <div class="guide"><div class="guide-char">${selectedKanji.char}</div></div>
      <canvas width="200" height="200"></canvas>
      <div class="write-box-num">${i + 1}</div>
      <button class="clear-btn">지우기</button>`;
    const canvas = box.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#4a142b';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    bindDraw(canvas, ctx);
    box.querySelector('.clear-btn').onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
    container.appendChild(box);
    drawingCanvases.push({ canvas, ctx });
  }
}

function bindDraw(canvas, ctx) {
  let drawing = false;
  const pos = e => {
    const rect = canvas.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    return { x: (point.clientX - rect.left) * canvas.width / rect.width, y: (point.clientY - rect.top) * canvas.height / rect.height };
  };
  const start = e => { drawing = true; const p = pos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); };
  const move = e => { if (!drawing) return; e.preventDefault(); const p = pos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(p.x, p.y); };
  const stop = () => { drawing = false; };
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup', stop);
  canvas.addEventListener('mouseleave', stop);
  canvas.addEventListener('touchstart', start, { passive: false });
  canvas.addEventListener('touchmove', move, { passive: false });
  canvas.addEventListener('touchend', stop);
}

function clearAll() { drawingCanvases.forEach(({ ctx, canvas }) => ctx.clearRect(0, 0, canvas.width, canvas.height)); }
function markMastered() { if (!selectedKanji) return; masteredSet.add(selectedKanji.id); saveMastered(); updateProgress(); buildKanjiList(); renderPractice(); }

function openAnimate() {
  if (!selectedKanji) return;
  document.getElementById('animateOverlay').classList.add('show');
  document.getElementById('animateKanjiChar').textContent = selectedKanji.char;
  document.getElementById('animateGuide').textContent = selectedKanji.char;
  animCtx = document.getElementById('animateCanvas').getContext('2d');
  animStrokeIdx = 0;
  renderAnimFrame();
}
function closeAnimate() { document.getElementById('animateOverlay').classList.remove('show'); if (animTimer) clearTimeout(animTimer); }
function renderAnimFrame() {
  const canvas = document.getElementById('animateCanvas');
  animCtx.clearRect(0, 0, canvas.width, canvas.height);
  selectedKanji.strokes.slice(0, animStrokeIdx + 1).forEach((s, i) => drawStroke(animCtx, s, v => v * 2.2, i === animStrokeIdx));
  document.getElementById('strokeCounter').textContent = `획 ${Math.min(animStrokeIdx + 1, selectedKanji.strokes.length)} / ${selectedKanji.strokes.length}`;
}
function nextStroke() { if (selectedKanji && animStrokeIdx < selectedKanji.strokes.length - 1) { animStrokeIdx++; renderAnimFrame(); } }
function prevStroke() { if (animStrokeIdx > 0) { animStrokeIdx--; renderAnimFrame(); } }
function playAnimation() {
  if (!selectedKanji) return;
  animStrokeIdx = 0;
  if (animTimer) clearTimeout(animTimer);
  const step = () => {
    renderAnimFrame();
    if (animStrokeIdx < selectedKanji.strokes.length - 1) {
      animStrokeIdx++;
      animTimer = setTimeout(step, 700);
    }
  };
  step();
}

function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function buildKanaExamItems() { kanaExamItems = shuffle(CATEGORIES[kanaExamScript]).slice(0, Math.min(kanaExamCount, CATEGORIES[kanaExamScript].length)); }
function kanaExamTypeLabel() { return ({ reading: '읽기 쓰기', sound: '소리 보고 가나 쓰기', mixed: '혼합' })[kanaExamType]; }
function kanaQuestionFor(k, index) {
  if (kanaExamType === 'sound') return `<strong>${ROMA_TO_KO[k.reading]}</strong><small>${k.reading}</small>`;
  if (kanaExamType === 'mixed' && index % 2) return `<strong>${k.reading}</strong><small>${ROMA_TO_KO[k.reading]}</small>`;
  return `<span class="exam-question">${k.char}</span><small>${k.group}</small>`;
}
function renderKanaExamPage() {
  buildKanaExamItems();
  document.getElementById('progressInfo').textContent = `${kanaExamItems.length}문항 생성`;
  document.getElementById('kanjiList').innerHTML = '<div class="exam-side-note"><strong>가나 시험지 생성</strong><span>설정을 바꾸면 미리보기가 바로 갱신됩니다.</span></div>';
  document.getElementById('practiceArea').innerHTML = `
    <div class="exam-layout">
      <div>
        <div class="exam-card">
          <div class="exam-title">출제 범위</div>
          <div class="chapter-pills">${Object.keys(CATEGORIES).map(script => `<button class="chapter-pill ${kanaExamScript === script ? 'active' : ''}" data-kana-script="${script}">${script}</button>`).join('')}</div>
        </div>
        <div class="exam-card">
          <div class="exam-title">출제 설정</div>
          <div class="exam-stepper"><span>문제 수</span><div class="stepper-controls"><button class="round-btn" id="kanaExamMinus">−</button><span>${kanaExamCount}</span><button class="round-btn" id="kanaExamPlus">＋</button></div></div>
          <div class="exam-title">문제 유형</div>
          <div class="exam-type-grid">
            <button class="exam-type ${kanaExamType === 'reading' ? 'active' : ''}" data-kana-type="reading">읽기<small>가나 보고 읽기 쓰기</small></button>
            <button class="exam-type ${kanaExamType === 'sound' ? 'active' : ''}" data-kana-type="sound">가나 쓰기<small>소리 보고 가나 쓰기</small></button>
            <button class="exam-type ${kanaExamType === 'mixed' ? 'active' : ''}" data-kana-type="mixed">혼합<small>유형 섞기</small></button>
          </div>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:22px" id="makeKanaExamBtn">시험지 생성하기</button>
      </div>
      <div>
        <div class="exam-summary">
          <div class="summary-box">선택 문자<strong>${kanaExamScript}</strong></div>
          <div class="summary-box">출제 가능<strong>${CATEGORIES[kanaExamScript].length}개</strong></div>
          <div class="summary-box">문제 수<strong>${kanaExamItems.length}문항</strong></div>
        </div>
        <div class="preview-sheet">
          <div class="exam-title">미리보기</div>
          <h2>일본어 가나 시험</h2>
          <div class="preview-meta">${kanaExamScript} · ${kanaExamTypeLabel()} · ${kanaExamItems.length}문항</div>
          <ol class="exam-list">${kanaExamItems.slice(0, 10).map((k, index) => `<li><div>${kanaQuestionFor(k, index)}</div><div class="exam-answer-line"></div></li>`).join('')}</ol>
        </div>
        <div class="exam-actions"><button class="btn btn-outline" onclick="window.print()">인쇄하기</button><button class="btn btn-outline" onclick="window.print()">PDF 저장</button></div>
      </div>
    </div>`;
  bindKanaExamControls();
}
function bindKanaExamControls() {
  document.querySelectorAll('[data-kana-script]').forEach(btn => btn.onclick = () => { kanaExamScript = btn.dataset.kanaScript; renderKanaExamPage(); });
  document.querySelectorAll('[data-kana-type]').forEach(btn => btn.onclick = () => { kanaExamType = btn.dataset.kanaType; renderKanaExamPage(); });
  document.getElementById('kanaExamMinus').onclick = () => { kanaExamCount = Math.max(5, kanaExamCount - 5); renderKanaExamPage(); };
  document.getElementById('kanaExamPlus').onclick = () => { kanaExamCount = Math.min(100, kanaExamCount + 5); renderKanaExamPage(); };
  document.getElementById('makeKanaExamBtn').onclick = renderKanaExamPage;
}

buildTabs();
buildKanjiList();
updateProgress();
