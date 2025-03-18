const slidesContainer = document.querySelector('.slideshow-container');
const quotes = [];
const backgroundImages = [
    'images/background1.jpg',
    'images/background2.jpg',
    'images/background3.jpg',
    'images/background4.jpg',
];

let currentSlide = 0;

// Function to fetch quotes from an API
async function fetchQuotes() {
    try {
        const response = await fetch('https://api.quotable.io/quotes?limit=5'); // Fetching 5 quotes
        const data = await response.json();
        data.results.forEach(quote => {
            quotes.push(quote.content);
        });
        startSlideshow();
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

// Function to show a quote and change background
function showQuote() {
    const currentQuote = quotes[currentSlide];
    const slide = document.createElement('div');
    slide.className = 'mySlides fade active';
    slide.style.backgroundImage = `url(${backgroundImages[currentSlide % backgroundImages.length]})`;
    slide.innerHTML = `<div class="quote">${currentQuote}</div>`;
    slidesContainer.appendChild(slide);

    // Hide the slide after a delay and prepare for the next one
    setTimeout(() => {
        slide.classList.remove('active');
        setTimeout(() => {
            slide.remove();
        }, 1000);
        
        currentSlide = (currentSlide + 1) % quotes.length;
        showQuote();
    }, 3000);
}

// Function to start the slideshow
function startSlideshow() {
    showQuote();
}

// Initialize the application
fetchQuotes();