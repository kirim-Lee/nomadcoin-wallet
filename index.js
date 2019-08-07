const electron = require("electron");
const path = require("path"),
  url = require("url"),
  menu = require('./menu');

const {
  app,
  BrowserWindow,
  Menu
} = electron;

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    title: "Nomadcoin Wallet",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      webviewTag: true

    }
  });

  const ENV = process.env.ENV;

  if (ENV && ENV.trim() === "dev") {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();

  } else {
    Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "build/index.html"),
        protocol: "file",
        slashes: true
      })
    );
  }

  mainWindow.on("closed", () => {
    mainWindow === null;
  });
}

app.on(
  "window-all-closed",
  () => (process.platform !== "darwin" && app.quit()) || null
);
app.on("activate", (mainWindow === null && createWindow) || null);
app.on("ready", createWindow);