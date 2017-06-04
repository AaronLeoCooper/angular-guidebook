module.exports = {
  "ui": {
    "port": 9001,
    "weinre": {
      "port": 8080
    }
  },
  "files": false,
  "watchEvents": [
    "change"
  ],
  "watchOptions": {
    "ignoreInitial": true
  },
  "server": false,
  "proxy": "http://localhost:4200",
  "port": 9000,
  "middleware": false,
  "serveStatic": [],
  "ghostMode": {
    "clicks": true,
    "scroll": true,
    "location": true,
    "forms": {
      "submit": true,
      "inputs": true,
      "toggles": true
    }
  },
  "logLevel": "info",
  "logPrefix": "BS",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": true,
  "rewriteRules": [],
  "open": "local",
  "browser": "default",
  "cors": false,
  "xip": false,
  "hostnameSuffix": false,
  "reloadOnRestart": false,
  "notify": true,
  "scrollProportionally": true,
  "scrollThrottle": 0,
  "scrollRestoreTechnique": "window.name",
  "scrollElements": [],
  "scrollElementMapping": [],
  "reloadDelay": 0,
  "reloadDebounce": 0,
  "reloadThrottle": 0,
  "plugins": [],
  "injectChanges": true,
  "startPath": null,
  "minify": true,
  "host": null,
  "localOnly": false,
  "codeSync": true,
  "timestamps": true
};
