// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.style.opacity = 1;
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        el.style.visibility = 'hidden';
        el.style.opacity = 0;
        el.style.transition = 'opacity 0.5s ease-out';
        observer.observe(el);
    });

    const slider = document.querySelector('.screenshot-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slideWidth = 270; // Width of each slide including gap
    
    function slide(direction) {
        const scrollAmount = direction === 'left' ? -slideWidth : slideWidth;
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
    
    prevBtn.addEventListener('click', () => slide('left'));
    nextBtn.addEventListener('click', () => slide('right'));
    
    // Hide/show buttons based on scroll position
    slider.addEventListener('scroll', () => {
        const isAtStart = slider.scrollLeft === 0;
        const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
        
        prevBtn.style.opacity = isAtStart ? '0.5' : '1';
        nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
    });
});