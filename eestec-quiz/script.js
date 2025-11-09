import { useState } from "react";

const questions = [
  { text: "What does EESTEC stand for?", options: [
    { text: "Electrical Engineering Students’ European Association", score: 2 },
    { text: "Electric Students Trying Every Challenge", score: 0 },
    { text: "European Engineers Sharing Tired Energy & Coffee", score: 0 },
  ]},
  { text: "Where was EESTEC founded?", options: [
    { text: "Delft, Netherlands", score: 2 },
    { text: "Zürich, Switzerland", score: 0 },
    { text: "Somewhere between two IMW", score: 1 },
  ]},
  { text: "What does IMW stand for?", options: [
    { text: "International Motivation Weekend", score: 2 },
    { text: "Intense Meeting Week", score: 0 },
    { text: "Infinite Moments Without sleep", score: 1 },
  ]},
  { text: "What’s the spirit fruit of VC-AA Matej (official mascot)?", options: [
    { text: "Orange", score: 2 },
    { text: "Strawberry", score: 0 },
    { text: "There’s no mascot, just energy", score: 0 },
  ]},
  { text: 'How many times have you said "Next IMW, I’ll rest"?', options: [
    { text: "0–2", score: 2 },
    { text: "2–5", score: 1 },
    { text: "Every time", score: 2 },
  ]},
  { text: "What does CR stand for?", options: [
    { text: "Constant Rejections", score: 1 },
    { text: "Corporate Relations", score: 2 },
    { text: "Coffee Refill", score: 0 },
  ]},
  { text: "What’s your hidden EESTEC talent?", options: [
    { text: "Making memes", score: 2 },
    { text: "Filling forms fast", score: 1 },
    { text: "Sleeping anywhere", score: 2 },
  ]},
  { text: "If EESTEC were a person, it would be:", options: [
    { text: "Hyperactive", score: 2 },
    { text: "Organized chaos", score: 2 },
    { text: "The best friend who always drags you to new adventures", score: 2 },
  ]},
  { text: "The spreadsheet never lies.", options: [
    { text: "TRUE", score: 2 },
    { text: "FALSE", score: 0 },
  ]},
  { text: "Pick your EESTEC superpower:", options: [
    { text: "Managing 3 projects at once", score: 2 },
    { text: "Surviving without sleep", score: 1 },
    { text: "Finding the cheapest transport route", score: 1 },
  ]},
  { text: "Name one topic you cannot find in EESTEC Wiki?", options: [
    { text: "How to survive an IMW without sleep 😴", score: 2 },
    { text: "A step-by-step guide to how to make an email setup correctly 📊", score: 0 },
    { text: "How to become legendary EESTECer overnight 🧡", score: 0 },
  ]},
  { text: "How many LCs does EESTEC have in Europe?", options: [
    { text: "31", score: 2 },
    { text: "35", score: 1 },
    { text: "Did not count", score: 0 },
  ]},
  { text: "What’s the unofficial currency of EESTEC?", options: [
    { text: "LC t-shirts", score: 2 },
    { text: "Coffee", score: 0 },
    { text: "Memes", score: 2 },
    { text: "Stickers", score: 1 },
    { text: "Wheelbarrow", score: 2 },
  ]},
  { text: "What is the name of official Congress pet?", options: [
    { text: "Cerdio", score: 0 },
    { text: "Cerdo", score: 2 },
    { text: "Cergio", score: 0 },
  ]},
  { text: "How many times have you been included in the Cerdo report?", options: [
    { text: "0–2", score: 0 },
    { text: "2–4", score: 1 },
    { text: "Loooot", score: 2 },
  ]},
  { text: "Have you ever missed a bus/train/plane because of EESTEC?", options: [
    { text: "YES", score: 2 },
    { text: "NO", score: 0 },
  ]},
  { text: 'The word "deadline" means "flexible guidelines"', options: [
    { text: "TRUE", score: 2 },
    { text: "FALSE", score: 0 },
  ]},
  { text: "During which dance did you feel like you were part of a cult the most?", options: [
    { text: "Haka", score: 4 },
    { text: "Hir aj kam hir aj go", score: 3 },
    { text: "Step on the ground", score: 1 },
    { text: "Helikopter", score: 2 },
  ]},
  { text: "How much did you embarrass yourself during the City Rally?", options: [
    { text: "1–4", score: 0 },
    { text: "4–7", score: 2 },
    { text: "7–10", score: 3 },
  ]},
  { text: "What is your favorite alcoholic drink?", options: [
    { text: "Ouzo", score: 4 },
    { text: "Raki", score: 7 },
    { text: "Ricola vodka", score: 5 },
    { text: "Soplica", score: 3 },
    { text: "Vinjak Cola", score: 6 },
    { text: "Borovnicke", score: 2 },
    { text: "Sangria", score: 1 },
  ]},
  { text: "How many people did you dance Haka with?", options: [
    { text: "50+", score: 3 },
    { text: "20+", score: 2 },
    { text: "12+", score: 1 },
    { text: "Never danced before", score: 0 },
  ]},
  { text: "How many Congresses have you attended?", options: [
    { text: "0", score: 0 },
    { text: "1–3", score: 1 },
    { text: "3 and more", score: 2 },
  ]},
  { text: "What is your experience with Mangolian?", options: [
    { text: "Won a contest", score: 3 },
    { text: "Fainted after a contest", score: 2 },
    { text: "I just witnessed", score: 0 },
  ]},
  { text: "How many stickers did you collect during the International night?", options: [
    { text: "Less than 3", score: 1 },
    { text: "Between 3 and 10", score: 2 },
    { text: "More than 10", score: 3 },
  ]},
  { text: "How many LCs have you visited?", options: [
    { text: "0–2", score: 1 },
    { text: "2–5", score: 2 },
    { text: "More than 5", score: 3 },
  ]},
  { text: "How many people have you hosted at the same time?", options: [
    { text: "None", score: 0 },
    { text: "1–3", score: 1 },
    { text: "More than 3", score: 2 },
  ]},
];

