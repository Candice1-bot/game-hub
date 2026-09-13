// const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };

import { createDefaultEsmPreset } from "ts-jest";

const presetConfig = createDefaultEsmPreset();

export default {
  ...presetConfig,
  testEnvironment: "jsdom",
};
