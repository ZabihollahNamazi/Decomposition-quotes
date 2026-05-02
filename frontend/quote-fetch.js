const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

async function getQuote() {
  try {
    const response = await fetch("http://zabihollahnamazi-decomposition-quotes-backend.hosting.codeyourfuture.io/");
    const text = await response.text();
    quoteEl.innerText = text;
  } catch (err) {
    console.error(err);
    quoteEl.innerText = "Failed to fetch quote";
  }
}

// async function getQuote() {
// const response = await fetch("https://zabihollahnamazi/decomposition-quotes-backend.hosting.codeyourfuture.io");
// const text = await response.text();
// quoteEl.innerText = text;
// }

btn.addEventListener("click", getQuote);