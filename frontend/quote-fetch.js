const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

async function getQuote() {
const response = await fetch("https://zabihollahnamazi-decomposition-quotes-frontend.hosting.codeyourfuture.io/");
const text = await response.text();
quoteEl.innerText = text;
}

btn.addEventListener("click", getQuote);