const resultsTable = [
  { min: 9, max: 19, percent: "%30–40", message: "bro wtf 😭" },
  { min: 20, max: 30, percent: "%40–50", message: "almost almost... continue in local #goint 😅" },
  { min: 31, max: 41, percent: "%50–60", message: "promising eestecer, keep going 👏" },
  {
    min: 42,
    max: 52,
    percent: "%60–80",
    message: "There is a small drop 😬 maybe next international event in the schedule will pull you together!",
  },
  { min: 53, max: 64, percent: "%80–100", message: "You are an excellent eestecer! Go for it 🔥" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const handleSelect = (score) => {
    const updated = [...answers];
    updated[current] = score;
    setAnswers(updated);
  };

  const next = () => {
    if (current === questions.length - 1) setFinished(true);
    else setCurrent(current + 1);
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const totalScore = answers.reduce((a, b) => a + (b || 0), 0);
  const result =
    resultsTable.find((r) => totalScore >= r.min && totalScore <= r.max) ||
    resultsTable[resultsTable.length - 1];

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-700 text-white p-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the EESTEC Quiz! 🎉</h1>
        <p className="mb-6 max-w-md">
          Answer 26 fun questions and find out how much of an EESTECer you are!
        </p>
        <button
          onClick={() => setStarted(true)}
          className="bg-white text-red-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 You are {result.percent} EESTECer!</h1>
        <p className="text-lg max-w-lg">{result.message}</p>
        <button
          onClick={() => {
            setAnswers(Array(questions.length).fill(null));
            setCurrent(0);
            setFinished(false);
            setStarted(false);
          }}
          className="mt-6 bg-white text-red-700 font-semibold px-4 py-2 rounded-xl hover:bg-gray-200 transition"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const q = questions[current];
  const progressPercent = Math.round(((current + 1) / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl mb-4">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-2 bg-red-600" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div className="text-right text-sm text-gray-400 mt-1">
          Question {current + 1} / {questions.length}
        </div>
      </div>

      <div className="max-w-xl bg-gray-800 p-8 rounded-2xl shadow-lg w-full">
        <h2 className="text-xl mb-6 text-center font-semibold">{q.text}</h2>

        <div className="flex flex-col gap-3">
          {q.options.map((o, i) => (
            <button
              key={i}
              onClick={() => handleSelect(o.score)}
              className={`py-2 px-4 rounded-lg border transition ${
                answers[current] === o.score
                  ? "bg-red-600 border-red-400"
                  : "bg-gray-700 border-gray-600 hover:bg-gray-600"
              }`}
            >
              {o.text}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={back}
            disabled={current === 0}
            className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-30 hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={next}
            disabled={answers[current] === null}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500"
          >
            {current === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
