// Typewriter Effect
var typed = new Typed(".typewriter-text", {
    strings: ["Freelancer", " ", "Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Mobile Menu Toggle with Blur Effect
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.header nav a');

// Create blur overlay element
const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

// Toggle menu function
const toggleMenu = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : 'auto';
};

// Click event for menu icon
menuIcon.addEventListener('click', toggleMenu);

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Close menu when clicking outside (on overlay or blank space)
overlay.addEventListener('click', toggleMenu);

// Close menu when clicking anywhere outside the navbar
document.addEventListener('click', (event) => {
    if (navbar.classList.contains('active') && 
        !navbar.contains(event.target) && 
        !menuIcon.contains(event.target)) {
        toggleMenu();
    }
});

// Navigation Active State on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(sec => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.offsetHeight;
        const sectionId = sec.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(sectionId)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});