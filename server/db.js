// db.js
const installed = require('./installed');
const uninstalled = require('./uninstalled');

// Should export a function which return an object
module.exports = () => ({
  installed,
  uninstalled,
});
