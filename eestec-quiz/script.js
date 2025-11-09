const quiz = [
  { q: "What does EESTEC stand for?", options: ["Electrical Engineering Students’ European Association", "Electric Students Trying Every Challenge", "European Engineers Sharing Tired Energy & Coffee"], points: [2,0,0] },
  { q: "Where was EESTEC founded?", options: ["Delft, Netherlands","Zürich, Switzerland","Somewhere between two IMW"], points: [2,0,1] },
  { q: "What does IMW stand for?", options: ["International Motivation Weekend","Intense Meeting Week","Infinite Moments Without sleep"], points: [2,0,1] },
  { q: "What’s the spirit fruit of VC-AA Matej (official mascot)?", options: ["Orange","Strawberry","There’s no mascot, just energy"], points: [2,0,0] },
  { q: 'How many times have you said "Next IMW, I’ll rest"?', options: ["0–2","2–5","Every time"], points: [2,1,2] },
  { q: "What does CR stand for?", options: ["Constant Rejections","Corporate Relations","Coffee Refill"], points: [1,2,0] },
  { q: "What’s your hidden EESTEC talent?", options: ["Making memes","Filling forms fast","Sleeping anywhere"], points: [2,1,2] },
  { q: "If EESTEC were a person, it would be:", options: ["Hyperactive","Organized chaos","The best friend who always drags you to new adventures"], points: [2,2,2] },
  { q: "The spreadsheet never lies.", options: ["TRUE","FALSE"], points: [2,0] },
  { q: "Pick your EESTEC superpower:", options: ["Managing 3 projects at once","Surviving without sleep","Finding the cheapest transport route"], points: [2,1,1] },
  { q: "Name one topic you cannot find in EESTEC Wiki?", options: ["How to survive an IMW without sleep 😴","A step-by-step guide to make an email setup correctly 📊","How to become legendary EESTECer overnight 🧡"], points: [2,0,0] },
  { q: "How many LCs does EESTEC have in Europe?", options: ["31","35","Did not count"], points: [2,1,0] },
  { q: "What’s the unofficial currency of EESTEC?", options: ["LC t-shirts","Coffee","Memes","Stickers","Wheelbarrow"], points: [2,0,2,1,2] },
  { q: "What is the name of official Congress pet?", options: ["Cerdio","Cerdo","Cergio"], points: [0,2,0] },
  { q: "How many times have you been included in the Cerdo report?", options: ["0–2","2–4","Loooot"], points: [0,1,2] },
  { q: "Have you ever missed a bus/train/plane because of EESTEC?", options: ["YES","NO"], points: [2,0] },
  { q: 'The word "deadline" means "flexible guidelines"', options: ["TRUE","FALSE"], points: [2,0] },
  { q: "During which dance did you feel like you were part of a cult the most?", options: ["Haka","Hir aj kam hir aj go","Step on the ground","Helikopter"], points: [4,3,1,2] },
  { q: "How much did you embarrass yourself during the City Rally?", options: ["1–4","4–7","7–10"], points: [0,2,3] },
  { q: "What is your favorite alcoholic drink?", options: ["Ouzo","Raki","Ricola vodka","Soplica","Vinjak Cola","Borovnicke","Sangria"], points: [4,7,5,3,6,2,1] },
  { q: "How many people did you dance Haka with?", options: ["50+","20+","12+","Never danced before"], points: [3,2,1,0] },
  { q: "How many Congresses have you attended?", options: ["0","1–3","3 and more"], points: [0,1,2] },
  { q: "What is your experience with Mangolian?", options: ["Won a contest","Fainted after a contest","I just witnessed"], points: [3,2,0] },
  { q: "How many stickers did you collect during the International night?", options: ["Less than 3","Between 3 and 10","More than 10"], points: [1,2,3] },
  { q: "How many LCs have you visited?", options: ["0–2","2–5","More than 5"], points: [1,2,3] },
  { q: "How many people have you hosted at the same time?", options: ["None","1–3","More than 3"], points: [0,1,2] },
];

const resultsTable = [
  { min: 9, max: 19, percent: "30–40%", message: "bro wtf 😭" },
  { min: 20, max: 30, percent: "40–50%", message: "almost almost... continue in local #goint 😅" },
  { min: 31, max: 41, percent: "50–60%", message: "promising eestecer, keep going 👏" },
  { min: 42, max: 52, percent: "60–80%", message: "There is a small drop 😬 maybe next international event will pull you together!" },
  { min: 53, max: 64, percent: "80–100%", message: "You are an excellent eestecer! Go for it 🔥" },
];

let current = 0;
let answers = Array(quiz.length).fill(null);

const container = document.getElementById("quiz-container");

function showQuestion() {
  if (current >= quiz.length) {
    showResult();
    return;
  }

  const q = quiz[current];
  container.innerHTML = `
    <div>Question ${current + 1} / ${quiz.length}</div>
    <h3>${q.q}</h3>
    ${q.options.map((opt, i) => `<button onclick="selectOption(${i})">${opt}</button>`).join("")}
    <div style="margin-top: 10px;">
      <button onclick="back()" ${current===0?'disabled':''}>Back</button>
      <button onclick="next()" ${answers[current]===null?'disabled':''}>Next</button>
    </div>
  `;
}

function selectOption(index) {
  answers[current] = quiz[current].points[index];
  showQuestion();
}

function next() {
  if (current < quiz.length - 1) current++;
  showQuestion();
}

function back() {
  if (current > 0) current--;
  showQuestion();
}

function showResult() {
  const totalScore = answers.reduce((a,b)=>a+(b||0),0);
  const result = resultsTable.find(r=>totalScore>=r.min && totalScore<=r.max) || resultsTable[resultsTable.length-1];
  container.innerHTML = `<div class="result">You are ${result.percent} EESTECer!<br>${result.message}</div>`;
}

showQuestion();
