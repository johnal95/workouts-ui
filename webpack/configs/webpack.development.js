/**
 * @param {import("../types").WebpackEnvironment} _env
 * @returns {import("webpack").Configuration}
 */
const config = (_env) => ({
  devtool: "eval",
  devServer: {
    hot: true,
    open: false,
    port: 3030,
    historyApiFallback: true,
  },
  plugins: [],
  module: {
    rules: [],
  },
});

module.exports = config;
