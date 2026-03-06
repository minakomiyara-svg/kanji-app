// 240問（好きに増やせます）
const questions = [
  { grade:"g1", kanji:"犬", icon:"🐶", choices:["いぬ","ねこ","とり"], answer:"いぬ" },
  { grade:"g2", kanji:"猫", icon:"🐱", choices:["さる","ねこ","うま"], answer:"ねこ" },
  { grade:"g2", kanji:"鳥", icon:"🐦", choices:["とり","さかな","いぬ"], answer:"とり" },
  { grade: "g1", grade: "g2", kanji: "山", icon:"⛰️", choices: ["かわ", "うみ", "やま"], answer: "やま" },
  { grade: "g1", grade: "g2", kanji: "川", icon:"", choices: ["かわ", "もり", "そら"], answer: "かわ" },
  { grade: "g1", grade: "g2", kanji: "空", icon:"☁️", choices: ["そら", "はな", "つき"], answer: "そら" },
  { grade: "g1", grade: "g2", kanji: "月", icon:"🌙", choices: ["ひ", "つき", "ほし"], answer: "つき" },
  { grade: "g1", grade: "g2", kanji: "日", icon:"☀️", choices: ["にち", "ひ", "やま"], answer: "ひ" },
  { grade: "g1", grade: "g2", kanji: "花", icon:"🌸 ", choices: ["はな", "みず", "いし"], answer: "はな" },
  { grade: "g1", grade: "g2", kanji: "水", icon:"💧", choices: ["みず", "き", "つち"], answer: "みず" },
  { grade: "g1", grade: "g2", kanji: "木", icon:"🌲", choices: ["き", "うみ", "いぬ"], answer: "き" },
  { grade: "g1", grade: "g2", kanji: "森", icon:"🌳", choices: ["もり", "かわ", "はな"], answer: "もり" },
  { grade: "g1", grade: "g2", kanji: "石", icon:"🪨 ", choices: ["いし", "みず", "そら"], answer: "いし" },
  { grade: "g1", grade: "g2", kanji: "土", icon:"", choices: ["つち", "ひ", "つき"], answer: "つち" },
  { grade: "g1", grade: "g2", kanji: "火", icon:"🔥", choices: ["ひ", "みず", "き"], answer: "ひ" },
  { grade: "g1", grade: "g2", kanji: "雨", icon:"🌧️", choices: ["あめ", "ゆき", "かぜ"], answer: "あめ" },
  { grade: "g1", grade: "g2", kanji: "雪", icon:"❄️", choices: ["あめ", "ゆき", "ひ"], answer: "ゆき" },
  { grade: "g1", grade: "g2", kanji: "風", icon:"💨 ", choices: ["かぜ", "あめ", "つち"], answer: "かぜ" },
  { grade: "g1", grade: "g2", kanji: "魚", icon:"🐟 ", choices: ["さかな", "とり", "ねこ"], answer: "さかな" },
  { grade: "g1", grade: "g2", kanji: "虫", icon:"🐛 ", choices: ["むし", "さかな", "いし"], answer: "むし" },
  { kanji: "学ぶ", icon: "🎓", choices: ["まなぶ", "なら", "おし"], answer: "まなぶ" },
  { kanji: "右", icon: "👉", choices: ["みぎ", "ひだり", "うえ"], answer: "みぎ" },
  { kanji: "円", icon: "⭕", choices: ["まる", "しかく", "さんかく"], answer: "まる" },
  { kanji: "王", icon: "👑", choices: ["おう", "ひめ", "さむらい"], answer: "おう" },
  { kanji: "音", icon: "🔊", choices: ["おと", "ひかり", "かおり"], answer: "おと" },
  { kanji: "貝", icon: "🐚", choices: ["かい", "さかな", "とり"], answer: "かい" },
  { kanji: "気", icon: "💨", choices: ["き", "みず", "ひ"], answer: "き" },
  { kanji: "休む", icon: "😴", choices: ["やすむ", "はたら", "あそ"], answer: "やすむ" },
  { kanji: "玉", icon: "💎", choices: ["たま", "いし", "きん"], answer: "たま" },
  { kanji: "金", icon: "💰", choices: ["きん", "ぎん", "どう"], answer: "きん" },
  { kanji: "糸", icon: "🧵", choices: ["いと", "ぬの", "き"], answer: "いと" },
  { kanji: "字", icon: "📝", choices: ["じ", "かき", "よみ"], answer: "じ" },
  { kanji: "生", icon: "🌱", choices: ["いき", "し", "ね"], answer: "いき" },
  { kanji: "青", icon: "🔵", choices: ["あお", "あか", "き"], answer: "あお" },
  { kanji: "夕", icon: "🌅", choices: ["ゆう", "あさ", "ひる"], answer: "ゆう" },
  { kanji: "石", icon: "🪨", choices: ["いし", "みず", "ひ"], answer: "いし" },
  { kanji: "赤", icon: "🔴", choices: ["あか", "あお", "しろ"], answer: "あか" },
  { kanji: "先", icon: "👆", choices: ["さき", "うしろ", "なか"], answer: "さき" },
  { kanji: "早い", icon: "⏩", choices: ["はやい", "おそい", "ゆっくり"], answer: "はやい" },
  { kanji: "村", icon: "🏘️", choices: ["むら", "まち", "もり"], answer: "むら" },
  { kanji: "竹", icon: "🎋", choices: ["たけ", "き", "くさ"], answer: "たけ" },
  { kanji: "町", icon: "🏙️", choices: ["まち", "むら", "もり"], answer: "まち" },
  { kanji: "天", icon: "🌤️", choices: ["てん", "ち", "そら"], answer: "てん" },
  { kanji: "田", icon: "🌾", choices: ["た", "はたけ", "もり"], answer: "た" },
  { kanji: "二", icon: "2️⃣", choices: ["に", "いち", "さん"], answer: "に" },
  { kanji: "日", icon: "☀️", choices: ["ひ", "つき", "ほし"], answer: "ひ" },
  { kanji: "入る", icon: "➡️", choices: ["はいる", "でる", "た"], answer: "はいる" },
  { kanji: "年", icon: "📅", choices: ["とし", "つき", "ひ"], answer: "とし" },
  { kanji: "八", icon: "8️⃣", choices: ["はち", "しち", "く"], answer: "はち" },
  { kanji: "百", icon: "💯", choices: ["ひゃく", "じゅう", "せん"], answer: "ひゃく" },
  { kanji: "文", icon: "📄", choices: ["ぶん", "じ", "かき"], answer: "ぶん" },
  { kanji: "木", icon: "🌲", choices: ["き", "くさ", "いし"], answer: "き" },
  { kanji: "本", icon: "📖", choices: ["ほん", "かみ", "え"], answer: "ほん" },
  { kanji: "名", icon: "📛", choices: ["な", "かた", "もの"], answer: "な" },
  { kanji: "目", icon: "👁️", choices: ["め", "みみ", "くち"], answer: "め" },
  { kanji: "立つ", icon: "🧍", choices: ["たつ", "すわ", "ねる"], answer: "たつ" },
  { kanji: "力", icon: "💪", choices: ["ちから", "はやさ", "かしこさ"], answer: "ちから" },
  { kanji: "林", icon: "🌲", choices: ["はやし", "もり", "き"], answer: "はやし" },
　{ kanji: "人", icon: "👤", choices: ["ひと", "くち", "て"], answer: "ひと" },
  { kanji: "口", icon: "👄", choices: ["くち", "め", "みみ"], answer: "くち" },
  { kanji: "手", icon: "✋", choices: ["て", "あし", "はな"], answer: "て" },
  { kanji: "目", icon: "👁️", choices: ["め", "くち", "みみ"], answer: "め" },
  { kanji: "耳", icon: "👂", choices: ["みみ", "はな", "くち"], answer: "みみ" },
  { kanji: "車", icon: "🚗", choices: ["くるま", "じてんしゃ", "ひこうき"], answer: "くるま" },
  { kanji: "家", icon: "🏠", choices: ["いえ", "がっこう", "びょういん"], answer: "いえ" },
  { kanji: "学校", icon: "🏫", choices: ["がっこう", "いえ", "みせ"], answer: "がっこう" },
  { kanji: "友達", icon: "👫", choices: ["ともだち", "かぞく", "せんせい"], answer: "ともだち" },
  { kanji: "足", icon: "🦶", choices: ["あし", "て", "あたま"], answer: "あし" },
  { kanji: "頭", icon: "🧠", choices: ["あたま", "かお", "かみ"], answer: "あたま" },
  { kanji: "顔", icon: "😊", choices: ["かお", "め", "くち"], answer: "かお" },
  { kanji: "心", icon: "❤️", choices: ["こころ", "からだ", "あたま"], answer: "こころ" },
  { kanji: "体", icon: "🏃", choices: ["からだ", "こころ", "あし"], answer: "からだ" },
  { kanji: "男", icon: "👨", choices: ["おとこ", "おんな", "こども"], answer: "おとこ" },
  { kanji: "女", icon: "👩", choices: ["おんな", "おとこ", "こども"], answer: "おんな" },
  { kanji: "子ども", icon: "👶", choices: ["こども", "おとこ", "おんな"], answer: "こども" },
  { kanji: "親", icon: "👨‍👩‍👧‍👦", choices: ["おや", "こども", "ともだち"], answer: "おや" },
  { kanji: "兄", icon: "👦", choices: ["あに", "あね", "おとうと"], answer: "あに" },
  { kanji: "姉", icon: "👧", choices: ["あね", "あに", "いもうと"], answer: "あね" },
  { kanji: "弟", icon: "👦", choices: ["おとうと", "あに", "いもうと"], answer: "おとうと" },
  { kanji: "妹", icon: "👧", choices: ["いもうと", "あね", "おとうと"], answer: "いもうと" },
  { kanji: "時間", icon: "⏰", choices: ["じかん", "とけい", "ひ"], answer: "じかん" },
  { kanji: "時計", icon: "🕰️", choices: ["とけい", "じかん", "つき"], answer: "とけい" },
  { kanji: "音楽", icon: "🎵", choices: ["おんがく", "ほん", "でんわ"], answer: "おんがく" },
  { kanji: "本", icon: "📖", choices: ["ほん", "おんがく", "でんわ"], answer: "ほん" },
  { kanji: "電話", icon: "📞", choices: ["でんわ", "でんしゃ", "ひこうき"], answer: "でんわ" },
  { kanji: "電車", icon: "🚆", choices: ["でんしゃ", "でんわ", "ふね"], answer: "でんしゃ" },
  { kanji: "船", icon: "🚢", choices: ["ふね", "ひこうき", "でんしゃ"], answer: "ふね" },
  { kanji: "一", icon: "1️⃣", choices: ["いち", "に", "さん"], answer: "いち" },
  { kanji: "二", icon: "2️⃣", choices: ["に", "いち", "さん"], answer: "に" },
  { kanji: "三", icon: "3️⃣", choices: ["さん", "に", "よん"], answer: "さん" },
  { kanji: "四", icon: "4️⃣", choices: ["よん", "さん", "ご"], answer: "よん" },
  { kanji: "五", icon: "5️⃣", choices: ["ご", "よん", "ろく"], answer: "ご" },
  { kanji: "六", icon: "6️⃣", choices: ["ろく", "ご", "しち"], answer: "ろく" },
  { kanji: "七", icon: "7️⃣", choices: ["なな", "ろく", "はち"], answer: "なな" },
  { kanji: "九", icon: "9️⃣", choices: ["きゅう", "はち", "じゅう"], answer: "きゅう" },
  { kanji: "十", icon: "🔟", choices: ["じゅう", "く", "ひゃく"], answer: "じゅう" },
  { kanji: "千", icon: "1️⃣0️⃣0️⃣0️⃣", choices: ["せん", "ひゃく", "まん"], answer: "せん" },
  { kanji: "上", icon: "⬆️", choices: ["うえ", "した", "なか"], answer: "うえ" },
  { kanji: "下", icon: "⬇️", choices: ["した", "うえ", "なか"], answer: "した" },
  { kanji: "中", icon: "", choices: ["なか", "うえ", "した"], answer: "なか" },
  { kanji: "大きい", icon: "", choices: ["おおきい", "ちい", "なが"], answer: "おおきい" },
  { kanji: "小さい", icon: "", choices: ["ちいさい", "おお", "みじか"], answer: "ちいさい" },
  { kanji: "畑", icon: "🌾", choices: ["はたけ", "た", "もり"], answer: "はたけ" },
  { kanji: "草", icon: "🌱", choices: ["くさ", "はな", "き"], answer: "くさ" },
  { kanji: "星", icon: "⭐", choices: ["ほし", "つき", "ひ"], answer: "ほし" },
  { kanji: "雲", icon: "☁️", choices: ["くも", "あめ", "そら"], answer: "くも" },
  { kanji: "地", icon: "🌍", choices: ["ち", "てん", "もり"], answer: "ち" },
  { kanji: "東", icon: "➡️", choices: ["ひがし", "にし", "きた"], answer: "ひがし" },
  { kanji: "南", icon: "⬇️", choices: ["みなみ", "きた", "ひがし"], answer: "みなみ" },
  { kanji: "西", icon: "⬅️", choices: ["にし", "ひがし", "きた"], answer: "にし" },
  { kanji: "北", icon: "⬆️", choices: ["きた", "みなみ", "ひがし"], answer: "きた" },
  { kanji: "右", icon: "👉", choices: ["みぎ", "ひだり", "まえ"], answer: "みぎ" },
  { kanji: "左", icon: "👈", choices: ["ひだり", "みぎ", "うしろ"], answer: "ひだり" },
  { kanji: "前", icon: "👆", choices: ["まえ", "うしろ", "みぎ"], answer: "まえ" },
  { kanji: "後", icon: "👇", choices: ["うしろ", "まえ", "ひだり"], answer: "うしろ" },
  { kanji: "早い", icon: "⏩", choices: ["はやい", "おそい", "たかい"], answer: "はやい" },
  { kanji: "高い", icon: "", choices: ["たかい", "ひく", "なが"], answer: "たかい" },
  { kanji: "多い", icon: "", choices: ["おおい", "すくない", "ながい"], answer: "おおい" },
  { kanji: "少ない", icon: "", choices: ["すくない", "おおい", "みじかい"], answer: "すくない" },
  { kanji: "長い", icon: "📏", choices: ["ながい", "みじかい", "たかい"], answer: "ながい" },
  { kanji: "赤", icon: "🔴", choices: ["あか", "あお", "き"], answer: "あか" },
  { kanji: "青", icon: "🔵", choices: ["あお", "あか", "しろ"], answer: "あお" },
  { kanji: "黄", icon: "🟡", choices: ["き", "あか", "くろ"], answer: "き" },
  { kanji: "白", icon: "⚪", choices: ["しろ", "くろ", "あお"], answer: "しろ" },
  { kanji: "黒", icon: "⚫", choices: ["くろ", "しろ", "き"], answer: "くろ" },
  { kanji: "色", icon: "🎨", choices: ["いろ", "かたち", "こえ"], answer: "いろ" },
  { kanji: "形", icon: "🔺", choices: ["かたち", "いろ", "こえ"], answer: "かたち" },
  { kanji: "声", icon: "🔊", choices: ["こえ", "いろ", "かたち"], answer: "こえ" },
  { kanji: "入る", icon: "➡️", choices: ["はいる", "でる", "たつ"], answer: "はいる" },
  { kanji: "出る", icon: "⬅️", choices: ["でる", "はいる", "はしる"], answer: "でる" },
  { kanji: "立つ", icon: "🧍", choices: ["たつ", "はしる", "とまる"], answer: "たつ" },
  { kanji: "走る", icon: "🏃", choices: ["はしる", "あるく", "とまる"], answer: "はしる" },
  { kanji: "止まる", icon: "🛑", choices: ["とまる", "はしる", "あるく"], answer: "とまる" },
  { kanji: "歩く", icon: "🚶", choices: ["あるく", "はしる", "とまる"], answer: "あるく" },
  { kanji: "見る", icon: "👀", choices: ["みる", "きく", "はなす"], answer: "みる" },
  { kanji: "聞く", icon: "👂", choices: ["きく", "みる", "よむ"], answer: "きく" },
  { kanji: "話す", icon: "💬", choices: ["はなす", "よむ", "かく"], answer: "はなす" },
  { kanji: "読む", icon: "📖", choices: ["よむ", "かく", "かう"], answer: "よむ" },
  { kanji: "書く", icon: "✍️", choices: ["かく", "よむ", "うる"], answer: "かく" },
  { kanji: "買う", icon: "🛒", choices: ["かう", "うる", "いく"], answer: "かう" },
  { kanji: "売る", icon: "💰", choices: ["うる", "かう", "くる"], answer: "うる" },
  { kanji: "行く", icon: "🚶", choices: ["いく", "くる", "たべる"], answer: "いく" },
  { kanji: "来る", icon: "👋", choices: ["くる", "いく", "のむ"], answer: "くる" },
  { kanji: "食べる", icon: "🍽️", choices: ["たべる", "のむ", "ねる"], answer: "たべる" },
  { kanji: "飲む", icon: "🥤", choices: ["のむ", "たべる", "おきる"], answer: "のむ" },
  { kanji: "切る", icon: "✂️", choices: ["きる", "たつ", "とまる"], answer: "きる" },
  { kanji: "学ぶ", icon: "🎓", choices: ["まなぶ", "ならう", "おしえる"], answer: "まなぶ" },
  { kanji: "習う", icon: "📝", choices: ["ならう", "まなぶ", "おしえる"], answer: "ならう" },
  { kanji: "教える", icon: "👨‍🏫", choices: ["おしえる", "ならう", "まなぶ"], answer: "おしえる" },
  { kanji:"弓",   icon:"🏹", choices:["ゆみ","や","かたな"], answer:"ゆみ" },
  { kanji:"矢",   icon:"🏹", choices:["や","ゆみ","つの"],   answer:"や" },
  { kanji:"羽",   icon:"🪶", choices:["はね","つの","いわ"], answer:"はね" },
  { kanji:"角",   icon:"🦌", choices:["つの","はね","ひかり"], answer:"つの" },
  { kanji:"光",   icon:"✨", choices:["ひかり","はれ","あさ"], answer:"ひかり" },
  { kanji:"刀",   icon:"🗡️", choices:["かたな","ゆみ","いわ"], answer:"かたな" },
  { kanji:"春",   icon:"🌸", choices:["はる","なつ","あき"], answer:"はる" },
  { kanji:"夏",   icon:"🌻", choices:["なつ","はる","ふゆ"], answer:"なつ" },
  { kanji:"秋",   icon:"🍂", choices:["あき","なつ","はる"], answer:"あき" },
  { kanji:"冬",   icon:"❄️", choices:["ふゆ","はる","あさ"], answer:"ふゆ" },
  { kanji:"岩",   icon:"🪨", choices:["いわ","こめ","にく"], answer:"いわ" },
  { kanji:"朝",   icon:"🌅", choices:["あさ","はれ","ひかり"], answer:"あさ" },
  { kanji:"晴れ", icon:"☀️", choices:["はれ","あさ","ふゆ"], answer:"はれ" },
  { kanji:"肉",   icon:"🥩", choices:["にく","こめ","いわ"], answer:"にく" },
  { kanji:"広い", icon:"↔️", choices:["ひろい","ほそい","ふとい"], answer:"ひろい" },
  { kanji:"細い", icon:"🧵", choices:["ほそい","ふとい","よわい"], answer:"ほそい" },
  { kanji:"太い", icon:"🧶", choices:["ふとい","ほそい","ひろい"], answer:"ふとい" },
  { kanji:"弱い", icon:"🫧", choices:["よわい","ふとい","ひろい"], answer:"よわい" },
  { kanji:"首",   icon:"🧣", choices:["くび","こめ","にく"], answer:"くび" },
  { kanji:"米",   icon:"🍚", choices:["こめ","にく","あさ"], answer:"こめ" },
];

