/**
 * Function to handle the intersection observer for sections.
 */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    // Options for the intersection observer
    const options = {
        root: null, // Using the viewport as the root
        threshold: 0.1, // 10% of the section needs to be in view
        rootMargin: "0px"
    };

    // Intersection observer callback function
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the section once it's visible
            }
        });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
