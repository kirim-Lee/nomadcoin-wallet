const template = [{
    label: "Nomadcoin Wallet",
    submenu: [{
        label: "About Nomadcoin Wallet",
        role: "about"
      },
      {
        type: "separator"
      },
      {
        label: "Services",
        role: "services",
        submenu: []
      },
      {
        type: "separator"
      },
      {
        label: "Hide Nomadcoin Wallet",
        accelerator: "Command+H",
        role: "hide"
      },
      {
        label: "Hide Others",
        accelerator: "Command+Shift+H",
        role: "hideothers"
      },
      {
        label: "Show All",
        role: "unhide"
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click: function () {
          app.quit();
        }
      }
    ]
  },
  {
    label: "Edit",
    submenu: [{
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        role: "undo"
      },
      {
        label: "Redo",
        accelerator: "Shift+CmdOrCtrl+Z",
        role: "redo"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        role: "cut"
      },
      {
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        role: "copy"
      },
      {
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        role: "paste"
      },
      {
        label: "Select All",
        accelerator: "CmdOrCtrl+A",
        role: "selectall"
      }
    ]
  }
];

export default template;