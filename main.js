const electron = require("electron"),
  path = require("path"),
  url = require("url");

const {
  app,
  BrowserWindow
} = electron;

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    title: 'Nomadcoin Wallet'
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true
    })
  );

  mainWindow.on('closed', () => {
    mainWindow === null;
  })
}

app.on('window-all-closed', process.platform !== 'darwin' && app.quit || null);
app.on('activate', mainWindow === null && createWindow || null);
app.on("ready", createWindow);