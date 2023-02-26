const age = document.getElementById("age-value");
const weight = document.getElementById("weight-value");
const height = document.getElementById("height-value");
const calcBtn = document.querySelector(".calculate-btn");
const result = document.querySelector(".result p");

const btnMale = document.querySelector("#male");
const btnFemale = document.querySelector("#female");

const bmiValue = document.getElementById("value");

btnMale.addEventListener("click", function () {
  btnMale.classList.add("active");
  btnFemale.classList.remove("active");
});

btnFemale.addEventListener("click", function () {
  btnFemale.classList.add("active");
  btnMale.classList.remove("active");
});

let bmi = 0;

calcBtn.addEventListener("click", function () {
  if (age.value < 2 || age.value > 100) {
    alert("Age should be in between 2 and 100 years.");
  } else {
    //bmi formula ----->

    bmi = (weight.value / height.value / height.value) * 10000;
    bmi = parseFloat(bmi).toFixed(1);
    bmiValue.textContent = bmi;
  }

  //result whether healthy or not ----->

  if (bmi < 18.5) {
    result.textContent = "You are underweight !";
    result.style.color = "#FFC300";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.textContent = "You are Healthy !";
    result.style.color = "#00FF1A";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    result.textContent = "You are overweight !";
    result.style.color = "#FF5733";
  } else {
    result.textContent = "You are Obesse !";
    result.style.color = "#C70039";
  }
});
