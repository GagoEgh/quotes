// db
const quotesDb = [
    {
        category:"freedom",
        quotes:[
            {
                author: "Albert Einstein",
                content: "Laws alone can not secure freedom of expression; in order that every man present his views without penalty there must be spirit of tolerance in the entire population.",
                _id: "iCcQwfTUU3"
            },
            {
                
                author: "Winston Churchill",
                content: "All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
                _id: "JZm3q3illA"
            },
            {
                
                author: "Parker Palmer",
                content: "America's freedom of religion, and freedom from religion, offers every wisdom tradition an opportunity to address our soul-deep needs: Christianity, Judaism, Islam, Buddhism, Hinduism, secular humanism, agnosticism and atheism among others.",
                _id: "FMZiiLHfCOc"
            },
            {
                
                author: "Antoine de Saint-Exupéry",
                content: "I know but one freedom and that is the freedom of the mind.",
                _id:"zWLPanirMTAh"
            },
            {
                _id: "XjDEdNTOQrPx",
                author: "Mahatma Gandhi",
                content: "Freedom is not worth having if it does not connote freedom to err."
            },
            {
                _id: "icKAUNx1oTrA",
                author: "Thích Nhất Hạnh",
                content: "The amount of happiness that you have depends on the amount of freedom you have in your heart."
            },
            {
                author: "Benjamin Franklin",
                content: "Without freedom of thought, there can be no such thing as wisdom - and no such thing as public liberty wit",
                _id: "Jsh8Bmjmnf"
            },
            {
                author: "Epictetus",
                content: "Freedom is the right to live as we wish.",
                _id: "cEntvthXVp1"
            },
            {
                
                author: "Jean-Paul Sartre",
                content: "Freedom is what you do with what's been done to you.",
                _id: "nDXa5iqd6KKD"
            }
        ]
    },
    {
        category:"education",
        quotes:[
            {
                author: "Johann Wolfgang von Goethe",
                content: "In the end we retain from our studies only that which we practically apply.",
                _id: "KMNxDlj3xrMA"
            },
            {
                author: "Albert Einstein",
                content: "It is a miracle that curiosity survives formal education.",
                _id: "vbvqg3V6j8"
            },
            {
                author: "Albert Einstein",
                content: "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
                _id: "4FLFmHaK7-" 
            },
            {
                author: "Albert Einstein",
                content: "Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.",
                _id: "xWusiklxiy"
            },
            {
                author: "Albert Einstein",
                content: "Ethical axioms are found and tested not very differently from the axioms of science. Truth is what stands the test of experience.",
                _id: "8Oj6iwQ1xp"
            },
            {
                author: "Albert Einstein",
                content: "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
                _id: "2ts3DrACVY"
            },
            {
                author: "Albert Einstein",
                content: "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
                _id: "b437W9Z_RN_"
            }
        ]
    },
    {
        
        category:"business",
        quotes:[
            {
                author: "Theodore Isaac Rubin",
                content: "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.",
                _id: "Aooogq1lu-"
            },
            {
                author: "Warren Bennis",
                content: "Trust is the lubrication that makes it possible for organizations to work.",
                _id: "WPXF6M0Yn_Y"
            },
            {
                author: "Jeff Bezos",
                content: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
                _id: "x1ekufax6w"
            },
            {
                author: "Harold Geneen",
                content: "In the business world, everyone is paid in two coins: cash and experience. Take the experience first; the cash will come later.",
                _id: "2Ww5TB860z0"
            },
            {
                author: "Henry Ford",
                content: "A business that makes nothing but money is a poor business.",
                _id: "xic44lsEdNl"
            },
            {
                author: "Peter Drucker",
                content: "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.",
                _id: "RiULc-0Ak0"
            },
            {
                author: "Paul Getty",
                content: "If you owe the bank $100 that's your problem. If you owe the bank $100 million, that's the bank's problem.",
                _id: "CEURHvpb3u"
            },
            {
                author: "Dee Hock",
                content: "An organization, no matter how well designed, is only as good as the people who live and work in it.",
                _id: "pNnzE7wpM0W"
            },
            {
                author: "Tom Brokaw",
                content: "It's easy to make a buck. It's a lot tougher to make a difference.",
                _id: "SnxKyCAPxV"
            }
        ]
    },
    {
        category:"technology",
        quotes:[
            {
                author: "Henri Poincaré",
                content: "It is through science that we prove, but through intuition that we discover.",
                _id: "VDDodhULiss2"
            },
            {
                author: "Thomas Edison",
                content: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
                _id: "6pQGyzlfHb"
            },
            {
                author: "John Lasseter",
                content: "The art challenges the technology, and the technology inspires the art.",
                _id: "GlKWBC1r__"
            },
            {
                author: "Steve Jobs",
                content: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.",
                _id: "69Ldsxcdm-"
            },
            {
                author: "Cory Doctorow",
                content: "This is why I loved technology: if you used it right, it could give you power and privacy.",
                _id: "tShZNRagRX"
            },
            {
                author: "Douglas Coupland",
                content: "TV and the Internet are good because they keep stupid people from spending too much time out in public.",
                _id: "qVYnD_eLg5"
            },
            {
                author: "Laurie Anderson",
                content: "Technology is the campfire around which we tell our stories.",
                _id: "Y_5ywwfjw7"
            },
            {
                author: "Douglas Adams",
                content: "We are stuck with technology when what we really want is just stuff that works.",
                _id: "pOg3HfPpmL"
            },
            {
                author: "Libby Larsen",
                content: "The great myth of our times is that technology is communication.",
                _id: "GLwOgSgQOg"
            }
        ]
            
    },
    {
        category:"love",
        quotes:[
            {
                author: "Richard Bach",
                content: "If you love someone, set them free. If they come back, they're yours; if they don't, they never were.",
                _id: "DRrFFyFqWhQD"
            },
            {
                author: "Richard Bach",
                content: "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
                _id: "5UaK7cijxqOE"
            },
            {
                author: "Joseph Campbell",
                content: "Love is a friendship set to music.",
                _id: "J-47k8g-i"
            },
            {
                author: "A. A. Milne",
                content: "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
                _id: "fhyB06UQ9hjL"
            },
            {
                author: "Charles Péguy",
                content: "Love is rarer than genius itself. And friendship is rarer than love.",
                _id: "NZjOnL1Piu"
            },
            {
                author: "Michel de Montaigne",
                content: "If there is such a thing as a good marriage, it is because it resembles friendship rather than love.",
                _id: "hhDqMdHw5w"
            }
        ]
    },
    {
        category:"wisdom",
        quotes:[
            {
                author: "The Buddha",
                content: "The thing that is disliked by me is also disliked by others. Since I dislike this thing, how can I inflict it on someone else?",
                _id: "wiVouCxUSmn"
            },
            {
                author: "The Buddha",
                content: "Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.",
                _id: "fEr2kx4_Nvt"
            },
            {
                author: "The Buddha",
                content: "Just as a mother would protect her only child with her life, even so let one cultivate a boundless love towards all beings.",
                _id: "sLWD2qRCK4"
            },
            {
                author: "The Buddha",
                content: "A disciplined mind brings happiness.",
                _id: "smbfaOldHD"
            },
            {
                author: "The Buddha",
                content: "Some do not understand that we must die, But those who do realize this settle their quarrels.",
                _id: "rfJp893hM2Z"
            },
            {
                author: "The Buddha",
                content: "The world is afflicted by death and decay. But the wise do not grieve, having realized the nature of the world.",
                _id: "MPTVFOHP7ds"
            },
            {
                author: "The Buddha",
                content: "As an elephant in the battlefield withstands arrows shot from bows all around, even so shall I endure abuse.",
                _id: "7FWID1UNP8o"
            },
            {
                author: "Charles Dickens",
                content: "Train up a fig tree in the way it should go, and when you are old sit under the shade of it.",
                _id: "j7W6pP1XiG"
            }
        ]
    },
    {
        category:'my',
        quotes:[]
    }

]

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
let db ;

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
    let quotes = await getQuote(category);

    // Filter out already displayed quotes
    const filteredQuotes = quotes.filter(quote => !displayedQuotes.includes(quote._id));
    displayQuote(filteredQuotes);
}

