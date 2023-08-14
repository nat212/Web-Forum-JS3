const path = require("path");

module.exports = {
  entry: "./to_bundle/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "bundled"),
    filename: "bundle.js",
  },
};