const okSound = document.getElementById("sound-ok");
const ngSound = document.getElementById("sound-ng");

let currentIndex = 0;


// 画面の要素（idやclassが違う場合は、ここだけ合わせればOK）
const questionEl = document.getElementById("question");
const choicesWrap = document.getElementById("choices");
const messageEl = document.getElementById("message");
const sparkles = document.getElementById("sparkles");
let autoNextTimer = null;

let activeLevel = "g2";
let filteredQuestions = [];

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");


function getFilteredQuestions() {
  return questions.filter(q => q.grade === activeLevel);
}


// 質問を表示
function renderQuestion() {
  const q = filteredQuestions[currentIndex];

  const sparkles = document.getElementById("sparkles");


  // 「『犬』はどれ？」みたいに表示
  if (questionEl) {
  const icon = q.icon ? `${q.icon} ` : "";
　questionEl.textContent = `${icon}「${q.kanji}」はどれ？`;
  }

  // 選択肢を作り直す
  if (choicesWrap) {
    choicesWrap.innerHTML = ""; // いったん空にする

    // 選択肢をランダムにシャッフル
    const shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach((text) => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.className = "choiceBtn";
      btn.addEventListener("click", () => checkAnswer(text));
      choicesWrap.appendChild(btn);
    });
  }

  // メッセージ初期化
  if (messageEl) messageEl.textContent = "";

  // 次へボタンは最初は押せない
  if (nextBtn) nextBtn.disabled = true;
}
 

