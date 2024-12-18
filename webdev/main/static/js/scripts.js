// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const scrollContents = document.querySelectorAll('.scroll-content');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the visible class when in view
                    entry.target.classList.add('visible');
                } else {
                    // Remove the visible class when out of view
                    entry.target.classList.remove('visible');
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    scrollContents.forEach((content) => observer.observe(content));
});
