const quoteDisplay = document.getElementById('quote-display');
// Function to fetch a random quote from the ZenQuotes API
async function fetchQuote() {
    try {
        const response = await fetch('https://quotes-api-self.vercel.app/quote');
        const data = await response.json();
        quoteDisplay.textContent = `"${data.quote}" — ${data.author}`;
    } catch (error) {
        quoteDisplay.textContent = "Failed to fetch a quote.";
        console.error("Error fetching quote:", error);
    }
};
// Fetch a quote on page load
fetchQuote();

// Fetch a quote when the page loads
fetchQuote();
