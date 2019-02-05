const {app, BrowserWindow} = require('electron');
let win;

function createWindow() {
	win = new BrowserWindow({width: 1920, height: 1080, backgroundColor: '#ffffff'});
	win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`);
	win.on('closed', function () {
		win = null;
	});
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
	if (process.platform !== 'drawin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (win === null) {
		createWindow();
	}
});
