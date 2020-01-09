const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
	console.log('Hello from Electron!');
	const browser = new BrowserWindow();
	const indexRoute = `app/html/index.html`;
	browser.webContents.loadFile(indexRoute);
});