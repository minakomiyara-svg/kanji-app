// 134問（好きに増やせます）
const questions = [
  { level:"easy", kanji:"犬", icon:"🐶", choices:["いぬ","ねこ","とり"], answer:"いぬ" },
  { level:"hard", kanji:"猫", icon:"🐱", choices:["さる","ねこ","うま"], answer:"ねこ" },
  { level:"hard", kanji:"鳥", icon:"🐦", choices:["とり","さかな","いぬ"], answer:"とり" },
  { level: "easy",  kanji: "山", icon:"⛰️", choices: ["かわ", "うみ", "やま"], answer: "やま" },
  { level: "easy",  kanji: "川", icon:"", choices: ["かわ", "もり", "そら"], answer: "かわ" },
  { level: "easy",  kanji: "空", icon:"☁️", choices: ["そら", "はな", "つき"], answer: "そら" },
  { level: "easy",  kanji: "月", icon:"🌙", choices: ["ひ", "つき", "ほし"], answer: "つき" },
  { level: "easy",  kanji: "日", icon:"☀️", choices: ["にち", "ひ", "やま"], answer: "ひ" },
  { level: "easy",  kanji: "花", icon:"🌸 ", choices: ["はな", "みず", "いし"], answer: "はな" },
  { level: "easy",  kanji: "水", icon:"💧", choices: ["みず", "き", "つち"], answer: "みず" },
  { level: "easy",  kanji: "木", icon:"🌲", choices: ["き", "うみ", "いぬ"], answer: "き" },
  { level: "easy",  kanji: "森", icon:"🌳", choices: ["もり", "かわ", "はな"], answer: "もり" },
  { level: "easy",  kanji: "石", icon:"🪨 ", choices: ["いし", "みず", "そら"], answer: "いし" },
  { level: "easy",  kanji: "土", icon:"", choices: ["つち", "ひ", "つき"], answer: "つち" },
  { level: "easy",  kanji: "火", icon:"🔥", choices: ["ひ", "みず", "き"], answer: "ひ" },
  { level: "easy",  kanji: "雨", icon:"🌧️", choices: ["あめ", "ゆき", "かぜ"], answer: "あめ" },
  { level: "normal",  kanji: "雪", icon:"❄️", choices: ["あめ", "ゆき", "ひ"], answer: "ゆき" },
  { level: "normal",  kanji: "風", icon:"💨 ", choices: ["かぜ", "あめ", "つち"], answer: "かぜ" },
  { level: "normal",  kanji: "魚", icon:"🐟 ", choices: ["さかな", "とり", "ねこ"], answer: "さかな" },
  { level: "hard",  kanji: "虫", icon:"🐛 ", choices: ["むし", "さかな", "いし"], answer: "むし" },
  { level: "easy", kanji: "人", icon: "👤", choices: ["ひと", "くち", "て"], answer: "ひと" },
  { level: "easy", kanji: "口", icon: "👄", choices: ["くち", "め", "みみ"], answer: "くち" },
  { level: "easy", kanji: "手", icon: "✋", choices: ["て", "あし", "はな"], answer: "て" },
  { level: "easy", kanji: "目", icon: "👁️", choices: ["め", "くち", "みみ"], answer: "め" },
  { level: "easy", kanji: "耳", icon: "👂", choices: ["みみ", "はな", "くち"], answer: "みみ" },
  { level: "hard", kanji: "鼻", icon: "👃", choices: ["はな", "め", "て"], answer: "はな" },
  { level: "easy", kanji: "車", icon: "🚗", choices: ["くるま", "じてんしゃ", "ひこうき"], answer: "くるま" },
  { level: "normal", kanji: "家", icon: "🏠", choices: ["いえ", "がっこう", "びょういん"], answer: "いえ" },
  { level: "normal", kanji: "学校", icon: "🏫", choices: ["がっこう", "いえ", "みせ"], answer: "がっこう" },
  { level: "hard", kanji: "友達", icon: "👫", choices: ["ともだち", "かぞく", "せんせい"], answer: "ともだち" },
  { level: "easy", kanji: "足", icon: "🦶", choices: ["あし", "て", "あたま"], answer: "あし" },
  { level: "easy", kanji: "頭", icon: "🧠", choices: ["あたま", "かお", "かみ"], answer: "あたま" },
  { level: "easy", kanji: "顔", icon: "😊", choices: ["かお", "め", "くち"], answer: "かお" },
  { level: "easy", kanji: "舌", icon: "👅", choices: ["した", "は", "くち"], answer: "した" },
  { level: "normal", kanji: "心", icon: "❤️", choices: ["こころ", "からだ", "あたま"], answer: "こころ" },
  { level: "normal", kanji: "体", icon: "🏃", choices: ["からだ", "こころ", "あし"], answer: "からだ" },
  { level: "easy", kanji: "男", icon: "👨", choices: ["おとこ", "おんな", "こども"], answer: "おとこ" },
  { level: "easy", kanji: "女", icon: "👩", choices: ["おんな", "おとこ", "こども"], answer: "おんな" },
  { level: "easy", kanji: "子ども, icon: "👶", choices: ["こども", "おとこ", "おんな"], answer: "こども" },
  { level: "normal", kanji: "親", icon: "👨‍👩‍👧‍👦", choices: ["おや", "こども", "ともだち"], answer: "おや" },
  { level: "easy", kanji: "兄", icon: "👦", choices: ["あに", "あね", "おとうと"], answer: "あに" },
  { level: "easy", kanji: "姉", icon: "👧", choices: ["あね", "あに", "いもうと"], answer: "あね" },
  { level: "easy", kanji: "弟", icon: "👦", choices: ["おとうと", "あに", "いもうと"], answer: "おとうと" },
  { level: "easy", kanji: "妹", icon: "👧", choices: ["いもうと", "あね", "おとうと"], answer: "いもうと" },
  { level: "normal", kanji: "食べ物", icon: "🍎", choices: ["たべもの", "のみもの", "じかん"], answer: "たべもの" },
  { level: "normal", kanji: "飲み物", icon: "🥤", choices: ["のみもの", "たべもの", "じかん"], answer: "のみもの" },
  { level: "normal", kanji: "時間", icon: "⏰", choices: ["じかん", "とけい", "ひ"], answer: "じかん" },
  { level: "normal", kanji: "時計", icon: "🕰️", choices: ["とけい", "じかん", "つき"], answer: "とけい" },
  { level: "normal", kanji: "音楽", icon: "🎵", choices: ["おんがく", "ほん", "でんわ"], answer: "おんがく" },
  { level: "easy", kanji: "本", icon: "📖", choices: ["ほん", "おんがく", "でんわ"], answer: "ほん" },
  { level: "normal", kanji: "電話", icon: "📞", choices: ["でんわ", "でんしゃ", "ひこうき"], answer: "でんわ" },
  { level: "normal", kanji: "電車", icon: "🚆", choices: ["でんしゃ", "でんわ", "ふね"], answer: "でんしゃ" },
  { level: "normal", kanji: "船", icon: "🚢", choices: ["ふね", "ひこうき", "でんしゃ"], answer: "ふね" },  { level: "easy", kanji: "一", icon: "1️⃣", choices: ["いち", "に", "さん"], answer: "いち" },
  { level: "easy", kanji: "二", icon: "2️⃣", choices: ["に", "いち", "さん"], answer: "に" },
  { level: "easy", kanji: "三", icon: "3️⃣", choices: ["さん", "に", "よん"], answer: "さん" },
  { level: "easy", kanji: "四", icon: "4️⃣", choices: ["よん", "さん", "ご"], answer: "よん" },
  { level: "easy", kanji: "五", icon: "5️⃣", choices: ["ご", "よん", "ろく"], answer: "ご" },
  { level: "easy", kanji: "六", icon: "6️⃣", choices: ["ろく", "ご", "しち"], answer: "ろく" },
  { level: "easy", kanji: "七", icon: "7️⃣", choices: ["しち", "ろく", "はち"], answer: "しち" },
  { level: "easy", kanji: "八", icon: "8️⃣", choices: ["はち", "しち", "く"], answer: "はち" },
  { level: "easy", kanji: "九", icon: "9️⃣", choices: ["く", "はち", "じゅう"], answer: "く" },
  { level: "easy", kanji: "十", icon: "🔟", choices: ["じゅう", "く", "ひゃく"], answer: "じゅう" },
  { level: "easy", kanji: "百", icon: "💯", choices: ["ひゃく", "じゅう", "せん"], answer: "ひゃく" },
  { level: "easy", kanji: "千", icon: "🔢", choices: ["せん", "ひゃく", "まん"], answer: "せん" },
  { level: "easy", kanji: "上", icon: "⬆️", choices: ["うえ", "した", "なか"], answer: "うえ" },
  { level: "easy", kanji: "下", icon: "⬇️", choices: ["した", "うえ", "なか"], answer: "した" },
  { level: "easy", kanji: "中", icon: "⭕", choices: ["なか", "うえ", "した"], answer: "なか" },
  { level: "easy", kanji: "大", icon: "🔵", choices: ["おお", "ちい", "なが"], answer: "おお" },
  { level: "easy", kanji: "小", icon: "🔵", choices: ["ちい", "おお", "みじか"], answer: "ちい" },
  { level: "easy", kanji: "田", icon: "🌾", choices: ["た", "はたけ", "もり"], answer: "た" },
  { level: "easy", kanji: "畑", icon: "🌾", choices: ["はたけ", "た", "もり"], answer: "はたけ" },
  { level: "easy", kanji: "林", icon: "🌲", choices: ["はやし", "もり", "き"], answer: "はやし" },
  { level: "easy", kanji: "草", icon: "🌱", choices: ["くさ", "はな", "き"], answer: "くさ" },
  { level: "easy", kanji: "星", icon: "⭐", choices: ["ほし", "つき", "ひ"], answer: "ほし" },
  { level: "easy", kanji: "雲", icon: "☁️", choices: ["くも", "あめ", "そら"], answer: "くも" },
  { level: "easy", kanji: "天", icon: "🌤️", choices: ["てん", "ち", "そら"], answer: "てん" },
  { level: "easy", kanji: "地", icon: "🌍", choices: ["ち", "てん", "もり"], answer: "ち" },
  { level: "easy", kanji: "東", icon: "🌅", choices: ["ひがし", "にし", "きた"], answer: "ひがし" },
  { level: "easy", kanji: "南", icon: "🌞", choices: ["みなみ", "きた", "ひがし"], answer: "みなみ" },
  { level: "easy", kanji: "西", icon: "🌇", choices: ["にし", "ひがし", "きた"], answer: "にし" },
  { level: "easy", kanji: "北", icon: "❄️", choices: ["きた", "みなみ", "ひがし"], answer: "きた" },
  { level: "easy", kanji: "右", icon: "👉", choices: ["みぎ", "ひだり", "まえ"], answer: "みぎ" },
  { level: "easy", kanji: "左", icon: "👈", choices: ["ひだり", "みぎ", "うしろ"], answer: "ひだり" },
  { level: "easy", kanji: "前", icon: "👆", choices: ["まえ", "うしろ", "みぎ"], answer: "まえ" },
  { level: "easy", kanji: "後", icon: "👇", choices: ["うしろ", "まえ", "ひだり"], answer: "うしろ" },
  { level: "easy", kanji: "早", icon: "⏩", choices: ["はや", "おそ", "たか"], answer: "はや" },
  { level: "easy", kanji: "遅", icon: "⏪", choices: ["おそ", "はや", "ひく"], answer: "おそ" },
  { level: "easy", kanji: "高", icon: "📈", choices: ["たか", "ひく", "なが"], answer: "たか" },
  { level: "easy", kanji: "低", icon: "📉", choices: ["ひく", "たか", "みじか"], answer: "ひく" },
  { level: "easy", kanji: "多", icon: "🔢", choices: ["おお", "すく", "なが"], answer: "おお" },
  { level: "easy", kanji: "少", icon: "🔢", choices: ["すく", "おお", "みじか"], answer: "すく" },
  { level: "easy", kanji: "長", icon: "📏", choices: ["なが", "みじか", "たか"], answer: "なが" },
  { level: "easy", kanji: "短", icon: "📏", choices: ["みじか", "なが", "ひく"], answer: "みじか" },
  { level: "easy", kanji: "赤", icon: "🔴", choices: ["あか", "あお", "き"], answer: "あか" },
  { level: "easy", kanji: "青", icon: "🔵", choices: ["あお", "あか", "しろ"], answer: "あお" },
  { level: "easy", kanji: "黄", icon: "🟡", choices: ["き", "あか", "くろ"], answer: "き" },
  { level: "easy", kanji: "白", icon: "⚪", choices: ["しろ", "くろ", "あお"], answer: "しろ" },
  { level: "easy", kanji: "黒", icon: "⚫", choices: ["くろ", "しろ", "き"], answer: "くろ" },
  { level: "easy", kanji: "色", icon: "🎨", choices: ["いろ", "かたち", "こえ"], answer: "いろ" },
  { level: "easy", kanji: "形", icon: "🔺", choices: ["かたち", "いろ", "こえ"], answer: "かたち" },
  { level: "easy", kanji: "声", icon: "🔊", choices: ["こえ", "いろ", "かたち"], answer: "こえ" },
  { level: "easy", kanji: "入", icon: "➡️", choices: ["い", "で", "た"], answer: "い" },
  { level: "easy", kanji: "出", icon: "⬅️", choices: ["で", "い", "はし"], answer: "で" },
  { level: "easy", kanji: "立", icon: "🧍", choices: ["た", "はし", "と"], answer: "た" },
  { level: "easy", kanji: "走", icon: "🏃", choices: ["はし", "ある", "と"], answer: "はし" },
  { level: "easy", kanji: "止", icon: "🛑", choices: ["と", "はし", "ある"], answer: "と" },
  { level: "easy", kanji: "歩", icon: "🚶", choices: ["ある", "はし", "と"], answer: "ある" },
  { level: "easy", kanji: "飛", icon: "🦅", choices: ["と", "およ", "み"], answer: "と" },
  { level: "easy", kanji: "泳", icon: "🏊", choices: ["およ", "と", "き"], answer: "およ" },
  { level: "easy", kanji: "見", icon: "👀", choices: ["み", "き", "はな"], answer: "み" },
  { level: "easy", kanji: "聞", icon: "👂", choices: ["き", "み", "よ"], answer: "き" },
  { level: "easy", kanji: "話", icon: "💬", choices: ["はな", "よ", "か"], answer: "はな" },
  { level: "easy", kanji: "読", icon: "📖", choices: ["よ", "か", "か"], answer: "よ" },
  { level: "easy", kanji: "書", icon: "✍️", choices: ["か", "よ", "う"], answer: "か" },
  { level: "easy", kanji: "買", icon: "🛒", choices: ["か", "う", "い"], answer: "か" },
  { level: "easy", kanji: "売", icon: "💰", choices: ["う", "か", "く"], answer: "う" },
  { level: "easy", kanji: "行", icon: "🚶", choices: ["い", "く", "た"], answer: "い" },
  { level: "easy", kanji: "来", icon: "👋", choices: ["く", "い", "の"], answer: "く" },
  { level: "easy", kanji: "食", icon: "🍽️", choices: ["た", "の", "ね"], answer: "た" },
  { level: "easy", kanji: "飲", icon: "🥤", choices: ["の", "た", "お"], answer: "の" },
  { level: "easy", kanji: "寝", icon: "😴", choices: ["ね", "お", "あ"], answer: "ね" },
  { level: "easy", kanji: "起", icon: "⏰", choices: ["お", "ね", "し"], answer: "お" },
  { level: "easy", kanji: "開", icon: "🚪", choices: ["あ", "し", "き"], answer: "あ" },
  { level: "easy", kanji: "閉", icon: "🚪", choices: ["し", "あ", "お"], answer: "し" },
  { level: "easy", kanji: "切", icon: "✂️", choices: ["き", "お", "つく"], answer: "き" },
  { level: "easy", kanji: "折", icon: "📄", choices: ["お", "き", "つか"], answer: "お" },
  { level: "easy", kanji: "作", icon: "🔨", choices: ["つく", "つか", "ま"], answer: "つく" },
  { level: "easy", kanji: "使", icon: "🛠️", choices: ["つか", "つく", "も"], answer: "つか" },
  { level: "easy", kanji: "待", icon: "⏳", choices: ["ま", "も", "と"], answer: "ま" },
  { level: "easy", kanji: "持", icon: "🤲", choices: ["も", "ま", "な"], answer: "も" },
  { level: "easy", kanji: "取", icon: "👐", choices: ["と", "な", "まな"], answer: "と" },
  { level: "easy", kanji: "投", icon: "⚾", choices: ["な", "と", "なら"], answer: "な" },
  { level: "easy", kanji: "学", icon: "🎓", choices: ["まな", "なら", "おし"], answer: "まな" },
  { level: "easy", kanji: "習", icon: "📝", choices: ["なら", "まな", "おし"], answer: "なら" },
  { level: "easy", kanji: "教", icon: "👨‍🏫", choices: ["おし", "なら", "まな"], answer: "おし" },];

const okSound = document.getElementById("sound-ok");
const ngSound = document.getElementById("sound-ng");

let currentIndex = Math.floor(Math.random() * questions.length);


// 画面の要素（idやclassが違う場合は、ここだけ合わせればOK）
const questionEl = document.getElementById("question");
const choicesWrap = document.getElementById("choices");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

const levelSelect = document.getElementById("level");
let activeLevel = (levelSelect && levelSelect.value) ? levelSelect.value : "normal";

function getFilteredQuestions() {
  if (activeLevel === "normal") {
    return questions.filter(q => q.level === "easy" || q.level === "hard");
  }
  return questions.filter(q => q.level === activeLevel);
}


// 質問を表示
function renderQuestion() {
  const q = questions[currentIndex];

  const sparkles = document.getElementById("sparkles");


  // 「『犬』はどれ？」みたいに表示
  if (questionEl) {
  const icon = q.icon ? `${q.icon} ` : "";
　questionEl.textContent = `${icon}「${q.kanji}」はどれ？`;
  }

  // 選択肢を作り直す
  if (choicesWrap) {
    choicesWrap.innerHTML = ""; // いったん空にする

    q.choices.forEach((text) => {
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
  const q = questions[currentIndex];

  const sel = String(selected).trim();
  const ans = String(q.answer).trim();

  if (!messageEl) return;

  if (sel === ans) {
    messageEl.textContent = "正解！ 🎉";
    if (okSound) { okSound.currentTime = 0; okSound.play(); }
    sparkleBurst();
  } else {
    messageEl.textContent = `ちがうよ。正解は「${q.answer}」`;
    if (ngSound) { ngSound.currentTime = 0; ngSound.play(); }
  }

  if (nextBtn) nextBtn.disabled = false;
}


// 次の問題へ
function nextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  renderQuestion();
}

// 次へボタン
if (nextBtn) {
  nextBtn.addEventListener("click", nextQuestion);
}

// 最初の表示
renderQuestion();

function sparkleBurst() {
  if (!sparkles) return;

  // 既存のキラキラを消す（連打対策）
  sparkles.innerHTML = "";

  const count = 14;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";

    // ひろがる方向（ランダム）
    const dx = (Math.random() * 260 - 130).toFixed(0) + "px";
    const dy = (Math.random() * 220 - 110).toFixed(0) + "px";
    s.style.setProperty("--dx", dx);
    s.style.setProperty("--dy", dy);

    // サイズも少しランダム
    const size = 8 + Math.random() * 10;
    s.style.width = size + "px";
    s.style.height = size + "px";

    sparkles.appendChild(s);
  }

  // アニメが終わったら掃除
  setTimeout(() => {
    if (sparkles) sparkles.innerHTML = "";
  }, 750);
}

