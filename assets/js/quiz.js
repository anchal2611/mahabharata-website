// quiz.js

document.getElementById("submitQuiz").addEventListener("click", function() {
  let score = 0;

  // Correct Answers
  const answers = {
    q1: "b",
    q2: "a",
    q3: "b",
    q4: "a",
    q5: "c"
  };

  // Check answers
  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  const resultDiv = document.getElementById("quizResult");
  resultDiv.innerHTML = `<h4>You scored ${score} / 5!</h4>`;

  if (score === 5) {
    resultDiv.innerHTML += `<p>🌟 Excellent! You truly know the Mahabharata.</p>`;
  } else if (score >= 3) {
    resultDiv.innerHTML += `<p>⚔️ Good effort! The path of Dharma is learned step by step.</p>`;
  } else {
    resultDiv.innerHTML += `<p>📜 Keep reading the epic — wisdom awaits!</p>`;
  }

  resultDiv.style.display = "block";
});

