const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing',
  title: "Advanced English 6th Edition",
  description: 'A comprehensive English learning resource',
  base: '/', // 如果部署到子路径需要修改
  head,
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },
  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/head.js',
    '.vuepress/config/themeConfig.js',
    '.vuepress/config/plugins.js'
  ]
} 