# ICannotGetAName.github.io

一个托管在 GitHub Pages 上的个人网站/主页仓库，用于展示内容、文章或项目。你可以直接在线访问或在本地进行预览与开发。

## 在线访问
- 主页：https://icannotgetaname.github.io

## 功能亮点
- 轻量、静态、易于维护
- 适配 GitHub Pages 自动发布
- 支持自定义域名（可选）
- 便于扩展页面与样式

## 本地预览
无需复杂环境，作为静态站点可直接用浏览器打开入口文件（例如 index.html）。也可以使用任意静态服务器本地预览：
- 使用 Python（3.x）：`python -m http.server 8000`
- 使用 Node（npx serve）：`npx serve .`
- VS Code 插件：Live Server 一键预览

然后在浏览器访问 http://localhost:8000 或工具提示的地址。

## 部署到 GitHub Pages
- 将更改提交到默认分支（通常为 `main`）
- 仓库设置中启用 Pages（Settings → Pages），选择分支和路径
- 几分钟后自动生效，访问仓库对应的 Pages 域名即可

## 目录结构（示例）
根据实际项目调整与更新：
```
.
├─ index.html         # 站点入口（若存在）
├─ assets/            # 静态资源（图片、字体等）
├─ css/               # 样式文件
├─ js/                # 脚本文件
└─ posts/             # 文章或页面内容
```

## 贡献与定制
- 直接编辑页面内容与样式，提交 PR 即可
- 若使用自定义域名，请在仓库根目录添加 CNAME 文件
- 欢迎根据实际需求补充使用说明与目录结构
