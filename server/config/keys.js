const dev = require('./dev');
const prod = require('./prod');

const mode = process.env.NODE_ENV;

if (mode === 'dev') {
  module.exports = dev;
} else if (mode === 'prod') {
  module.exports = prod;
} else {
  process.env.NODE_ENV = 'dev';
  module.exports = dev;
}
