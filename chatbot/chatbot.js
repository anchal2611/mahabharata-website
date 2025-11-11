import { GEMINI_API_KEY } from "../assets/js/api-config.js";

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

async function getResponse(prompt) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I sense silence... perhaps the answer lies within yourself."
    );
  } catch (err) {
    console.error(err);
    return "⚠️ The divine connection seems unstable. Please try again.";
  }
}

sendBtn.addEventListener("click", async () => {
  const question = userInput.value.trim();
  if (!question) return;

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.innerHTML = `<strong>You:</strong> <p>${question}</p>`;
  chatWindow.appendChild(userMsg);
  userInput.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Bot typing...
  const botMsg = document.createElement("div");
  botMsg.classList.add("bot-message");
  botMsg.innerHTML = `<strong>Voice of Mahabharata 🕉️:</strong> <p><em>Contemplating...</em></p>`;
  chatWindow.appendChild(botMsg);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Get Gemini response
  const answer = await getResponse(
    `You are the Mahabharata itself, ancient and wise. Respond in a spiritual, poetic tone but remind that you are AI and may not always be accurate. Question: ${question}`
  );

  botMsg.querySelector("p").innerText = answer;
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

