const { merge } = require("webpack-merge");

const baseConfig = require("./configs/webpack.base");
const presetsConfig = require("./apply-presets");

/** @param {import("./types").WebpackEnvironment} env */
const modeConfig = (env) => require(`./configs/webpack.${env.mode}`)(env);

/**
 * @param {import("./types").WebpackEnvironment} env
 * @returns {import("webpack").Configuration}
 */
const config = (env) => {
  env.mode = env.mode ?? "production";
  return merge(baseConfig(env), modeConfig(env), presetsConfig(env));
};

module.exports = config;
