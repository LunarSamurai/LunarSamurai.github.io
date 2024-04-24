const sendEmail = require('sendEmail.js'); // Assuming sendEmail.js is in the same directory
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

    // Function to handle feedback submission
    const submitFeedback = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const feedbackText = document.getElementById('feedback').value; // Get the feedback text

        // Call the sendEmail function with the feedback text
        sendEmail(feedbackText);
    };
    // Attach the submitFeedback function to the form submission event
    document.getElementById('feedback-form').addEventListener('submit', submitFeedback);
});
