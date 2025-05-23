# Deployment Guide

## Cloudflare Pages 部署指南

### 1. 连接 GitHub 仓库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Pages** 部分
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 选择你的 GitHub 账户并授权
6. 选择 `advanced-en-6th` 仓库

### 2. 配置构建设置

在项目设置页面，配置以下构建设置：

- **Framework preset**: `VuePress`
- **Build command**: `npm run build`
- **Build output directory**: `docs/.vuepress/dist`
- **Root directory**: `/` (保持默认)
- **Node.js version**: `18` (推荐)

### 3. 环境变量（可选）

如果需要，可以在 **Settings** > **Environment variables** 中添加环境变量：

- `NODE_VERSION`: `18`

### 4. 部署

配置完成后，点击 **Save and Deploy**。Cloudflare Pages 将：

1. 自动从 GitHub 拉取代码
2. 安装依赖 (`npm install`)
3. 运行构建命令 (`npm run build`)
4. 部署到 CDN

### 5. 自动部署

每次向 `main` 分支推送代码时，Cloudflare Pages 会自动触发新的部署。

### 6. 自定义域名（可选）

在 **Settings** > **Custom domains** 中可以添加自定义域名。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 技术栈更新

### 主要技术栈

- **VuePress 2.0** - 静态站点生成器
- **Vue 3** - 前端框架
- **vuepress-theme-hope** - 现代化主题
- **Vite** - 快速构建工具
- **TypeScript** - 类型安全
- **Sass** - CSS 预处理器

### 主题特性

- 🎨 **现代化设计** - 响应式布局，支持深色模式
- 🔍 **全文搜索** - 内置搜索功能
- 📱 **移动端优化** - 完美适配各种设备
- ⚡ **性能优化** - 基于 Vite 的快速构建
- 🎯 **SEO 友好** - 自动生成 sitemap 和 robots.txt
- 📊 **丰富组件** - 支持 tabs、cards、badges 等组件
- 🎪 **Markdown 增强** - 支持多种 Markdown 扩展语法

## 故障排除

### 常见问题

1. **依赖安装失败**
   - 确保使用 Node.js 18+ 版本
   - 删除 `node_modules` 和 `package-lock.json` 后重新安装
   - 检查网络连接

2. **构建失败**
   - 检查 Node.js 版本是否为 18+
   - 确保所有依赖都已正确安装
   - 检查 VuePress 配置文件语法

3. **Sass 编译错误**
   - 确保已安装 `sass-embedded` 依赖
   - 检查 CSS 文件语法

4. **主题配置问题**
   - 参考 [vuepress-theme-hope 官方文档](https://theme-hope.vuejs.press/)
   - 检查 frontmatter 配置格式

### 主题迁移记录

- **2025-05-23**: 从 vuepress-theme-vdoing 迁移到 vuepress-theme-hope
- **2025-05-23**: 升级到 VuePress 2.0 和 Vue 3
- **2025-05-23**: 简化配置文件结构
- **2025-05-23**: 修复所有构建和部署问题
- **2025-05-23**: 更新 UI 组件和页面样式

### 配置变更

主要配置变更包括：

- 使用 ES6 模块语法而非 CommonJS
- 主题配置集中到单一配置文件
- 更新 frontmatter 格式以适配新主题
- 添加 Vite bundler 配置

## 注意事项

- 确保所有 Markdown 文件都有正确的 frontmatter
- 图片和静态资源应放在 `docs/.vuepress/public/` 目录下
- 修改配置文件后需要重启开发服务器
- 避免在 Git 中提交 `docs/.vuepress/.temp/` 和 `docs/.vuepress/dist/` 目录
- 新主题提供了更丰富的 Markdown 语法支持和 UI 组件 