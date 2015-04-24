var app = require('app')
var BrowserWindow = require('browser-window')
var path = require('path')
var win

app.on('windows-all-closed', function() {
    win = undefined;
    app.quit();
});

app.on('ready', function () {
  win = new BrowserWindow({title: 'test-crash'})

  win.loadUrl('file://' + path.join(__dirname, 'index.html'))
})
