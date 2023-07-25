const choice1 = document.getElementById("ch1");
const choice2 = document.getElementById("ch2");
const choice3 = document.getElementById("ch3");
const choice４ = document.getElementById("ch4");

const display1 = document.getElementById("display1");

const display2 = document.getElementById("display2");

const display3 = document.getElementById("display3");

const display4 = document.getElementById("display4");

choice1.onclick = function () {
  display1.textContent = "週3";
};

choice2.onclick = function () {
  display2.textContent = "ぶっかけ冷";
};

choice3.onclick = function () {
  display3.textContent = "愉楽家（美味しいぜひ食べて！）";
};

choice４.onclick = function () {
  display4.textContent = "おすし🍣";
};
