# ICannotGetAName.github.io

维护说明（自动追加）

最近对站点进行了小范围的“可维护性”重构，主要改动：

- 将首页 `index.html` 中的内联样式抽离为 CSS 类，改为使用仓库根目录的 `styles.css`（如 `.profile`, `.lang-switch`, `.info-section`, `.site-footer`）。
- 修正样式表路径：现在所有页面统一引用根目录下的 `styles.css`（`index.html` 使用 `styles.css`，`pages/*` 使用 `../styles.css`）。
- 修正 i18next 的后端加载路径：`js/language.js` 中 `backend.loadPath` 已改为 `locales/{{lng}}.json`，以便直接从仓库 `locales/` 文件夹加载翻译 JSON。

为什么这些改动：

- 便于后续统一样式与响应式调整，减少重复和内联样式；
- 避免部署后静态资源 404（路径更明确）；
- 为将来把导航与页脚抽成共享片段铺路。

如何本地快速验证（在 macOS / zsh）：

1. 在项目根目录运行一个临时静态服务器：

```bash
cd /Users/wangxinrui/Desktop/ICannotGetAName.github.io
python3 -m http.server 8000
```

2. 在浏览器打开 `http://localhost:8000`，检查首页与子页面（`pages/` 下的 HTML）是否正确显示样式和语言切换按钮。

后续建议：

- 把 `nav` 和 `footer` 抽成可复用片段并在所有页面注入；
- 将所有页面的 i18n 初始化统一为一个 `js/i18n-init.js`，只用 `data-i18n` 属性在页面中渲染文本；
- 将 locales 的 key 结构保持一致，优先使用外部 JSON（避免在页面内重复资源）。

如果你希望，我可以继续：把 nav/footer 抽成片段并注入，或统一 i18n 初始化脚本并更新页面引用。

