const path = require("path");

module.exports = {
  // 实际开发时这部分可以自动生成，可采用 element-ui 的方式
  // 按需加载 需要将入口配置为多入口模式，一个组件 一个入口
  entry: {
    comp1: "./packages/module1/comp1.js",
    comp2: "./packages/module2/comp2.js",
  },
  mode: "development",
  output: {
    path: path.join(__dirname, "./lib"),
    filename: "[name].js",
    // umd 规范
    libraryTarget: "umd",
    globalObject: "this",

    library: "violetrosez-lib",
    libraryExport: "default",
  },
};
