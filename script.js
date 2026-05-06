// ============ DATA (Copy CSV from previous full file) ============
const wordCSV = `简体字,Jiǎntǐzì ,จีนตัวย่อ,Simplified Chinese
繁体字,fántǐzì ,จีนตัวเต็ม,Traditional Chinese
拼音,pīnyīn,พินอิน,Pinyin
因为,yīnwèi,เพราะ,because
西班牙语,xībānyáyǔ,สเปน,spanish
星期一,xīngqīyī,วันจันทร์,Monday
下午,xiàwǔ,ตอนบ่าย,afternoon
上午,shàngwǔ,เช้า,morning
晚上,wǎnshàng,กลางคืน,night
怎么样,zěnmeyàng,เป็นยังไงบ้าง,How about it
熊猫,xióngmāo,หมีแพนด้า,panda
北京烤鸭,běijīngkǎoyā,เป็ดปักกิ่ง,Peking duck
最,zuì,ที่สุด,most
香蕉,xiāngjiāo,กล้วย,banana
有点,yǒudiǎn,นิดหน่อย,A bit
累,Lèi,เหนื่อย,tired`;

const sentenceCSV = `留胡须等于不理胡须，让他很长。,"Liú húxū děngyú bù lǐ húxū, ràng tā hěn cháng.",ไว้หนวดคือไม่ตัดหนวดและปล่อยให้มันยาว,Growing a beard means not trimming it and letting it grow long.,,
我有一个计划。,Wǒ yǒu yīgè jìhuà.,ฉันมีแผน,I have a plan.,,`; //

// ================== CSV Parser ==================
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current.trim());
    return result;
}

function parseCSV(text, skipHeader = true) {
    const lines = text.trim().split('\n');
    const start = skipHeader ? 1 : 0;
    return lines.slice(start).map(line => parseCSVLine(line)).filter(r => r.length >= 2 && r[0]);
}

function parseWordsCSV(csv) {
    const lines = csv.trim().split('\n');
    const words = [];
    for (const line of lines) {
        const parts = parseCSVLine(line);
        if (parts.length >= 4 && parts[0] && parts[0].length >= 1) {
            words.push({
                chinese: parts[0].trim(),
                pinyin: (parts[1] || '').trim(),
                thai: (parts[2] || '').trim(),
                english: (parts[3] || '').trim(),
                type: 'word'
            });
        }
    }
    return words;
}

function parseSentencesCSV(csv) {
    const lines = csv.trim().split('\n');
    const sentences = [];
    for (const line of lines) {
        const parts = parseCSVLine(line);
        if (parts.length >= 4 && parts[0] && parts[0].length > 2) {
            sentences.push({
                chinese: parts[0].trim().replace(/^"|"$/g, ''),
                pinyin: (parts[1] || '').trim(),
                thai: (parts[2] || '').trim(),
                english: (parts[3] || '').trim(),
                type: 'sentence'
            });
        }
    }
    return sentences;
}

// ================== Data ==================
let allWords = parseWordsCSV(wordCSV);
let allSentences = parseSentencesCSV(sentenceCSV);

// Deduplicate
allWords = allWords.filter((w, i, arr) => arr.findIndex(x => x.chinese === w.chinese) === i);
allSentences = allSentences.filter((s, i, arr) => arr.findIndex(x => x.chinese === s.chinese) === i);
let allItems = [...allWords, ...allSentences];

// ================== State ==================
let currentFilter = 'all';
let currentMode = 'quiz';
let streak = 0, totalCorrect = 0, totalAttempts = 0;
let currentItems = [];
let quizCorrectItem = null;
let matchingPairs = [], matchingSelected = null, matchingMatched = 0;
let scrambleItem = null, scrambleChunks = [], scrambleAnswer = [], scrambleWrongCount = 0;
let listenItem = null;

