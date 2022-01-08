const path = require("path");

module.exports = {
  entry: "./chart.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index-bundeled.js",
  },
  mode: "development",
  experiments: {
    topLevelAwait: true,
  },
};
