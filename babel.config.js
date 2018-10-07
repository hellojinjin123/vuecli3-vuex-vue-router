module.exports = {
  presets: ["@vue/app"],
  plugins:[
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ],
  ignore:[  './src/assets/mui/js/mui.js']  // 忽略 严格模式中的 mui（mui 不支持严格模式）
}