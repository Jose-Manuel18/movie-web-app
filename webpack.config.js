const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/pages/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
}
