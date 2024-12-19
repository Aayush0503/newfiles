// JavaScript for the navigation bar toggle (mobile view)
function toggleMenu() {
    const navBar = document.querySelector('.nav-bar ul');
    navBar.classList.toggle('active');
}

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic year in the footer
document.addEventListener("DOMContentLoaded", () => {
    const footerYear = document.querySelector('.footer-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});

// Highlight active navigation link
const navLinks = document.querySelectorAll('.nav-bar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Add hover effects to social media icons
const socialIcons = document.querySelectorAll('.footer-right a img');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.5)';
        icon.style.transition = 'transform 0.2s';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});
