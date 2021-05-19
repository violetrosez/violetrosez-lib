# 介绍

webpack 是如何打包的
实现一个支持全量加载/按需加载的组件库，目前内部并没有组件

# 安装

```
npm i violetrosez-lib -S
```

# 使用

该组件库可 整体加载，也支持 按需加载

## 1. 全量引入

```javascript
import violetrosezLib from "violetrosez-lib";
```

## 2. 按需加载

import { comp1 } from "violetrosez-lib";

按需加载通过 `babel-plugin-component` 插件实现

### 2.1 安装 `babel-plugin-component`

```
npm i babel-plugin-component -D
```

### 2.2 安装 babel-loader、@babel/core

```
npm install --save-dev babel-loader @babel/core
```

### 2.3 配置 webpack

```javascript
module.exports = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
      ...
    ]
  }
  ...
}
```

### 2.4 安装 @babel/preset-env

```
npm install @babel/preset-env --save-dev
```

### 2.5 配置 .babelrc 文件(或者配置 babel.congig.js)

```
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@liyongning/lyn-comp-lib",
        "style": false
      }
    ]
  ]
}
```
