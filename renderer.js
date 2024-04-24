document.addEventListener('DOMContentLoaded', () => {
    const appPath = window.electronApi.getAppPath();
    console.log('Application path:', appPath);

    setupActionButtons();
});

function setupActionButtons() {
    const actions = {
        'lefter': 'view-results',
        'left': 'upload',
        'center': 'start-exam',
        'right': 'admin-login',
        'righter': 'options'
    };

    Object.entries(actions).forEach(([className, action]) => {
        const element = document.querySelector(`.${className}`);
        if (element) {
            element.addEventListener('click', () => window.mainMenu.sendAction(action));
        }
    });
}

function handleError(error) {
    console.error("Error:", error);
}
