let date = document.getElementById("date");
let calculate = document.getElementById("calculate");
let yearsDisplay = document.getElementById("years");
let monthsDisplay = document.getElementById("months");
let daysDisplay = document.getElementById("days");

// to stop user from selecting future date

date.max = new Date().toISOString().split("T")[0];

calculate.addEventListener("click", calculateAge);
// calculate year gap

function calculateAge() {
  let today = new Date();
  let birthDate = new Date(date.value);

  let years;
  if (
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() == birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())
  ) {
    years = today.getFullYear() - birthDate.getFullYear();
  } else {
    years = today.getFullYear() - birthDate.getFullYear() - 1;
  }

  // calculate mont gap

  let months;
  if (today.getDate() >= birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth();
  } else if (today.getDate() < birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth() - 1;
  }

  // make month positive

  months = months < 0 ? months + 12 : months;

  // calculate exact day gap

  let days;
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (today.getDate() >= birthDate.getDate()) {
    days = today.getDate() - birthDate.getDate();
  } else {
    days =
      today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
  }

  yearsDisplay.textContent = years;
  monthsDisplay.textContent = months;
  daysDisplay.textContent = days;
}

// add event listener to enter key
document.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    calculateAge();
  }
});

// autofocus to date input field
date.focus();
