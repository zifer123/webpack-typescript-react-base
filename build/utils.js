const path = require('path');

exports.resolve = function resolve(url) {
  return path.resolve(__dirname, url);
};
