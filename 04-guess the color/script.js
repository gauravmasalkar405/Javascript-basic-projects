const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
const answer = document.getElementById("answer");
let randomColor = null;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRGB() {
  const red = generateRandomNumber(0, 255);
  const green = generateRandomNumber(0, 255);
  const blue = generateRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function validateResult(el) {
  const SelectedColor = el.target.style.backgroundColor;
  if (SelectedColor === randomColor) {
    answer.textContent = "Yay! correct answer";
  } else {
    answer.textContent = "Wrong answer please try again";
  }
}

function startGame() {
  randomColor = generateRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateRandomNumber(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor = i === ansIndex ? randomColor : generateRGB();
    optionContainer.append(div);
  }
}

window.addEventListener("load", () => startGame());
