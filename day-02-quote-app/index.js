const newQuoteBtn = document.getElementById("newQuoteBtn");

async function getQuote() {
    document.getElementById("quote").textContent = "Loading...";
    document.getElementById("author").textContent = "";
    newQuoteBtn.disabled = true; // Disable the button while fetching

    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        document.getElementById("quote").textContent = data.quote;
        document.getElementById("author").textContent = data.author;
    } catch (error) {
        document.getElementById("quote").textContent = "Failed to fetch quote. Please try again.";
        document.getElementById("author").textContent = "";
    } finally {
        newQuoteBtn.disabled = false; // Re-enable the button after fetching
    }
}

getQuote();
newQuoteBtn.addEventListener("click", getQuote);
