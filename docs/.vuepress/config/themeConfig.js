module.exports = {
  nav: [
    { text: 'Home', link: '/' },
    {
      text: 'Units', link: '/units/', items: [
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
    { text: 'GitHub', link: 'https://github.com/idkbungle/advanced-en-6th' }
  ],
  
  sidebarDepth: 2,
  logo: '/img/logo.png',
  repo: 'idkbungle/advanced-en-6th',
  searchMaxSuggestions: 10,
  lastUpdated: 'Last Updated',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: 'Edit this page on GitHub',

  // 以下是vdoing主题相关配置
  category: false, // 是否打开分类功能
  tag: false, // 是否打开标签功能
  archive: true, // 是否打开归档功能

  // 侧边栏
  sidebar: {
    mode: 'structuring', // 侧边栏模式
    collapsable: false, // 是否可折叠
  },

  // 文章默认的作者信息
  author: {
    name: 'idkbungle',
    link: 'https://github.com/idkbungle'
  },

  // 博主信息
  blogger: {
    avatar: '/img/avatar.jpg',
    name: 'Advanced English',
    slogan: 'Learning English Step by Step'
  },

  // 社交图标
  social: {
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/idkbungle/advanced-en-6th'
      }
    ]
  },

  // 页脚信息
  footer: {
    createYear: 2024,
    copyrightInfo: 'Advanced English 6th Edition | <a href="https://github.com/idkbungle/advanced-en-6th" target="_blank">GitHub</a>'
  },

  // vdoing主题配置
  updateBar: {
    showToArticle: false,
  },

  // 扩展自动生成frontmatter
  extendFrontmatter: {
    author: {
      name: 'idkbungle',
      link: 'https://github.com/idkbungle'
    }
  }
} 