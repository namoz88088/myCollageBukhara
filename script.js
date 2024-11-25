// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll reveal effect
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    const cards = document.querySelectorAll('.program-card, .gallery-item, .step, .stat');
    cards.forEach(card => {
        card.classList.add('reveal');
    });
    
    reveal(); // Initial reveal check
});

// Animate program cards on scroll
const programCards = document.querySelectorAll('.program-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

programCards.forEach(card => observer.observe(card));

// Map Instructions Toggle
function showMapInstructions() {
    document.querySelector('.map-instructions').classList.add('show');
}

function hideMapInstructions() {
    document.querySelector('.map-instructions').classList.remove('show');
}

// Hide instructions when clicking outside
document.addEventListener('click', function(event) {
    const instructions = document.querySelector('.map-instructions');
    const showButton = document.querySelector('.show-instructions');
    
    if (instructions.classList.contains('show') && 
        !instructions.contains(event.target) && 
        !showButton.contains(event.target)) {
        hideMapInstructions();
    }
});

// Simple form validation for future implementation
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form validation and submission logic here
            alert('Thank you for your submission! We will contact you soon.');
        });
    });
});