function checkAnswer(selected) {
  const q = filteredQuestions[currentIndex];

  const sel = String(selected).trim();
  const ans = String(q.answer).trim();

  if (!messageEl) return;

  if (sel === ans) {
    messageEl.textContent = "正解！ 🎉";
    messageEl.style.color = "var(--ok)";
    if (okSound) { okSound.currentTime = 0; okSound.play(); }
    sparkleBurst();
  } else {
    messageEl.textContent = `ちがうよ。正解は「${q.answer}」`;
    messageEl.style.color = "var(--ng)";
    if (ngSound) { ngSound.currentTime = 0; ngSound.play(); }
  }
  // ★自動で次の問題へ（2秒後）
if (autoNextTimer) clearTimeout(autoNextTimer);
autoNextTimer = setTimeout(() => {
  messageEl.style.color = "";
  nextQuestion();
}, 2000);


}


// 次の問題へ
function nextQuestion() {
  currentIndex = (currentIndex + 1) % filteredQuestions.length;
  renderQuestion();
}

// レベルセレクトの変更イベント
const levelSelect = document.getElementById("level");
if (levelSelect) {
  levelSelect.addEventListener("change", (e) => {
    // "1年生" -> "g1", "2年生" -> "g2" に変換
    activeLevel = e.target.value === "1年生" ? "g1" : "g2";
    filteredQuestions = getFilteredQuestions();
    currentIndex = 0;
    renderQuestion();
  });
}

