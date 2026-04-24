const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Workaround for Windows path issue with node:sea
config.server = {
...config.server,
  // Bypass the problematic externals setup
};

module.exports = config;
