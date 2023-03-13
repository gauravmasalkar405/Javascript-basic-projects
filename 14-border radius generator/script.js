let allsides = document.getElementById("allsides");
let display = document.getElementById("display-text");
let box = document.querySelector(".border-box");
let topLeft = document.getElementById("top-left");
let topRight = document.getElementById("top-right");
let bottomLeft = document.getElementById("bottom-left");
let bottomRight = document.getElementById("bottom-right");

function displaySliderValue() {
  display.textContent = `border-radius: ${allsides.value}px ${allsides.value}px ${allsides.value}px ${allsides.value}px`;

  box.style.borderRadius = `${allsides.value}px ${allsides.value}px ${allsides.value}px ${allsides.value}px`;

  topLeft.value = allsides.value;
  topRight.value = allsides.value;
  bottomRight.value = allsides.value;
  bottomLeft.value = allsides.value;
}

function displaySliderValueTopLeft() {
  display.textContent = `border-radius: ${topLeft.value}px ${allsides.value}px ${allsides.value}px ${allsides.value}px`;

  box.style.borderTopLeftRadius = `${topLeft.value}px`;
}

function displaySliderValueTopRight() {
  display.textContent = `border-radius: ${allsides.value}px ${topRight.value}px ${allsides.value}px ${allsides.value}px`;

  box.style.borderTopRightRadius = `${topRight.value}px`;
}

function displaySliderValueBottomRight() {
  display.textContent = `border-radius: ${allsides.value}px ${allsides.value}px ${bottomRight.value}px ${allsides.value}px`;

  box.style.borderBottomRightRadius = `${bottomRight.value}px`;
}

function displaySliderValueBottomLeft() {
  display.textContent = `border-radius: ${bottomRight.value}px ${allsides.value}px ${allsides.value}px ${bottomLeft.value}px`;

  box.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
}
