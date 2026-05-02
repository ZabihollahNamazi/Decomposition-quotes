const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

async function getQuote() {
const response = await fetch("http://zabihollahnamazi-decomposition-quotes-backend.hosting.codeyourfuture.io/");
const text = await response.text();
quoteEl.innerText = text;
}

btn.addEventListener("click", getQuote);