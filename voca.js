const VOCAB_CATEGORIES = {
  '3과': [
    { word: 'あなた', reading: 'あなた', romaji: 'anata', meaning: '당신' },
    { word: 'いいえ', reading: 'いいえ', romaji: 'iie', meaning: '아니요' },
    { word: 'イギリス人', reading: 'イギリスじん', romaji: 'igirisu-jin', meaning: '영국인' },
    { word: '医者', reading: 'いしゃ', romaji: 'isha', meaning: '의사' },
    { word: '会員', reading: 'かいいん', romaji: 'kaiin', meaning: '회원' },
    { word: '会社', reading: 'かいしゃ', romaji: 'kaisha', meaning: '회사' },
    { word: '会社員', reading: 'かいしゃいん', romaji: 'kaishain', meaning: '회사원' },
    { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: '학생' },
    { word: '彼女', reading: 'かのじょ', romaji: 'kanojo', meaning: '그녀' },
    { word: '彼', reading: 'かれ', romaji: 'kare', meaning: '그, 남자친구' },
    { word: '韓国人', reading: 'かんこくじん', romaji: 'kankoku-jin', meaning: '한국인' },
    { word: '君', reading: 'きみ', romaji: 'kimi', meaning: '너' },
    { word: '銀行員', reading: 'ぎんこういん', romaji: 'ginkouin', meaning: '은행원' },
    { word: '軍人', reading: 'ぐんじん', romaji: 'gunjin', meaning: '군인' },
    { word: 'こちら', reading: 'こちら', romaji: 'kochira', meaning: '이쪽, 이분' },
    { word: 'こちらこそ', reading: 'こちらこそ', romaji: 'kochira koso', meaning: '저야말로' },
    { word: '-さん', reading: '-さん', romaji: '-san', meaning: '~씨' },
    { word: '社員', reading: 'しゃいん', romaji: 'shain', meaning: '사원' },
    { word: '社会', reading: 'しゃかい', romaji: 'shakai', meaning: '사회' },
    { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: '선생님' },
    { word: '大学生', reading: 'だいがくせい', romaji: 'daigakusei', meaning: '대학생' },
    { word: '誰', reading: 'だれ', romaji: 'dare', meaning: '누구' },
    { word: '中国人', reading: 'ちゅうごくじん', romaji: 'chuugoku-jin', meaning: '중국인' },
    { word: '-ではありません', reading: '-ではありません', romaji: '-de wa arimasen', meaning: '~가 아닙니다' },
    { word: 'ドイツ人', reading: 'ドイツじん', romaji: 'doitsu-jin', meaning: '독일인' },
    { word: 'どうぞよろしくお願いします', reading: 'どうぞよろしくおねがいします', romaji: 'douzo yoroshiku onegai shimasu', meaning: '잘 부탁합니다' },
    { word: '日本人', reading: 'にほんじん', romaji: 'nihon-jin', meaning: '일본인' },
    { word: 'はじめまして', reading: 'はじめまして', romaji: 'hajimemashite', meaning: '처음 뵙겠습니다' },
    { word: 'フランス人', reading: 'フランスじん', romaji: 'furansu-jin', meaning: '프랑스인' },
    { word: '私', reading: 'わたし', romaji: 'watashi', meaning: '나, 저' }
  ],
  '4과': [
    { word: 'あの', reading: 'あの', romaji: 'ano', meaning: '저' },
    { word: 'あれ', reading: 'あれ', romaji: 'are', meaning: '저것' },
    { word: '椅子', reading: 'いす', romaji: 'isu', meaning: '의자' },
    { word: '傘', reading: 'かさ', romaji: 'kasa', meaning: '우산' },
    { word: '韓国語', reading: 'かんこくご', romaji: 'kankoku-go', meaning: '한국어' },
    { word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: '신발, 구두' },
    { word: 'この', reading: 'この', romaji: 'kono', meaning: '이' },
    { word: 'これ', reading: 'これ', romaji: 'kore', meaning: '이것' },
    { word: '雑誌', reading: 'ざっし', romaji: 'zasshi', meaning: '잡지' },
    { word: '辞書', reading: 'じしょ', romaji: 'jisho', meaning: '사전' },
    { word: '新聞', reading: 'しんぶん', romaji: 'shinbun', meaning: '신문' },
    { word: 'その', reading: 'その', romaji: 'sono', meaning: '그' },
    { word: 'それ', reading: 'それ', romaji: 'sore', meaning: '그것' },
    { word: '机', reading: 'つくえ', romaji: 'tsukue', meaning: '책상' },
    { word: 'デジカメ', reading: 'デジカメ', romaji: 'dejikame', meaning: '디지털카메라' },
    { word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: '전화' },
    { word: '-と', reading: '-と', romaji: '-to', meaning: '~와/과' },
    { word: '時計', reading: 'とけい', romaji: 'tokei', meaning: '시계' },
    { word: 'どの', reading: 'どの', romaji: 'dono', meaning: '어느' },
    { word: '友達', reading: 'ともだち', romaji: 'tomodachi', meaning: '친구' },
    { word: 'どれ', reading: 'どれ', romaji: 'dore', meaning: '어느 것' },
    { word: '何ですか', reading: 'なんですか', romaji: 'nan desu ka', meaning: '무엇입니까?' },
    { word: '日本語', reading: 'にほんご', romaji: 'nihon-go', meaning: '일본어' },
    { word: '人', reading: 'ひと', romaji: 'hito', meaning: '사람' },
    { word: '二人', reading: 'ふたり', romaji: 'futari', meaning: '두 명' },
    { word: '本', reading: 'ほん', romaji: 'hon', meaning: '책' },
    { word: '本社', reading: 'ほんしゃ', romaji: 'honsha', meaning: '본사' },
    { word: '本物', reading: 'ほんもの', romaji: 'honmono', meaning: '진품' },
    { word: '眼鏡', reading: 'めがね', romaji: 'megane', meaning: '안경' },
    { word: '-よ', reading: '-よ', romaji: '-yo', meaning: '~요' },
    { word: '物', reading: 'もの', romaji: 'mono', meaning: '물건' }
  ],
  '5과': [
    { word: '明日', reading: 'あした', romaji: 'ashita', meaning: '내일' },
    { word: '後', reading: 'あと', romaji: 'ato', meaning: '뒤, 나중' },
    { word: 'あります', reading: 'あります', romaji: 'arimasu', meaning: '있습니다' },
    { word: 'うち', reading: 'うち', romaji: 'uchi', meaning: '우리 집' },
    { word: '映画', reading: 'えいが', romaji: 'eiga', meaning: '영화' },
    { word: 'お久しぶりです', reading: 'おひさしぶりです', romaji: 'ohisashiburi desu', meaning: '오래간만입니다' },
    { word: '-が', reading: '-が', romaji: '-ga', meaning: '~이/가' },
    { word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: '회의' },
    { word: '学校', reading: 'がっこう', romaji: 'gakkou', meaning: '학교' },
    { word: '-から -まで', reading: '-から -まで', romaji: '-kara -made', meaning: '~부터 ~까지' },
    { word: '銀行', reading: 'ぎんこう', romaji: 'ginkou', meaning: '은행' },
    { word: '午後', reading: 'ごご', romaji: 'gogo', meaning: '오후' },
    { word: '午前', reading: 'ごぜん', romaji: 'gozen', meaning: '오전' },
    { word: '小学生', reading: 'しょうがくせい', romaji: 'shougakusei', meaning: '초등학생' },
    { word: '食事', reading: 'しょくじ', romaji: 'shokuji', meaning: '식사' },
    { word: 'スーパー', reading: 'スーパー', romaji: 'suupaa', meaning: '슈퍼마켓' },
    { word: '近く', reading: 'ちかく', romaji: 'chikaku', meaning: '근처' },
    { word: '中学生', reading: 'ちゅうがくせい', romaji: 'chuugakusei', meaning: '중학생' },
    { word: 'テスト', reading: 'テスト', romaji: 'tesuto', meaning: '시험' },
    { word: '何時', reading: 'なんじ', romaji: 'nanji', meaning: '몇 시' },
    { word: '半', reading: 'はん', romaji: 'han', meaning: '반' },
    { word: '前', reading: 'まえ', romaji: 'mae', meaning: '앞, 전' },
    { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: '약속' },
    { word: '郵便局', reading: 'ゆうびんきょく', romaji: 'yuubinkyoku', meaning: '우체국' }
  ],
  '6과': [
    { word: 'あさって', reading: 'あさって', romaji: 'asatte', meaning: '모레' },
    { word: 'いつ', reading: 'いつ', romaji: 'itsu', meaning: '언제' },
    { word: 'おめでとうございます', reading: 'おめでとうございます', romaji: 'omedetou gozaimasu', meaning: '축하합니다' },
    { word: '火曜日', reading: 'かようび', romaji: 'kayoubi', meaning: '화요일' },
    { word: '昨日', reading: 'きのう', romaji: 'kinou', meaning: '어제' },
    { word: '今日', reading: 'きょう', romaji: 'kyou', meaning: '오늘' },
    { word: '金曜日', reading: 'きんようび', romaji: 'kinyoubi', meaning: '금요일' },
    { word: '月曜日', reading: 'げつようび', romaji: 'getsuyoubi', meaning: '월요일' },
    { word: '子供の日', reading: 'こどものひ', romaji: 'kodomo no hi', meaning: '어린이날' },
    { word: 'コンサート', reading: 'コンサート', romaji: 'konsaato', meaning: '콘서트' },
    { word: '今週', reading: 'こんしゅう', romaji: 'konshuu', meaning: '이번 주' },
    { word: '作文', reading: 'さくぶん', romaji: 'sakubun', meaning: '작문' },
    { word: '趣味', reading: 'しゅみ', romaji: 'shumi', meaning: '취미' },
    { word: '水泳', reading: 'すいえい', romaji: 'suiei', meaning: '수영' },
    { word: '水曜日', reading: 'すいようび', romaji: 'suiyoubi', meaning: '수요일' },
    { word: '先週', reading: 'せんしゅう', romaji: 'senshuu', meaning: '지난주' },
    { word: 'そうですか', reading: 'そうですか', romaji: 'sou desu ka', meaning: '그렇습니까?' },
    { word: '大学', reading: 'だいがく', romaji: 'daigaku', meaning: '대학' },
    { word: '誕生日', reading: 'たんじょうび', romaji: 'tanjoubi', meaning: '생일' },
    { word: '-でした', reading: '-でした', romaji: '-deshita', meaning: '~였습니다' },
    { word: 'テニス', reading: 'テニス', romaji: 'tenisu', meaning: '테니스' },
    { word: '土曜日', reading: 'どようび', romaji: 'doyoubi', meaning: '토요일' }
  ]
};

