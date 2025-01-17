const quote_section = document.getElementById("quote-section");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const categoriesDropdown = document.getElementById("categories");
const shareBtn = document.getElementById("share-btn");

// Array to track displayed quotes to avoid repetition
let displayedQuotes = [];
let  quotes = [];

async function fetchQuotes(category) {
    const url = 'https://api.quotable.io/quotes?tags=';    

    try {
        const response = await fetch(`${url}${category}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching quotes:", error);
        quoteElement.textContent = "Failed to load quotes. Please try again later.";
        authorElement.textContent = "";
    }
}

// Display a random quote from the fetched quotes
function displayQuote(quotes) {
    if (quotes.length === 0) {
        quote_section.classList.remove("hover");
        quoteElement.textContent = "No more quotes in this category.";
        authorElement.textContent = "";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    quoteElement.textContent = `${selectedQuote.content}`;
    authorElement.textContent = `- ${selectedQuote.author}`;
    quote_section.classList.add("hover");
    displayedQuotes.push(selectedQuote._id);
    const saveQuote = {
        category:categoriesDropdown.value,
        quote:quoteElement.textContent,
        author:authorElement.textContent
    }

    localStorage.setItem("quote", JSON.stringify(saveQuote));
}

function loadPreferences() {
    const saveQuote = JSON.parse(localStorage.getItem("quote"));
    if (saveQuote) {
        categoriesDropdown.value = saveQuote.category;
        quoteElement.textContent = saveQuote.quote
        authorElement.textContent = saveQuote.author;
        quote_section.classList.add("hover");
    }
}

function shareQuote() {
    const appUrl = window.location.pathname;
    const shareUrl = `${appUrl}?quote=${encodeURIComponent(quoteElement.textContent)}&author=${encodeURIComponent(authorElement.textContent)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, "_blank");
}

// Generate a new quote
async function generateQuote() {
    const category = categoriesDropdown.value;
    if(displayedQuotes.length === 0 || isChangeCategory){
        quotes = await fetchQuotes(category);
        isChangeCategory = false;
    }

    // Filter out already displayed quotes
    const filteredQuotes = quotes.filter(quote => !displayedQuotes.includes(quote._id));
    displayQuote(filteredQuotes);
}

// Event listener for the generate button
generateBtn.addEventListener("click", generateQuote);
shareBtn.addEventListener("click", shareQuote);

let isChangeCategory = false;
function changeCategory(){
    isChangeCategory = true;
    generateQuote();
    return isChangeCategory
}
categoriesDropdown.addEventListener('change',changeCategory);

// Load preferences on page load
loadPreferences();
