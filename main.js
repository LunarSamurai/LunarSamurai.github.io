const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs'); // Add this line to import the fs module
const path = require('path');
const os = require('os');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);


function createWindow() {
    // Create the browser window.
    console.log(path.join(__dirname, 'preload.js'));
    mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            // Ensure nodeIntegration is set to false for security
            nodeIntegration: true,
            contentSecurityPolicy: "script-src 'self' 'unsafe-inline';",
            enableRemoteModule: false
        }
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});


ipcMain.on('action', (event, action) => {
    console.log(`Action received: ${action}`);
    console.log('Click received:'+ event);
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
            if (mainWindow) {
                mainWindow.loadFile('Services/StartHere/startHereService.html'); // Load test.html in mainWindow
            } else {
                console.error('The mainWindow is not initialized.');
            }
            break;
        case 'admin-login':
            console.log('Admin logging in...');
            break;
        case 'options':
            console.log('Opening options...');
            // Implement opening options
            break;
    }
});


// Quit when all windows are closed, except on macOS. There,
// it's common for applications and their menu bar to stay active
// until the user quits explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
