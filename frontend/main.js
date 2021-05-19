const { app, BrowserWindow } = require('electron');

const url = require('url');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    minWidth: 1366,
    minHeight: 768,

    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: 'file:',
      slashes: true,
    }),
  );
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}
console.log(app);
app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
