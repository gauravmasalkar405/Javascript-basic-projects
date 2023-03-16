let displayText = document.querySelector("#box p");
let box = document.getElementById("box");

const horiSlider = document.getElementById("horizontal-length");
const vertiSlider = document.getElementById("vertical-length");
const blurradius = document.getElementById("blur-radius");
const spreadradius = document.getElementById("spread-radius");
const colorPicker = document.getElementById("color-pick");

function horizontalLength() {
  displayText.textContent = `box-shadow: ${horiSlider.value}px ${vertiSlider.value}px 5px 0px ${colorPicker.value}`;

  box.style.boxShadow = `${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px ${spreadradius.value}px ${colorPicker.value}`;
}

function verticalLength() {
  displayText.textContent = `box-shadow: ${horiSlider.value}px ${vertiSlider.value}px 5px 0px ${colorPicker.value}`;

  box.style.boxShadow = `${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px ${spreadradius.value}px ${colorPicker.value}`;
}

function blurRadius() {
  displayText.textContent = `box-shadow: ${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px 0px ${colorPicker.value}`;

  box.style.boxShadow = `${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px ${spreadradius.value}px ${colorPicker.value}`;
}

function spreadRadius() {
  displayText.textContent = `box-shadow: ${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px ${spreadradius.value}px ${colorPicker.value}`;

  box.style.boxShadow = `${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px ${spreadradius.value}px ${colorPicker.value}`;
}

function colorPickerA() {
  displayText.textContent = `box-shadow: ${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px ${spreadradius.value}px ${colorPicker.value}`;

  box.style.boxShadow = `${horiSlider.value}px ${vertiSlider.value}px ${blurradius.value}px ${spreadradius.value}px ${colorPicker.value}`;
}