// 最初の表示
function startGame() {
  if (startScreen) startScreen.classList.add("hidden");
  // レベル初期値をセレクトから取得
  const levelValue = levelSelect.value;
  activeLevel = levelValue === "1年生" ? "g1" : "g2";
  filteredQuestions = getFilteredQuestions();
  currentIndex = 0;
  renderQuestion(); // ここで初めて問題表示
}

// スタート画面を表示したままにする（最初は何もしない）
if (startBtn) {
  startBtn.addEventListener("click", startGame);
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeLevel = tab.dataset.grade === '1' ? 'g1' : 'g2';
    filteredQuestions = getFilteredQuestions();
    currentIndex = 0;
    renderQuestion();
  });
});


function sparkleBurst() {
  if (!sparkles) return;

  // 既存を消す（連打対策）
  sparkles.innerHTML = "";

  const count = 14;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";

    // 飛ぶ方向（ランダム）
    const dx = (Math.random() * 260 - 130).toFixed(0) + "px";
    const dy = (Math.random() * 220 - 110).toFixed(0) + "px";
    s.style.setProperty("--dx", dx);
    s.style.setProperty("--dy", dy);

    // サイズも少しランダム
    const size = 8 + Math.random() * 10;
    s.style.width = size + "px";
    s.style.height = size + "px";

    // キラキラっぽい色（白〜薄黄色系）
    const r = 220 + Math.floor(Math.random() * 35);
    const g = 220 + Math.floor(Math.random() * 35);
    const b = 200 + Math.floor(Math.random() * 55);
    s.style.background = `rgb(${r},${g},${b})`;

    sparkles.appendChild(s);
  }

  // 片付け
  setTimeout(() => {
    if (sparkles) sparkles.innerHTML = "";
  }, 800);
}


