let btn = document.querySelectorAll(".digitvalue");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equal = document.querySelector(".equal");

btn.forEach((btns) => {
  btns.addEventListener("click", () => {
    display.value += btns.value;
  });
});

clear.addEventListener("click", () => {
  display.value = "";
});

equal.addEventListener("click", () => {
  display.value = eval(display.value);
});
