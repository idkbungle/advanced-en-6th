module.exports = [
  // 全文搜索插件
  ['fulltext-search'],
  
  // 代码复制插件
  ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
    copyMessage: 'Copied successfully!',
    duration: 1000,
    showInMobile: false
  }],

  // 演示块插件
  ['demo-block', {
    settings: {
      jsfiddle: false,
      codepen: true,
      horizontal: false
    }
  }],

  // 放大镜插件
  ['vuepress-plugin-zooming', {
    selector: '.theme-vdoing-content img:not(.no-zoom)',
    options: {
      bgColor: 'rgba(0,0,0,0.6)'
    },
  }],

  // 百度统计
  ['vuepress-plugin-baidu-tongji', {
    hm: '503f098e7e5b3a5b5d8c5fc2938af002'
  }],

  // 提供last updated
  ['@vuepress/last-updated', {
    transformer: (timestamp, lang) => {
      return (new Date(timestamp)).toUTCString()
    }
  }]
] 