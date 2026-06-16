const fortunes = {
  "大吉": [
    "今日はいいことがありそう！",
    "思いきり楽しんでね",
    "どやねこも大応援しているよ"
  ],
  "中吉": [
    "のんびり過ごすといい日",
    "おいしいものに出会えるかも",
    "少しだけ寄り道してみてもいいかも"
  ],
  "小吉": [
    "小さないいことを見つけられる日",
    "あたたかいごはんで元気を出そう",
    "無理せずゆっくりいこう"
  ],
  "吉": [
    "いつも通りがちょうどいい日",
    "今日は気楽に楽しもう",
    "ほっと一息つける日"
  ],
  "末吉": [
    "焦らずいけば大丈夫",
    "今日は休憩を大事にしよう",
    "小さな楽しみを見つけよう"
  ],
  "凶": [
    "今日は無理せず、おいしいものを食べよう",
    "どやねこがこっそり見守っているよ",
    "こんな日こそ、ゆっくりしていってね"
  ]
};

const luckyMenus = [
  "どやねこ丼",
  "チキンカツ",
  "どやねこ気まぐれパフェ",
  "唐揚げ",
  "定食メニュー",
  "カレー",
  "デザート",
  "今日のおすすめ"
];

const drawButton = document.getElementById("drawButton");
const fortuneText = document.getElementById("fortuneText");
const menuText = document.getElementById("menuText");
const messageText = document.getElementById("messageText");

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

drawButton.addEventListener("click", () => {
  const fortuneNames = Object.keys(fortunes);
  const selectedFortune = getRandomItem(fortuneNames);
  const selectedMessage = getRandomItem(fortunes[selectedFortune]);
  const selectedMenu = getRandomItem(luckyMenus);

  fortuneText.textContent = `${selectedFortune}！！`;
  menuText.textContent = `おすすめメニューは${selectedMenu}だよ`;
  messageText.textContent = selectedMessage;
});