// Handle action events
// This assumes that your HTML elements have appropriate IDs for each action
document.addEventListener('click', (event) => {
    const action = event.target.id; // Get the ID of the clicked element
    console.log(`Action received: ${action}`);

    switch (action) {
        case 'view-results':
            console.log('Viewing results...');
            // Implement viewing results
            break;
        case 'upload':
            console.log('Opening upload dialog...');
            // Implement upload functionality
            break;
        case 'start-exam':
            console.log('Starting exam...');
            window.location.href = 'Services/StartHere/startHereService.html';
           
            break;
        case 'admin-login':
            console.log('Admin logging in...');
            // Implement admin login functionality
            break;
        case 'options':
            console.log('Opening options...');
            // Implement opening options functionality
            break;
    }
})