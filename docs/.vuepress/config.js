module.exports = {
  title: 'Advanced English 6th Edition',
  description: 'Advanced English learning materials',
  theme: 'vdoing',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'english, learning, advanced' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Units', 
        items: [
          { text: 'Unit 1', link: '/units/unit1/' },
          { text: 'Unit 2', link: '/units/unit2/' },
          { text: 'Unit 3', link: '/units/unit3/' },
          { text: 'Unit 4', link: '/units/unit4/' },
          { text: 'Unit 5', link: '/units/unit5/' },
          { text: 'Unit 6', link: '/units/unit6/' },
          { text: 'Unit 7', link: '/units/unit7/' },
          { text: 'Unit 8', link: '/units/unit8/' },
          { text: 'Unit 9', link: '/units/unit9/' },
          { text: 'Unit 10', link: '/units/unit10/' },
          { text: 'Unit 11', link: '/units/unit11/' },
          { text: 'Unit 12', link: '/units/unit12/' },
        ]
      },
    ],
    sidebar: 'structuring',
    sidebarDepth: 2,
    logo: '/logo.png',
    repo: 'your-github-username/advanced-en-6th',
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page',
    
    // vdoing theme config
    category: false,
    tag: false,
    archive: false,
    categoryText: 'Random',
    bodyBgImg: '',
    contentBgStyle: 1,
    
    // footer
    footer: {
      createYear: new Date().getFullYear(),
      copyrightInfo: 'Advanced English 6th Edition | MIT License',
    },
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },
  plugins: [
    ['vuepress-plugin-baidu-tongji', {
      hm: 'xxxxxxxx',
    }],
    ['one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: 'Copied!',
      duration: 1000,
      showInMobile: false,
    }],
    ['demo-block', {
      settings: {
        jsfiddle: false,
        codepen: true,
        horizontal: false,
      },
    }],
  ],
}
