const d = new Date();
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let session = "AM";

if (hour == 0) {
  hour = 12;
}
if (hour > 12) {
  hour = hour - 12;
  session = "PM";
}

let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sc = document.getElementById("second");
let sess = document.getElementById("session");

function timer() {
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hour++;
  }
  if (hour > 24) {
    hour = 0;
  }
  if (hour == 0) {
    document.getElementById("session").textContent = "PM";
  }
  let hrString = hour;
  let minString = minutes;
  let secString = seconds;

  if (hour < 10) {
    hrString = "0" + hrString;
  }
  if (minutes < 10) {
    minString = "0" + minString;
  }
  if (seconds < 10) {
    secString = "0" + secString;
  }
  hr.textContent = hrString;
  min.textContent = minString;
  sc.textContent = secString;
  setTimeout(timer, 1000);
}

timer();
