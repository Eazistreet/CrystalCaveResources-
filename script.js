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




// Optional: Automatically show the first sector on page load
document.addEventListener('DOMContentLoaded', function() {
    showSector('sector1');
});
 // JavaScript function to handle tab switching
 function showTab(tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    // Remove 'active' class from all tabs
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
    // Add 'active' class to the selected tab
    event.target.classList.add('active');
}

// Initialize the first tab as active
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab').click();
});
 // JavaScript function to handle tab switching
 function showTab(tabId, event) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    // Remove 'active' class from all tabs
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
    // Add 'active' class to the selected tab
    event.target.classList.add('active');
}

// Initialize the first tab as active
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab').click();
});
