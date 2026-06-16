const results = [
  "大吉：今日はどやねこ日和！",
  "中吉：おすすめメニューに出会えるかも",
  "小吉：ゆっくり過ごすといい日",
  "吉：気まぐれパフェが似合う日",
  "末吉：あたたかいごはんで回復する日",
  "レア：どやねこがこっそり応援している"
];

const drawButton = document.getElementById("drawButton");
const result = document.getElementById("result");

drawButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * results.length);
  result.textContent = results[randomIndex];
});