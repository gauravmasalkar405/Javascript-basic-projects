let quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma",
  "If life were predictable it would cease to be life, and be without flavor.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "Life is what happens when you're busy making other plans.",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "When you reach the end of your rope, tie a knot in it and hang on.",
];

let author = [
  "Nelson Mandela",
  "Walt Disney",
  "Steve Jobs",
  "Eleanor Roosevelt",
  "Oprah Winfrey",
  "James Cameron",
  "John Lennon",
  "Mother Teresa",
  "Franklin D. Roosevelt",
  "Margaret Mead",
];

const btn = document.querySelector(".button");
const quote = document.querySelector(".text-1");
const auth = document.querySelector(".text-2");

btn.addEventListener("click", randomQuote);

function randomQuote() {
  let index = randomNumber();
  quote.textContent = quotes[index];
  auth.textContent = author[index];
}

function randomNumber() {
  return Math.floor(Math.random() * quotes.length);
}

window.addEventListener("load", randomQuote);
