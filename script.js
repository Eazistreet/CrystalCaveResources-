let currentIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);  // Change slide every 5 seconds

showSlide(currentIndex);  // Initialize slideshow