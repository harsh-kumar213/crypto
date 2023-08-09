document.getElementById("navbar-toggle").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});


const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);



const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});