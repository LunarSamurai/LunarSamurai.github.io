document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startHereButton').addEventListener('click', handleStartHere);
});

function handleStartHere() {
    console.log('Start Here button clicked!');
    window.location.href = 'Services/StartHere/startHereService.html';
}
