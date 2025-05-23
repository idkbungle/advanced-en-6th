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

### 3. 环境变量（可选）

如果需要，可以在 **Settings** > **Environment variables** 中添加环境变量。

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

## 注意事项

- 确保所有 Markdown 文件都有正确的 frontmatter
- 图片和静态资源应放在 `docs/.vuepress/public/` 目录下
- 修改配置文件后需要重启开发服务器 