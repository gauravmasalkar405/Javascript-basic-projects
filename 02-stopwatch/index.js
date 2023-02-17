let mn = 0;
let sc = 0;
let count = 0;

let timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;

  mn = 0;
  sc = 0;
  count = 0;
  let countString = "0" + 0;
  let scString = "0" + 0;
  let mnString = "0" + 0;
  document.getElementById("count").textContent = countString;
  document.getElementById("second").textContent = scString;
  document.getElementById("minute").textContent = mnString;
}

function stopwatch() {
  if (timer == true) {
    count++;
    if (count > 99) {
      count = 0;
      sc++;
      if (sc > 59) {
        sc = 0;
        mn++;
      }
    }

    let scString = sc;
    if (sc < 10) {
      scString = "0" + sc;
    }

    let mnString = mn;
    if (mn < 10) {
      mnString = "0" + mn;
    }

    let countString = count;
    if (count < 10) {
      countString = "0" + count;
    }

    document.getElementById("count").textContent = countString;
    document.getElementById("second").textContent = scString;
    document.getElementById("minute").textContent = mnString;
    setTimeout(stopwatch, 10);
  }
}
