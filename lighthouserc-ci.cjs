const baseConfig = require("./web/lighthouserc.cjs");

const config = structuredClone(baseConfig);
config.ci.collect.staticDistDir = "./web/dist";
config.ci.upload = {
  ...config.ci.upload,
  outputDir: "./web/.lighthouseci",
};

module.exports = config;
