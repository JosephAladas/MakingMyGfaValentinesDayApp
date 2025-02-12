import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 650,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false, // Hide default title bar
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
