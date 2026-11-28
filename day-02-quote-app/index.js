const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function getQuote() {
  quoteEl.textContent = "Loading...";
  authorEl.textContent = "";
  quoteEl.classList.remove("text-red-600"); // clear old red
  newQuoteBtn.disabled = true; // button off while loading

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    quoteEl.textContent = data.quote;
    authorEl.textContent = data.author;
  } catch (error) {
    quoteEl.textContent = "Failed to fetch quote. Please try again.";
    authorEl.textContent = "";
    quoteEl.classList.add("text-red-600"); // red error
  } finally {
    newQuoteBtn.disabled = false; // button on again
  }
}

getQuote();
newQuoteBtn.addEventListener("click", getQuote);