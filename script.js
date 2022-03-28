const navBar = document.querySelector('.nav');
const navToggler = document.querySelector('.nav-toggle');
// Scroll JS
const body = document.body;
let lastScroll = 0;


// Mobile Navigation open and close
navToggler.addEventListener('click', () => {
    console.log("clicked");
    navBar.classList.toggle('nav--visible');
});

// Mobile navigation apear and disapear on scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <=0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
});