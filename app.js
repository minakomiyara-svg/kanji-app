// 10問（好きに増やせます）
const questions = [
  { level:"easy", kanji:"犬", icon:"🐶", choices:["いぬ","ねこ","とり"], answer:"いぬ" },
  { level:"easy", kanji:"猫", icon:"🐱", choices:["さる","ねこ","うま"], answer:"ねこ" },
  { level:"easy", kanji:"鳥", icon:"🐦", choices:["とり","さかな","いぬ"], answer:"とり" },
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
  { level: "easy",  kanji: "火", choices: ["ひ", "みず", "き"], answer: "ひ" },
  { level: "easy",  kanji: "雨", choices: ["あめ", "ゆき", "かぜ"], answer: "あめ" },
  { level: "hard",  kanji: "雪", choices: ["あめ", "ゆき", "ひ"], answer: "ゆき" },
  { level: "hard",  kanji: "風", choices: ["かぜ", "あめ", "つち"], answer: "かぜ" },
  { level: "hard",  kanji: "魚", choices: ["さかな", "とり", "ねこ"], answer: "さかな" },
  { level: "hard",  kanji: "虫", choices: ["むし", "さかな", "いし"], answer: "むし" },
];

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
  return questions.filter(q => q.level === activeLevel);
}


// 質問を表示
function renderQuestion() {
  const q = questions[currentIndex];

  // 「『犬』はどれ？」みたいに表示
  if (questionEl) {
    questionEl.textContent = `「${q.kanji}」はどれ？`;
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
