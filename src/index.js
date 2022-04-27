const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {

  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  const menuTemplate = [{
    label: "File",
    submenu: [{
      role: "quit",
    },   
    ],
  }, 
  {
    label: "Help",
    submenu: [{
      role: "about",
    },
    ],
  },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
