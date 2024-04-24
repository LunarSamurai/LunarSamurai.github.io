document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null, // using the viewport as the root
        threshold: 0.1, // 10% of the section needs to be in view
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the section once it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
