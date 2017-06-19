'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const historyApiFallback = require('express-history-api-fallback');

const heartbeat = require('./heartbeat');
const port = process.env.PORT || 8080;
const root = path.join(__dirname, '../', 'dist');

const App = express();

App.use(morgan('tiny'));
App.use(express.static(root));
App.use(historyApiFallback('index.html', { root }));

App.listen(port, function () {
  console.info(`~~~~~ Serving at port: ${port} ~~~~~`);

  heartbeat.start('angular-guidebook', 60000 * 15);
});
