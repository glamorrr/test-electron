const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versionsAll', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: (data) => ipcRenderer.invoke('ping', data),
    // we can also expose variables, not just functions
});

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    };

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`#${dependency}-version`, process.versions[dependency]);
    }
});
