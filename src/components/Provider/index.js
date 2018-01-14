// The tooling will check what environment you are in and select the module based on it.

if(process.env.NODE_ENV === 'production') {
  module.exports = require('./Provider.prod');
} else {
  module.exports = require('./Provider.dev');
}
