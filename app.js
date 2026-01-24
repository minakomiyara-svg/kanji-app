// 10問（好きに増やせます）
const questions = [
  { level: "easy",  kanji: "犬", choices: ["いぬ", "ねこ", "とり"], answer: "いぬ" },
  { level: "hard",  kanji: "猫", choices: ["さる", "ねこ", "うま"], answer: "ねこ" },
  { level: "hard",  kanji: "鳥", choices: ["とり", "さかな", "いぬ"], answer: "とり" },
  { level: "easy",  kanji: "山", choices: ["かわ", "うみ", "やま"], answer: "やま" },
  { level: "easy",  kanji: "川", choices: ["かわ", "もり", "そら"], answer: "かわ" },
  { level: "easy",  kanji: "空", choices: ["そら", "はな", "つき"], answer: "そら" },
  { level: "normal",  kanji: "月", choices: ["ひ", "つき", "ほし"], answer: "つき" },
  { level: "normal",  kanji: "日", choices: ["にち", "ひ", "やま"], answer: "ひ" },
  { level: "normal",  kanji: "花", choices: ["はな", "みず", "いし"], answer: "はな" },
  { level: "normal",  kanji: "水", choices: ["みず", "き", "つち"], answer: "みず" },
  { level: "normal",  kanji: "木", choices: ["き", "うみ", "いぬ"], answer: "き" },
  { level: "normal",  kanji: "森", choices: ["もり", "かわ", "はな"], answer: "もり" },
  { level: "normal",  kanji: "石", choices: ["いし", "みず", "そら"], answer: "いし" },
  { level: "normal",  kanji: "土", choices: ["つち", "ひ", "つき"], answer: "つち" },
  { level: "normal",  kanji: "火", choices: ["ひ", "みず", "き"], answer: "ひ" },
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
