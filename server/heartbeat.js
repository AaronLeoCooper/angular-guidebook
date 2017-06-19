'use strict';

const http = require("http");

module.exports = {
  start (appName, interval) {
    const herokuUrl = `http://${appName}.herokuapp.com`;
    console.info(`~~~ Pinging ${herokuUrl} every ${interval/60000} mins ~~~`);

    global.heartbeatInterval = setInterval(function () {
      http.get(herokuUrl);
    }, interval);
  },
  stop () {
    clearInterval(global.heartbeatInterval);
  }
};
