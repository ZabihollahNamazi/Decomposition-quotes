const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

async function getQuote() {
const response = await fetch("http://127.0.0.1:3000/");
const text = await response.text();
quoteEl.innerText = text;
}

btn.addEventListener("click", getQuote);