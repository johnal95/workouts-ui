const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

/**
 * @param {import("./types").WebpackEnvironment} _env
 * @returns {import("webpack").Configuration}
 */
const preset = (_env) => ({
  plugins: [new BundleAnalyzerPlugin()],
});

module.exports = preset;