let currentChapter = '3과';
let selectedVoca = null;
let drawingCanvases = [];
let favoriteVocaSet = new Set(JSON.parse(localStorage.getItem('favoriteVoca') || '[]'));
let examMode = 'single';
let examType = 'meaning';
let examCount = 20;
let examChapters = new Set(['3과', '4과']);
let examItems = [];

function vocaId(v, chapter = v.chapter || currentChapter) { return `${chapter}:${v.word}:${v.reading}`; }
function saveFavoriteVoca() { localStorage.setItem('favoriteVoca', JSON.stringify([...favoriteVocaSet])); }
function vocabWithChapter(chapter) { return (VOCAB_CATEGORIES[chapter] || []).map(v => ({ ...v, chapter, id: vocaId(v, chapter) })); }
function allVocabs() { return Object.keys(VOCAB_CATEGORIES).flatMap(chapter => vocabWithChapter(chapter)); }

function buildVocaTabs() {
  const tabs = document.getElementById('categoryTabs');
  tabs.innerHTML = '';
  [['전체', '전체'], ['시험지 생성', 'EXAM'], ...Object.keys(VOCAB_CATEGORIES).map(ch => [ch, ch])].forEach(([label, value]) => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (value === currentChapter ? ' active' : '');
    btn.textContent = label;
    btn.onclick = () => {
      if (value === 'EXAM') return renderVocaExamPage();
      currentChapter = value;
      selectedVoca = null;
      buildVocaTabs();
      buildVocaList();
      renderVocaEmpty();
    };
    tabs.appendChild(btn);
  });
}

