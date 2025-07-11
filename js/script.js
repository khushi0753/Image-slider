// Image array - replace these with your actual image paths
const images = [
    'images/Image1.jpg',
    'images/Image2.jpg',
    'images/Image3.jpg',
    'images/Image4.jpg',
    'images/Image5.jpg',
    'images/Image6.jpg',
    'images/Image7.jpg',
    'images/Image8.jpg'
];

// DOM elements
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');
const autoplayToggle = document.getElementById('autoplay-toggle');
const intervalInput = document.querySelector('.interval-input');

// State variables
let currentSlide = 0;
let autoplayInterval;
let autoplayDelay = 3000; // Default 3 seconds

// Initialize the slider
function initSlider() {
    // Create slides
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="Slide ${index + 1}">`;
        slider.appendChild(slide);
    });

    // Create dots
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Start autoplay if enabled
    if (autoplayToggle.checked) {
        startAutoplay();
    }
}

// Go to specific slide
function goToSlide(index) {
    // Wrap around if out of bounds
    if (index >= images.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = images.length - 1;
    } else {
        currentSlide = index;
    }

    // Update slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Next slide
function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Start autoplay
function startAutoplay() {
    clearInterval(autoplayInterval); // Clear any existing interval
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
}

// Stop autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listeners
prevBtn.addEventListener('click', () => {
    prevSlide();
    if (autoplayToggle.checked) {
        // Reset autoplay timer when user interacts
        stopAutoplay();
        startAutoplay();
    }
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    if (autoplayToggle.checked) {
        // Reset autoplay timer when user interacts
        stopAutoplay();
        startAutoplay();
    }
});

autoplayToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        startAutoplay();
    } else {
        stopAutoplay();
    }
});

intervalInput.addEventListener('change', (e) => {
    const newInterval = parseInt(e.target.value) * 1000;
    if (newInterval >= 1000 && newInterval <= 10000) {
        autoplayDelay = newInterval;
        if (autoplayToggle.checked) {
            stopAutoplay();
            startAutoplay();
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initSlider);

// Touch swipe functionality
const sliderContainer = document.querySelector('.slider-container');
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
}
