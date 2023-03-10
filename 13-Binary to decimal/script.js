const convert = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

convert.addEventListener("click", binaryToDecimal);

function binaryToDecimal() {
  let binaryNumber = input.value;

  // checking whether number is binary or not othewise giving alert
  if (binaryNumber % 10 === 1 || binaryNumber % 10 === 0) {
    output.value = decimal(binaryNumber);
  } else {
    alert("Please enter valid binary number");
    input.value = "";
  }
}

// function to convert binary to decimal
let decimal = function bin2dec(num) {
  return num
    .split("")
    .reverse()
    .reduce(function (x, y, i) {
      return y === "1" ? x + Math.pow(2, i) : x;
    }, 0);
};

//focus on input
input.focus();

//event on enter key
document.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    binaryToDecimal();
  }
});