// ================== Helpers ==================
function getFilteredItems() {
    if (currentFilter === 'vocab') return [...allWords];
    if (currentFilter === 'sentence') return [...allSentences];
    return [...allItems];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function showToast(msg, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function updateStats() {
    document.getElementById('stat-streak').textContent = `🔥 ${streak}`;
    document.getElementById('stat-correct').textContent = `✅ ${totalCorrect}`;
    document.getElementById('stat-total').textContent = `📊 ${totalAttempts}`;
    const acc = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    document.getElementById('stat-accuracy').textContent = `🎯 ${acc}%`;
    saveStats();
}

function loadStats() {
    try {
        const s = JSON.parse(localStorage.getItem('cnlearn_stats') || '{}');
        streak = s.streak || 0;
        totalCorrect = s.totalCorrect || 0;
        totalAttempts = s.totalAttempts || 0;
    } catch(e) {}
}

function saveStats() {
    try {
        localStorage.setItem('cnlearn_stats', JSON.stringify({ streak, totalCorrect, totalAttempts }));
    } catch(e) {}
}
loadStats();

function recordAnswer(correct) {
    totalAttempts++;
    if (correct) {
        totalCorrect++;
        streak++;
        showToast('✅ ถูกต้อง! +1 streak', 'success');
    } else {
        streak = 0;
        showToast('❌ ผิด! ลองอีกครั้ง', 'error');
    }
    updateStats();
}

function resetAllStats() {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการล้างสถิติทั้งหมด?\n(Streak, จำนวนข้อถูก, จำนวนข้อทั้งหมดจะถูกรีเซ็ต)')) {
        streak = 0;
        totalCorrect = 0;
        totalAttempts = 0;
        updateStats();
        showToast('🧹 รีเซ็ตคะแนนเรียบร้อยแล้ว', 'success');
    }
}

// ================== AZURE TTS ==================
const AZURE_TTS_KEY = '______';      // <-- เปลี่ยนเป็น Key จริงของคุณ
const AZURE_TTS_REGION = 'southeastasia';          // <-- เปลี่ยน region ถ้าต้องการ

const AZURE_VOICES = [
    'zh-CN-XiaoxiaoNeural',
    'zh-CN-YunxiNeural',
    'zh-CN-YunjianNeural',
    'zh-CN-XiaoyiNeural',
    'zh-CN-XiaochenNeural',
    'zh-CN-XiaohanNeural',
    'zh-CN-XiaomengNeural',
    'zh-CN-XiaoqiuNeural',
    'zh-CN-XiaoruiNeural',
    'zh-CN-XiaoshuangNeural',
    'zh-CN-XiaoxuanNeural',
    'zh-CN-XiaoyanNeural'
];

function getRandomVoice() {
    return AZURE_VOICES[Math.floor(Math.random() * AZURE_VOICES.length)];
}

async function speakChinese(text) {
    if (!text) return;
    // Try Azure TTS first
    try {
        const tokenRes = await fetch(
            `https://${AZURE_TTS_REGION}.api.cognitive.microsoft.com/sts/v1.0/issuetoken`,
            { method: 'POST', headers: { 'Ocp-Apim-Subscription-Key': AZURE_TTS_KEY } }
        );
        if (!tokenRes.ok) throw new Error('Token error');
        const token = await tokenRes.text();

        const voice = getRandomVoice();
        const ssml = `<speak version='1.0' xml:lang='zh-CN'>
  <voice name='${voice}'>
    <prosody rate='0.85'>${text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</prosody>
  </voice>
</speak>`;

        const audioRes = await fetch(
            `https://${AZURE_TTS_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/ssml+xml',
                    'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3',
                    'User-Agent': 'ChineseLearnApp'
                },
                body: ssml
            }
        );
        if (!audioRes.ok) throw new Error('TTS request failed');
        const blob = await audioRes.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.onended = () => URL.revokeObjectURL(url);
        await audio.play();
    } catch (err) {
        // Fallback to browser TTS
        console.warn('Azure TTS failed, using browser TTS', err);
        if (typeof window.speechSynthesis !== 'undefined') {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.85;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        }
    }
}

// ================== Render Functions ==================
function renderQuiz() {
    currentItems = getFilteredItems();
    if (currentItems.length < 4) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 4 รายการ</div>';
        return;
    }
    const pool = shuffle(currentItems);
    quizCorrectItem = pool[0];
    let options = [quizCorrectItem, pool[1], pool[2], pool[3]];
    // Deduplicate
    const seen = new Set();
    options = options.filter(o => {
        const k = o.chinese;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
    });
    while (options.length < 4 && pool.length > options.length) {
        const extra = pool.find(o => !seen.has(o.chinese));
        if (extra) { options.push(extra); seen.add(extra.chinese); }
        else break;
    }
    options = shuffle(options.slice(0, 4));

    const area = document.getElementById('game-area');
    const isLong = quizCorrectItem.chinese.length > 4;
    area.innerHTML = `
        <div class="quiz-character-wrap${isLong ? ' long' : ''}">
            <div class="quiz-character${isLong ? ' long' : ''}">${quizCorrectItem.chinese}</div>
        </div>
        <div class="pinyin-display hidden" id="pinyin-display">${quizCorrectItem.pinyin || ''}</div>
        <div class="quiz-controls">
            <button class="btn btn-sm" id="toggle-pinyin-btn" onclick="togglePinyin()">แสดงพินอิน</button>
            <button class="audio-btn" onclick="speakChinese('${quizCorrectItem.chinese.replace(/'/g,"\\'")}')" title="ฟังเสียง">🔊</button>
        </div>
        <div class="quiz-options" id="quiz-options">
            ${options.map((o,i) => `
                <button class="quiz-option" data-correct="${o.chinese === quizCorrectItem.chinese}"
                    onclick="answerQuiz(this)">
                    ${o.thai}
                    <small>${o.english}</small>
                </button>
            `).join('')}
        </div>
        <div id="quiz-feedback" class="feedback"></div>
    `;
    document.getElementById('nav-area').innerHTML = `<button class="btn" onclick="renderQuiz()">🔄 ข้อต่อไป</button>`;
}

function togglePinyin() {
    const el = document.getElementById('pinyin-display');
    const btn = document.getElementById('toggle-pinyin-btn');
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        btn.textContent = 'ซ่อนพินอิน';
    } else {
        el.classList.add('hidden');
        btn.textContent = 'แสดงพินอิน';
    }
}

function answerQuiz(btn) {
    const allBtns = document.querySelectorAll('#quiz-options .quiz-option');
    if (btn.dataset.answered === 'true') return;
    allBtns.forEach(b => b.dataset.answered = 'true');
    const isCorrect = btn.dataset.correct === 'true';
    allBtns.forEach(b => {
        if (b.dataset.correct === 'true') b.classList.add('correct');
        if (b === btn && !isCorrect) b.classList.add('wrong');
        b.style.pointerEvents = 'none';
    });
    const fb = document.getElementById('quiz-feedback');
    fb.textContent = isCorrect ? '✅ ถูกต้อง!' : '❌ ผิด';
    fb.className = 'feedback ' + (isCorrect ? 'success' : 'error');
    recordAnswer(isCorrect);
}

// ================== Matching ==================
function renderMatching() {
    currentItems = getFilteredItems().filter(i => i.type === 'word');
    if (currentItems.length < 6) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 6 คำศัพท์</div>';
        return;
    }
    // Pick 6 pairs (12 cards total) — fits comfortably on a phone screen
    const pairCount = 6;
    const pool = shuffle(currentItems).slice(0, pairCount);
    matchingPairs = pool;
    matchingSelected = null;
    matchingMatched = 0;

    // Build two independent shuffled lists — Chinese on top, meanings on bottom.
    // pairId is the shared index that links a Chinese card to its meaning.
    const chineseCards = pool.map((item, i) => ({ pairId: i, text: item.chinese, side: 'chinese', item }));
    const meaningCards = pool.map((item, i) => ({ pairId: i, item }));
    const shuffledChinese  = shuffle(chineseCards);
    const shuffledMeanings = shuffle(meaningCards);

    document.getElementById('game-area').innerHTML = `
        <div class="matching-board">
            <div class="match-section">
                <div class="match-section-title"><span class="cn">汉字</span>คำจีน</div>
                <div class="chinese-row">
                    ${shuffledChinese.map(c => `
                        <div class="match-card chinese"
                             data-pair="${c.pairId}" data-side="chinese"
                             onclick="selectMatch(this)">${c.text}</div>
                    `).join('')}
                </div>
            </div>
            <div class="match-section">
                <div class="match-section-title"><span class="cn">含义</span>ความหมาย</div>
                <div class="meaning-row">
                    ${shuffledMeanings.map(c => `
                        <div class="match-card meaning"
                             data-pair="${c.pairId}" data-side="meaning"
                             onclick="selectMatch(this)">
                            <span class="m-th">${c.item.thai}</span>
                            <span class="m-en">${c.item.english}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    document.getElementById('nav-area').innerHTML = `
        <button class="btn btn-sm" onclick="renderMatching()">🔄 เริ่มใหม่</button>
        <span class="match-progress">จับได้ <span class="count" id="match-status">0</span> / ${pairCount}</span>
    `;
}

function selectMatch(card) {
    if (card.classList.contains('matched')) return;
    if (card.dataset.side === 'chinese') {
        speakChinese(card.textContent.trim());
    }
    if (!matchingSelected) {
        card.classList.add('selected');
        matchingSelected = card;
    } else if (matchingSelected === card) {
        card.classList.remove('selected');
        matchingSelected = null;
    } else {
        const p1 = matchingSelected.dataset.pair, p2 = card.dataset.pair;
        const s1 = matchingSelected.dataset.side, s2 = card.dataset.side;
        if (p1 === p2 && s1 !== s2) {
            matchingSelected.classList.add('matched');
            card.classList.add('matched');
            matchingSelected.classList.remove('selected');
            matchingMatched++;
            recordAnswer(true);
            const status = document.getElementById('match-status');
            if (status) status.textContent = matchingMatched;
            if (matchingMatched === matchingPairs.length) {
                showToast('🎉 ยินดีด้วย! จับคู่ครบทุกคู่แล้ว!', 'success');
                setTimeout(renderMatching, 1500);
            }
        } else {
            matchingSelected.classList.add('wrong');
            card.classList.add('wrong');
            setTimeout(() => {
                matchingSelected.classList.remove('wrong', 'selected');
                card.classList.remove('wrong');
            }, 500);
            recordAnswer(false);
        }
        matchingSelected = null;
    }
}

// ================== Scramble ==================
function renderScramble() {
    currentItems = getFilteredItems().filter(i => i.type === 'sentence');
    if (currentItems.length < 2) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 2 ประโยค</div>';
        return;
    }
    scrambleItem = currentItems[Math.floor(Math.random() * currentItems.length)];
    // Split into chunks: if length <= 15, split by character; else group every 3 chars + punctuation
    let chunks = [];
    if (scrambleItem.chinese.length <= 15) {
        chunks = scrambleItem.chinese.split('');
    } else {
        const parts = scrambleItem.chinese.split(/([，。！？、,\.!\?])/).filter(Boolean);
        for (const part of parts) {
            if (/^[，。！？、,\.!\?]$/.test(part)) {
                chunks.push(part);
            } else {
                for (let i = 0; i < part.length; i += 3) {
                    chunks.push(part.substring(i, i+3));
                }
            }
        }
    }
    scrambleChunks = shuffle(chunks.filter(c => c.trim()));
    scrambleAnswer = [];
    scrambleWrongCount = 0;
    document.getElementById('game-area').innerHTML = `
        <p class="scramble-prompt">เรียงคำให้เป็นประโยคที่ถูกต้อง</p>
        <div class="scramble-answer" id="scramble-answer"></div>
        <div class="scramble-words" id="scramble-words">
            ${scrambleChunks.map((c,i) => `<span class="scramble-chunk" data-idx="${i}" onclick="placeChunk(${i})">${c}</span>`).join('')}
        </div>
        <div style="display:flex;gap:8px;justify-content:center;margin:10px 0 4px;">
            <button class="btn btn-sm" onclick="undoChunk()">↩ ถอยหลัง</button>
            <button class="btn btn-sm btn-success" onclick="checkScramble()">✅ ตรวจสอบ</button>
            <button class="btn btn-sm" onclick="renderScramble()">🔄 ใหม่</button>
        </div>
        <div id="scramble-feedback" class="feedback"></div>
        <div id="scramble-audio" class="hidden text-center">
            <button class="audio-btn" onclick="speakChinese('${scrambleItem.chinese.replace(/'/g,"\\'")}')">🔊</button>
        </div>
    `;
    document.getElementById('nav-area').innerHTML = '';
}

function placeChunk(idx) {
    const chunkEls = document.querySelectorAll('#scramble-words .scramble-chunk');
    if (idx >= chunkEls.length) return;
    const el = chunkEls[idx];
    if (el.classList.contains('placed')) return;
    el.classList.add('placed');
    scrambleAnswer.push({ text: el.textContent, idx });
    updateScrambleDisplay();
}

function undoChunk() {
    if (scrambleAnswer.length === 0) return;
    const last = scrambleAnswer.pop();
    const el = document.querySelectorAll('#scramble-words .scramble-chunk')[last.idx];
    if (el) el.classList.remove('placed');
    updateScrambleDisplay();
}

function updateScrambleDisplay() {
    const ansDiv = document.getElementById('scramble-answer');
    if (!ansDiv) return;
    if (scrambleAnswer.length === 0) {
        ansDiv.innerHTML = '<span class="empty-hint">วางคำที่นี่...</span>';
        return;
    }
    ansDiv.innerHTML = scrambleAnswer.map(w =>
        `<span class="scramble-chunk" onclick="removeFromAnswer(${w.idx})">${w.text}</span>`
    ).join('');
}

function removeFromAnswer(idx) {
    scrambleAnswer = scrambleAnswer.filter(w => w.idx !== idx);
    const el = document.querySelectorAll('#scramble-words .scramble-chunk')[idx];
    if (el) el.classList.remove('placed');
    updateScrambleDisplay();
}

function checkScramble() {
    const userAns = scrambleAnswer.map(w => w.text).join('');
    const correct = userAns === scrambleItem.chinese;
    const fb = document.getElementById('scramble-feedback');
    if (correct) {
        fb.textContent = '✅ ถูกต้อง!';
        fb.className = 'feedback success';
        recordAnswer(true);
        speakChinese(scrambleItem.chinese); // เล่นเสียงเมื่อถูกต้อง
        setTimeout(renderScramble, 1500);
    } else {
        scrambleWrongCount++;
        fb.textContent = `❌ ผิด (${scrambleWrongCount}/3)`;
        fb.className = 'feedback error';
        recordAnswer(false);
        if (scrambleWrongCount >= 3) {
            fb.textContent = '❌ เฉลย';
            document.getElementById('scramble-audio').classList.remove('hidden');
            speakChinese(scrambleItem.chinese); // เล่นเสียงอัตโนมัติเมื่อผิดครบ 3 ครั้ง
            // ปิดกั้นปุ่มตรวจสอบ
            const checkBtn = document.querySelector('.btn-success');
            if (checkBtn) checkBtn.disabled = true;
        }
    }
}

// ================== Listen ==================
function renderListen() {
    currentItems = getFilteredItems();
    if (currentItems.length < 4) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 4 รายการ</div>';
        return;
    }
    const item = currentItems[Math.floor(Math.random() * currentItems.length)];
    listenItem = item;
    const distractors = shuffle(currentItems.filter(i => i.chinese !== item.chinese)).slice(0, 3);
    let options = shuffle([item, ...distractors]);
    const seen = new Set();
    options = options.filter(o => { if (seen.has(o.chinese)) return false; seen.add(o.chinese); return true; });
    while (options.length < 4 && currentItems.length > options.length) {
        const extra = currentItems.find(i => !seen.has(i.chinese));
        if (extra) { options.push(extra); seen.add(extra.chinese); } else break;
    }
    options = shuffle(options.slice(0, 4));
    document.getElementById('game-area').innerHTML = `
        <p class="scramble-prompt">👂 ฟังเสียงและเลือกคำแปล</p>
        <div class="listen-card" onclick="speakChinese('${item.chinese.replace(/'/g,"\\'")}')">
            <span class="speaker-icon">🔊</span>${item.chinese}
        </div>
        <div class="quiz-options" id="listen-options">
            ${options.map(o => `
                <button class="quiz-option" data-correct="${o.chinese === item.chinese}"
                    onclick="answerListen(this, '${item.chinese.replace(/'/g,"\\'")}', '${item.thai.replace(/'/g,"\\'")}')">
                    ${o.thai} <small>${o.english}</small>
                </button>
            `).join('')}
        </div>
        <div id="listen-feedback" class="feedback"></div>
    `;
    document.getElementById('nav-area').innerHTML = `<button class="btn" onclick="renderListen()">🔄 ข้อต่อไป</button>`;
    // Auto-speak on load
    setTimeout(() => speakChinese(item.chinese), 400);
}

function answerListen(btn, correctChinese, correctThai) {
    const allBtns = document.querySelectorAll('#listen-options .quiz-option');
    if (btn.dataset.answered === 'true') return;
    allBtns.forEach(b => b.dataset.answered = 'true');
    const isCorrect = btn.dataset.correct === 'true';
    allBtns.forEach(b => {
        if (b.dataset.correct === 'true') b.classList.add('correct');
        if (b === btn && !isCorrect) b.classList.add('wrong');
        b.style.pointerEvents = 'none';
    });
    const fb = document.getElementById('listen-feedback');
    fb.textContent = isCorrect ? '✅ ถูกต้อง!' : `❌ คำตอบ: ${correctThai}`;
    fb.className = 'feedback ' + (isCorrect ? 'success' : 'error');
    recordAnswer(isCorrect);
}

// ================== Mode & Filter ==================
function switchMode(mode, btnEl) {
    currentMode = mode;
    document.querySelectorAll('.mode-tab').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    if (mode === 'quiz') renderQuiz();
    else if (mode === 'matching') renderMatching();
    else if (mode === 'scramble') renderScramble();
    else if (mode === 'listen') renderListen();
}

function setFilter(filter, btnEl) {
    currentFilter = filter;
    document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    switchMode(currentMode, document.querySelector(`.mode-tab[data-mode="${currentMode}"]`));
}

// ================== Theme ==================
function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('cnlearn_theme', next); } catch(e) {}
}

function loadTheme() {
    try {
        const saved = localStorage.getItem('cnlearn_theme');
        if (saved === 'dark' || saved === 'light') {
            document.documentElement.setAttribute('data-theme', saved);
        }
    } catch(e) {}
}
loadTheme();

// ================== Init ==================
function init() {
    updateStats();
    renderQuiz();
}
init();
