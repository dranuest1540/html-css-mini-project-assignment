// BURGER CONFIGURATION
const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navOption = document.querySelector(".nav-option");
const icon = document.querySelector(".nav-toggle i");

toggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    navOption.classList.toggle("active");
    toggle.classList.toggle("active");

    if(toggle.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Typed JS Configuration
const typed = new Typed('#typed', {
    strings: [
        'modern learning platform',
        'future ready skills',
        'career starter today',
        'online learning hub'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '|',
    loop: true,
    backDelay: 2000,
});
