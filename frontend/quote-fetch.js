const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

async function getQuote() {
  try {
    const response = await fetch("https://zabihollahnamazi-decomposition-quotes-backend.hosting.codeyourfuture.io");
    const data = await response.json();
    quoteEl.innerText = `"${data.quote}" - ${data.author}`;
  } catch (err) {
    console.error(err);
    quoteEl.innerText = "Failed to fetch quote";
  }
}


btn.addEventListener("click", getQuote);