let genBtn = document.querySelector(".btn-generate button");
let copyBtn = document.querySelector(".btn-copy button");
let display = document.querySelector(".input input");

// string to get password
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

// function to generat password

let password = "";

genBtn.addEventListener("click", () => {
  for (let i = 0; i < 8; i++) {
    password += str[randomNumber()];
    display.value = password;
  }
  console.log(password);
  password = "";
});

//function to copy password to clipboard

copyBtn.addEventListener("click", () => {
  display.select();
  navigator.clipboard.writeText(display.value);
});

// function to generate randomnumber

function randomNumber() {
  return Math.floor(Math.random() * 65);
}
