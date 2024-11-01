// ***MOBILE DROPBAR ***
// Define Variables
const hamburger = document.querySelector(".hamburger"); // access class
const navigation = document.querySelector(".navigation");

// event listener is a function that waits for a specific event to occur on an HTML element, and then executes a specified action
// when event occurs, click, function is called
hamburger.addEventListener("click", mobileMenu);

// defines function
function mobileMenu() {
    // assigns active class
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
}

// *** CLOSE MOBILE DROPBAR ***
const navLink = document.querySelectorAll(".nav-item");

// MENU DISAPPEARS WHEN NAV ITEM IS CLICKED
navLink.forEach(n => n.addEventListener("click", closeMenu));

// defines function
function closeMenu() {
    // removes active class
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
} 
// Detect scroll and toggle the navbar style
window.onscroll = function() {
    const navBar = document.querySelector('.nav-bar');
    const heroTextBox = document.querySelector('.hero-text-box');
    
    // Get the bottom position of the hero-text-box section
    const heroBottom = heroTextBox.getBoundingClientRect().bottom;

    // Add or remove the 'scrolled' class based on scroll position
    if (heroBottom <= 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
};

// Toggle hamburger menu (assuming you have this functionality)
function toggleMenu() {
    // Toggle the menu (implement functionality as needed)
}