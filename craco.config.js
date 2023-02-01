/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "assets"),
      "@css": path.resolve(__dirname, "src/css"),
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
};