const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @param {import("../types").WebpackEnvironment} env
 * @returns {import("webpack").Configuration}
 */
const config = (env) => ({
  mode: env.mode,
  entry: {
    main: path.resolve(process.cwd(), "src", "index.tsx"),
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      src: path.resolve(process.cwd(), "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
});

module.exports = config;
