module.exports = [
  // 提供last updated
  ['@vuepress/last-updated', {
    transformer: (timestamp, lang) => {
      return (new Date(timestamp)).toUTCString()
    }
  }],

  // 代码复制插件（vdoing主题内置）
  ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
    copyMessage: 'Copied successfully!',
    duration: 1000,
    showInMobile: false
  }]
] 