function currentVocabs() { return currentChapter === '전체' ? allVocabs() : vocabWithChapter(currentChapter); }

function buildVocaList() {
  const list = document.getElementById('vocabList');
  const vocabs = currentVocabs();
  list.innerHTML = '';
  document.getElementById('progressInfo').textContent = `${currentChapter} / ${vocabs.length}개`;
  vocabs.forEach(v => {
    const isFavorite = favoriteVocaSet.has(v.id);
    const card = document.createElement('div');
    card.className = 'kanji-card' + (selectedVoca && selectedVoca.id === v.id ? ' active' : '');
    card.innerHTML = `
      <button class="favorite-btn ${isFavorite ? 'active' : ''}" title="즐겨찾기">♥</button>
      <div class="kanji-char">${v.word}</div>
      <div class="kanji-info">
        <div class="kanji-reading">${v.reading}</div>
        <div class="kanji-meaning">${v.meaning}</div>
        <div class="kanji-type">${v.chapter} · ${v.romaji}</div>
      </div>`;
    const charBox = card.querySelector('.kanji-char');
    if (v.word.length >= 6) charBox.style.fontSize = '1.2rem';
    else if (v.word.length >= 4) charBox.style.fontSize = '1.5rem';
    else if (v.word.length >= 3) charBox.style.fontSize = '2rem';
    const favBtn = card.querySelector('.favorite-btn');
    favBtn.style.color = isFavorite ? '#ec6f9a' : '#f4c9d8';
    favBtn.onclick = event => {
      event.stopPropagation();
      favoriteVocaSet.has(v.id) ? favoriteVocaSet.delete(v.id) : favoriteVocaSet.add(v.id);
      saveFavoriteVoca();
      buildVocaList();
    };
    card.onclick = () => selectVoca(v);
    list.appendChild(card);
  });
}

