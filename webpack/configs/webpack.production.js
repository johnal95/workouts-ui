const path = require("path");

/**
 * @param {import("../types").WebpackEnvironment} _env
 * @returns {import("webpack").Configuration}
 */
const config = (_env) => ({
  devtool: "nosources-source-map",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  plugins: [],
  module: {
    rules: [],
  },
});

module.exports = config;
