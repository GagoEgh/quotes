// HTML Elements
const quote_section = document.getElementById("quote-section");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const categoriesDropdown = document.getElementById("categories");
const shareBtn = document.getElementById("share-btn");
const btn_contribute = document.getElementById("btn-contribute");
const quote_contribute = document.getElementById('quote-contribute');
const success =  document.getElementById('success');
const error =  document.getElementById('error');

// variables
let displayedQuotes = [];
let  quotes = [];
let isChangeCategory = false;
let db ;

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
    const isValidQuoute = (displayedQuotes.length === 0 || isChangeCategory)&& category !=='my';
    if(isValidQuoute){
        quotes = await fetchQuotes(category);
        isChangeCategory = false;
    }
    
    if(category ==='my'){
        quotes = await getQuote();
    }

    // Filter out already displayed quotes
    const filteredQuotes = quotes.filter(quote => !displayedQuotes.includes(quote._id));
    displayQuote(filteredQuotes);
}

// Generate a quote when the category changes.
async function changeCategory(){
    isChangeCategory = true;
    displayedQuotes = [];
    if(categoriesDropdown.value !== 'my'){
        generateQuote();
    }else{

        quotes = await getQuote();
        const filteredQuotes = quotes.filter(quote => !quotes.includes(quote._id));
        displayQuote(filteredQuotes);

    }
    
}

// contribute our quote
function contributeQuote(){
    const quotes = []
    ensureDbReady();
    const text = quote_contribute.value;
    const quote ={
        author:'I',
        content: text,
        _id: Date.now().toString(),
    }

    if(quote_contribute.value){
        addInDb(quote);
        quote_contribute.value = '';
    }

}

// Opened the IndexedDB database for storing user-contributed quotes
async function ensureDbReady(){
    if (db) {
        return db;
    }

    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open('quote-db', 1);

        openRequest.onupgradeneeded = () => {
            const db = openRequest.result;
            if (!db.objectStoreNames.contains('quote')) {
                db.createObjectStore('quote', { keyPath: '_id' });
            }
        };

        openRequest.onsuccess = () => {
            db = openRequest.result;
            resolve(db);
        };

        openRequest.onerror = () => {
            reject(openRequest.error);
        };
    });
}

async function createTransaction(){
    const db = await this.ensureDbReady();
    const transaction = db.transaction('quote', 'readwrite');
    return transaction.objectStore('quote');
}

// add quote in the db
async function addInDb(data){
    try {
        const base = await ensureDbReady();
        const transaction = base.transaction('quote', 'readwrite');
        const store = transaction.objectStore('quote');
        const request = store.add(data);

        request.onsuccess = () => {
            success.classList.add('show');
            setTimeout(()=>{
                success.classList.remove('show');
            },2000)

        };

        request.onerror = () => {
            success.classList.add('show');
            setTimeout(()=>{
                error.classList.remove('show');
            },2000)

        };

    } catch (error) {
        success.classList.add('show');
        setTimeout(()=>{
            error.classList.remove('show');
        },2000)
    }
}

// get user all quotes
async function getQuote() {
    return new Promise(async (resolve, reject) => {
        try {
            const store = await this.createTransaction();
            const request = store.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        } catch (error) {
            reject(error);
        }
    });
}

// Event listener for the generate button
generateBtn.addEventListener("click", generateQuote);
shareBtn.addEventListener("click", shareQuote);
categoriesDropdown.addEventListener('change',changeCategory);
btn_contribute.addEventListener('click',contributeQuote)

// Load preferences on page load
loadPreferences();
