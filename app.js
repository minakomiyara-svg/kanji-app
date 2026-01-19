// 10問（好きに増やせます）
const questions = [
  { kanji: "犬", choices: ["いぬ", "ねこ", "とり"], answer: "いぬ" },
  { kanji: "猫", choices: ["さる", "ねこ", "うま"], answer: "ねこ" },
  { kanji: "鳥", choices: ["とり", "さかな", "いぬ"], answer: "とり" },
  { kanji: "山", choices: ["かわ", "うみ", "やま"], answer: "やま" },
  { kanji: "川", choices: ["かわ", "もり", "そら"], answer: "かわ" },
  { kanji: "空", choices: ["そら", "はな", "つき"], answer: "そら" },
  { kanji: "月", choices: ["ひ", "つき", "ほし"], answer: "つき" },
  { kanji: "日", choices: ["にち", "ひ", "やま"], answer: "ひ" },
  { kanji: "花", choices: ["はな", "みず", "いし"], answer: "はな" },
  { kanji: "水", choices: ["みず", "き", "つち"], answer: "みず" },
];

let currentIndex = 0;

// 画面の要素（idやclassが違う場合は、ここだけ合わせればOK）
const questionEl = document.getElementById("question");
const choicesWrap = document.getElementById("choices");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

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

  if (!messageEl) return;

  if (selected === q.answer) {
    messageEl.textContent = "正解！🎉";
  } else {
    messageEl.textContent = `ちがうよ。正解は「${q.answer}」`;
  }

  // 次へボタンを押せるように
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
