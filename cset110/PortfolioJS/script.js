// ***MOBILE DROPBAR ***
// Define Variables
const hamburger = document.querySelector(".hamburger"); // access class
const navList = document.querySelector(".nav-list");

// event listener is a function that waits for a specific event to occur on an HTML element, and then executes a specified action
// when event occurs, click, function is called
hamburger.addEventListener("click", mobileMenu);

// defines function
function mobileMenu() {
    // assigns active class
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}

// *** CLOSE MOBILE DROPBAR ***
const navLink = document.querySelectorAll(".nav-item");

// MENU DISAPPEARS WHEN NAV ITEM IS CLICKED
navLink.forEach(n => n.addEventListener("click", closeMenu));

// defines function
function closeMenu() {
    // removes active class
    hamburger.classList.remove("active");
    navList.classList.remove("active");
} 
