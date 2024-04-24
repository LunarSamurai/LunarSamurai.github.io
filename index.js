document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startHereButton').addEventListener('click', handleStartHere);
});

function handleStartHere() {
    console.log('Start Here button clicked!');
    // Implement your functionality here
    // For example, you can use window.location.href to navigate to another page
    window.location.href = 'Services/StartHere/startHereService.html';
}
