const {app, BrowserWindow} = require('electron');
const url = require('url');

function boot() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(url.format({
        pathname: 'index.html',
        protocol: 'file:',
        slashes: true
    }))

}
app.on('ready', boot)