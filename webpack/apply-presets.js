const { merge } = require("webpack-merge");

/**
 * @param {import("./types").WebpackEnvironment} env
 * @returns {import("webpack").Configuration}
 */
const applyPresets = (env) => {
  const { presets = "" } = env;

  const mergedPresets = presets.split(",").filter(Boolean);

  const mergedConfigs = mergedPresets.map((presetName) => {
    try {
      const preset = require(`./presets/webpack.${presetName}`);
      return preset(env);
    } catch (err) {
      throw new Error(`Preset ${presetName} not found in <root>/webpack/presets/*`);
    }
  });

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;
