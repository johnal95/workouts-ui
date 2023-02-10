/**
 * @param {import("../types").WebpackEnvironment} _env
 * @returns {import("webpack").Configuration}
 */
const config = (_env) => ({
  devtool: "eval",
  plugins: [],
  module: {
    rules: [],
  },
});

module.exports = config;
