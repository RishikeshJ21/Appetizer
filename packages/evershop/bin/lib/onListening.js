const boxen = require('boxen');
const { success } = require('@evershop/evershop/src/lib/log/debuger');
const normalizePort = require('./normalizePort');

const port = normalizePort();
/**
 * Event listener for HTTP server "listening" event.
 */
module.exports = function onListening() {
  success(
    boxen(`Your website is running at "appetizer.live:${port}"`, {
      title: 'EverShop',
      titleAlignment: 'center',
      padding: 1,
      margin: 1,
      borderColor: 'green'
    })
  );
};
