// ============ DATA (Copy CSV from previous full file) ============
const wordCSV = ` ... `; // วางเนื้อหา CSV คำศัพท์ทั้งหมด
const sentenceCSV = ` ... `; // วางเนื้อหา CSV ประโยคทั้งหมด

// ============ Parser & Data Preparation (เหมือนเดิม) ============
// ... parseCSVLine, parseCSV, parseWordsCSV, parseSentencesCSV, dedup ...
let allWords = parseWordsCSV(wordCSV);
let allSentences = parseSentencesCSV(sentenceCSV);
let allItems = [...allWords, ...allSentences];

// ============ State ============
let currentFilter = 'all';
let currentMode = 'quiz';
let streak = 0, totalCorrect = 0, totalAttempts = 0;
let currentItems = [];
let quizCorrectItem = null;
let matchingPairs = [], matchingSelected = null, matchingMatched = 0;
let scrambleItem = null, scrambleChunks = [], scrambleAnswer = [], scrambleWrongCount = 0;
let listenItem = null;

// ============ Helpers ============
function getFilteredItems() { ... }
function shuffle(arr) { ... }
function showToast(msg, type) { ... }
function updateStats() { ... }
function recordAnswer(correct) { ... }
function resetAllStats() { ... }

// ============ Azure TTS (same as before, random voice, rate 0.85) ============
async function speakChinese(text) { ... }

// ============ Render Functions ============
function renderQuiz() {
    currentItems = getFilteredItems();
    if (currentItems.length < 4) return;
    const pool = shuffle(currentItems);
    quizCorrectItem = pool[0];
    let options = ... // สร้างตัวเลือก 4 ตัว
    document.getElementById('game-area').innerHTML = `
        <div style="font-size:2.5rem;font-weight:700;font-family:var(--font-cn);">${quizCorrectItem.chinese}</div>
        <div class="pinyin-display" id="pinyin-display" style="display:none;">${quizCorrectItem.pinyin || ''}</div>
        <button class="btn btn-sm" id="toggle-pinyin-btn" onclick="togglePinyin()">แสดงพินอิน</button>
        <button class="audio-btn" onclick="speakChinese('${quizCorrectItem.chinese.replace(/'/g,"\\'")}')" title="ฟังเสียง">🔊</button>
        <div class="quiz-options" id="quiz-options">${options.map(...).join('')}</div>
        <div id="quiz-feedback" class="text-center mt-1" style="min-height:24px;"></div>
    `;
    document.getElementById('nav-area').innerHTML = `<button class="btn" onclick="renderQuiz()">🔄 ข้อต่อไป</button>`;
}

function togglePinyin() {
    const el = document.getElementById('pinyin-display');
    const btn = document.getElementById('toggle-pinyin-btn');
    if (el.style.display === 'none') { el.style.display = 'block'; btn.textContent = 'ซ่อนพินอิน'; }
    else { el.style.display = 'none'; btn.textContent = 'แสดงพินอิน'; }
}

// answerQuiz คล้ายเดิม แต่ซ่อน pinyin ตอนเริ่ม

function renderMatching() {
    currentItems = getFilteredItems().filter(i => i.type === 'word');
    // เลือก 6-8 คำ
    const pool = shuffle(currentItems).slice(0, 8);
    matchingPairs = pool; matchingSelected = null; matchingMatched = 0;
    const cards = [];
    pool.forEach((item, i) => {
        cards.push({ id: i, text: item.chinese, pairId: i, side: 'chinese', item });
        cards.push({ id: i+100, text: item.thai + '/ ' + item.english, pairId: i, side: 'meaning', item });
    });
    // แยกการ์ดจีนกับคำแปลโดยใช้ class .match-card.meaning สำหรับปรับฟอนต์เล็กลง
    // เรนเดอร์ด้วย .match-card และ data-side
    document.getElementById('game-area').innerHTML = `
        <div class="matching-grid" id="matching-grid">
            ${shuffle(cards).map(c => `<div class="match-card ${c.side==='meaning'?'meaning':''}" data-pair="${c.pairId}" data-side="${c.side}" onclick="selectMatch(this)">${c.text}</div>`).join('')}
        </div>
        <p class="text-center mt-1">จับคู่คำศัพท์</p>
    `;
    document.getElementById('nav-area').innerHTML = `
        <button class="btn" onclick="renderMatching()">🔄 เริ่มใหม่</button>
        <span id="match-status">จับได้: ${matchingMatched}/${pool.length}</span>
    `;
}

// selectMatch: ถ้าฝั่งจีน -> speakChinese, logic matching เหมือนเดิม

function renderScramble() {
    currentItems = getFilteredItems().filter(i => i.type === 'sentence');
    if (currentItems.length < 2) return;
    scrambleItem = currentItems[Math.floor(Math.random() * currentItems.length)];
    // แบ่งเป็น chunks (ถ้าสั้นใช้ตัวอักษร, ถ้ายาวใช้กลุ่ม 3 ตัว)
    let chunks = ...;
    scrambleChunks = shuffle(chunks.filter(w => w.trim()));
    scrambleAnswer = [];
    scrambleWrongCount = 0;
    // render UI
    document.getElementById('game-area').innerHTML = `
        <p>เรียงประโยคให้ถูกต้อง</p>
        <div class="scramble-answer" id="scramble-answer"></div>
        <div class="scramble-words" id="scramble-words">
            ${scrambleChunks.map((c,i)=>`<span class="scramble-chunk" data-idx="${i}" onclick="placeChunk(${i})">${c}</span>`).join('')}
        </div>
        <div>
            <button class="btn btn-sm" onclick="undoChunk()">↩</button>
            <button class="btn btn-success btn-sm" onclick="checkScramble()">✅ ตรวจสอบ</button>
            <button class="btn btn-sm" onclick="renderScramble()">🔄 ใหม่</button>
        </div>
        <div id="scramble-feedback" class="text-center mt-1"></div>
        <div id="scramble-audio" class="hidden">
            <button class="audio-btn" onclick="speakChinese('${scrambleItem.chinese.replace(/'/g,"\\'")}')">🔊</button>
        </div>
    `;
    document.getElementById('nav-area').innerHTML = '';
}

function placeChunk(idx) { ... }
function undoChunk() { ... }
function updateScrambleDisplay() { ... }

function checkScramble() {
    const userAns = scrambleAnswer.join('');
    const correct = userAns === scrambleItem.chinese;
    const fb = document.getElementById('scramble-feedback');
    if (correct) {
        fb.textContent = '✅ ถูกต้อง!'; fb.style.color = 'var(--color-success)';
        recordAnswer(true);
        speakChinese(scrambleItem.chinese);
        setTimeout(renderScramble, 1500);
    } else {
        scrambleWrongCount++;
        fb.textContent = `❌ ผิด (${scrambleWrongCount}/3)`;
        if (scrambleWrongCount >= 3) {
            fb.textContent = '❌ เฉลย';
            document.getElementById('scramble-audio').classList.remove('hidden');
            speakChinese(scrambleItem.chinese);
            // ปิดการใช้งานปุ่มตรวจสอบ
        }
        recordAnswer(false);
    }
}

function renderListen() { ... } // เหมือนเดิม