function selectVoca(v) {
  selectedVoca = v;
  buildVocaList();
  renderVocaPractice();
}

function renderVocaEmpty() {
  document.getElementById('practiceArea').innerHTML = `
    <div class="empty-state">
      <div class="big-char">単語</div>
      <div>왼쪽에서 단어를 선택하세요</div>
    </div>`;
}

function renderVocaPractice() {
  const v = selectedVoca;
  document.getElementById('practiceArea').innerHTML = `
    <div class="practice-top">
      <div class="info-panel">
        <div class="selected-kanji" style="font-size:3.5rem;">${v.word}</div>
        <div class="selected-reading">${v.reading}</div>
        <div class="selected-reading">${v.romaji}</div>
        <div class="selected-meaning">${v.meaning}</div>
      </div>
      <div class="stroke-panel">
        <h3>단어 따라쓰기</h3>
        <div style="font-size:0.9rem; line-height:1.8;">단어 전체를 보고 아래 칸에 4번 반복해 보세요.</div>
      </div>
    </div>
    <div class="writing-section">
      <div class="writing-label">
        <span>4번 반복하기</span>
        <div style="display:flex;gap:8px"><button class="btn btn-outline" onclick="clearAll()">모두 지우기</button></div>
      </div>
      <div class="writing-container" id="writingContainer"></div>
    </div>`;
  buildWritingBoxes();
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
      <div class="guide"><div class="guide-char" style="font-size:${selectedVoca.word.length >= 4 ? '2.5rem' : '4rem'}">${selectedVoca.word}</div></div>
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
function shuffleItems(items) { return [...items].sort(() => Math.random() - 0.5); }
function examSourceItems() {
  if (examMode === 'favorites') return allVocabs().filter(v => favoriteVocaSet.has(v.id));
  if (examMode === 'random') return [...examChapters].flatMap(chapter => vocabWithChapter(chapter));
  const chapter = currentChapter === '전체' ? Object.keys(VOCAB_CATEGORIES)[0] : currentChapter;
  return vocabWithChapter(chapter);
}
function buildExamItems() { const source = examSourceItems(); examItems = shuffleItems(source).slice(0, Math.min(examCount, source.length)); }
function examModeLabel() {
  if (examMode === 'favorites') return `즐겨찾기 ${favoriteVocaSet.size}개`;
  if (examMode === 'random') return [...examChapters].join(' · ') || '단원 선택';
  return currentChapter === '전체' ? '3과' : currentChapter;
}
function examTypeLabel() { return ({ meaning: '뜻 쓰기', reading: '읽기 쓰기', word: '일본어 쓰기', mixed: '혼합' })[examType]; }
function questionFor(v, index) {
  if (examType === 'meaning') return `<span class="exam-question">${v.word}</span><small>${v.reading}</small>`;
  if (examType === 'reading') return `<span class="exam-question">${v.word}</span><small>${v.meaning}</small>`;
  if (examType === 'word') return `<strong>${v.meaning}</strong><small>${v.reading}</small>`;
  return index % 2 === 0 ? `<span class="exam-question">${v.word}</span><small>${v.reading}</small>` : `<strong>${v.meaning}</strong><small>${v.romaji}</small>`;
}

function renderVocaExamPage() {
  buildExamItems();
  document.getElementById('progressInfo').textContent = `${examItems.length}문항 생성`;
  document.getElementById('vocabList').innerHTML = '<div class="exam-side-note"><strong>시험지 생성</strong><span>설정을 바꾸면 미리보기가 바로 갱신됩니다.</span></div>';
  document.getElementById('practiceArea').innerHTML = `
    <div class="exam-layout">
      <div>
        <div class="exam-card">
          <div class="exam-title">출제 범위</div>
          <div class="exam-option">
            <label class="exam-radio"><input type="radio" name="examMode" value="single" ${examMode === 'single' ? 'checked' : ''}><span>단원 지정<span class="exam-help">현재 선택한 단원에서 출제</span></span></label>
            <div class="chapter-pills">${Object.keys(VOCAB_CATEGORIES).map(chapter => `<button class="chapter-pill ${chapter === currentChapter ? 'active' : ''}" data-current-chapter="${chapter}">${chapter}</button>`).join('')}</div>
          </div>
          <div class="exam-option">
            <label class="exam-radio"><input type="radio" name="examMode" value="random" ${examMode === 'random' ? 'checked' : ''}><span>단원 선택 랜덤<span class="exam-help">선택한 단원에서 무작위 출제</span></span></label>
            <div class="chapter-pills">${Object.keys(VOCAB_CATEGORIES).map(chapter => `<button class="chapter-pill ${examChapters.has(chapter) ? 'active' : ''}" data-exam-chapter="${chapter}">${chapter}</button>`).join('')}</div>
          </div>
          <div class="exam-option">
            <label class="exam-radio"><input type="radio" name="examMode" value="favorites" ${examMode === 'favorites' ? 'checked' : ''}><span>즐겨찾기 중에서<span class="exam-help">별 표시 단어만 출제 · 현재 ${favoriteVocaSet.size}개</span></span></label>
          </div>
        </div>
        <div class="exam-card">
          <div class="exam-title">출제 설정</div>
          <div class="exam-stepper"><span>문제 수</span><div class="stepper-controls"><button class="round-btn" id="examMinus">−</button><span>${examCount}</span><button class="round-btn" id="examPlus">＋</button></div></div>
          <div class="exam-title">문제 유형</div>
          <div class="exam-type-grid">
            <button class="exam-type ${examType === 'meaning' ? 'active' : ''}" data-exam-type="meaning">뜻 쓰기<small>단어 보고 뜻 쓰기</small></button>
            <button class="exam-type ${examType === 'reading' ? 'active' : ''}" data-exam-type="reading">읽기<small>단어 보고 읽기</small></button>
            <button class="exam-type ${examType === 'word' ? 'active' : ''}" data-exam-type="word">일본어 쓰기<small>뜻 보고 단어 쓰기</small></button>
            <button class="exam-type ${examType === 'mixed' ? 'active' : ''}" data-exam-type="mixed">혼합<small>유형 섞기</small></button>
          </div>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:22px" id="makeExamBtn">시험지 생성하기</button>
      </div>
      <div>
        <div class="exam-summary">
          <div class="summary-box">선택 범위<strong>${examModeLabel()}</strong></div>
          <div class="summary-box">출제 단어<strong>${examSourceItems().length}개</strong></div>
          <div class="summary-box">문제 수<strong>${examItems.length}문항</strong></div>
        </div>
        <div class="preview-sheet">
          <div class="exam-title">미리보기</div>
          <h2>일본어 단어 시험</h2>
          <div class="preview-meta">${examModeLabel()} · ${examTypeLabel()} · ${examItems.length}문항</div>
          <ol class="exam-list">${examItems.slice(0, 10).map((v, index) => `<li><div>${questionFor(v, index)}</div><div class="exam-answer-line"></div></li>`).join('')}</ol>
        </div>
        <div class="exam-actions"><button class="btn btn-outline" onclick="window.print()">인쇄하기</button><button class="btn btn-outline" onclick="window.print()">PDF 저장</button></div>
      </div>
    </div>`;
  bindExamControls();
}

function bindExamControls() {
  document.querySelectorAll('input[name="examMode"]').forEach(input => input.onchange = () => { examMode = input.value; renderVocaExamPage(); });
  document.querySelectorAll('[data-current-chapter]').forEach(btn => btn.onclick = () => { currentChapter = btn.dataset.currentChapter; examMode = 'single'; renderVocaExamPage(); });
  document.querySelectorAll('[data-exam-chapter]').forEach(btn => btn.onclick = () => { const chapter = btn.dataset.examChapter; examChapters.has(chapter) ? examChapters.delete(chapter) : examChapters.add(chapter); examMode = 'random'; renderVocaExamPage(); });
  document.querySelectorAll('[data-exam-type]').forEach(btn => btn.onclick = () => { examType = btn.dataset.examType; renderVocaExamPage(); });
  document.getElementById('examMinus').onclick = () => { examCount = Math.max(5, examCount - 5); renderVocaExamPage(); };
  document.getElementById('examPlus').onclick = () => { examCount = Math.min(80, examCount + 5); renderVocaExamPage(); };
  document.getElementById('makeExamBtn').onclick = renderVocaExamPage;
}

buildVocaTabs();
buildVocaList();