// Generate a quote when the category changes.
async function changeCategory(){
    displayedQuotes = [];
    generateQuote();
}

// contribute our quote
async function contributeQuote(){
    openIndexDB();
    if(quote_contribute.value){
        displayedQuotes = await getAllQuotes();
        const text = quote_contribute.value;
        const contribute = await getQuote('my')
        const quote ={
            author:'my',
            content: text,
            _id: Date.now().toString(),
        }
     
        contribute.push(quote);
        displayedQuotes =   displayedQuotes.map((item)=>{
            if(item.category === 'my'){
                item = {...item,quotes:contribute}
            }
            return item
        })
     
        putDataInDB(displayedQuotes);
        quote_contribute.value = '';
    }
}

// Opened the IndexedDB database for storing user-contributed quotes
async function openIndexDB(){
    if (db) {
        return db;
    }

    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open('quote-db', 1);
        openRequest.onupgradeneeded = () => {
            const db = openRequest.result;
            if (!db.objectStoreNames.contains('quote')) {
                db.createObjectStore('quote', {keyPath: 'category'});
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
    const db = await openIndexDB();
    const transaction = db.transaction('quote', 'readwrite');
    return transaction.objectStore('quote');
}

// add quote in the db
async function putDataInDB(data = quotesDb){
    try {
        const base = await openIndexDB();
        const transaction = base.transaction('quote', 'readwrite');
        const store = transaction.objectStore('quote');
        data.forEach((item)=>{
            const request = store.put(item);
            request.onsuccess = () => {
                success.classList.add('show');
                setTimeout(()=>{
                    success.classList.remove('show');
                },2000)
    
            };
    
            request.onerror = (er) => {
                error.classList.add('show');
                setTimeout(()=>{
                    error.classList.remove('show');
                },2000)
            };
        })
        displayedQuotes = await getAllQuotes()
    } catch (error) {
        error.classList.add('show');
        setTimeout(()=>{
            error.classList.remove('show');
        },2000)
    }
}

// get category quotes
async function getQuote(category) {
    return new Promise(async (resolve, reject) => {
        try {
            const store = await this.createTransaction();
            const request = store.get(category);
            request.onsuccess = () => {
                resolve(request.result.quotes);
            };

            request.onerror = () => {
                reject(request.error);
            };
        } catch (error) {
            reject(error);
        }
    });
}

// get user quotes
async function getAllQuotes() {
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

// get data in  indexDb
async function isDataInIndexedDB() {
    try {
        const db = await openIndexDB();
        const transaction = db.transaction('quote', 'readonly');
        const store = transaction.objectStore('quote');
        const countRequest = store.count();

        return new Promise((resolve, reject) => {
            countRequest.onsuccess = () => {
                resolve(countRequest.result > 0); // Returns true if there is data
            };

            countRequest.onerror = () => {
                reject(countRequest.error);
            };
        });
    } catch (error) {
        return false;
    }
}


async function getDataInIndexDb(){
    const hasData = await isDataInIndexedDB();
    if (hasData) {
        putDataInDB(displayedQuotes);
    } else {
        putDataInDB();
    }
}

// Event listener for the generate button
generateBtn.addEventListener("click", generateQuote);
shareBtn.addEventListener("click", shareQuote);
categoriesDropdown.addEventListener('change',changeCategory);
btn_contribute.addEventListener('click',contributeQuote)

// Load preferences on page load
loadPreferences();
getDataInIndexDb()

