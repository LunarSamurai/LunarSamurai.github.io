const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');

contextBridge.exposeInMainWorld('electronApi', {
    getAppPath: () => path.join(__dirname),
});

console.log("Preload script is running", "The path is: ", path.join(__dirname, 'preload.js'));

contextBridge.exposeInMainWorld('nodePath', {
    join: (...args) => path.join(...args)
    // You can expose more methods from the path module here as needed
});

contextBridge.exposeInMainWorld('mainMenu', {
    sendAction: (action) => ipcRenderer.send('action', action),
});

console.log("Preload script finished executing");