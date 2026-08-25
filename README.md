
# 周家屹学术个人主页 — 维护手册

> 本文档是本仓库的主要维护手册；英文版见 [English README](docs/README-en.md)。

[English README](docs/README-en.md)

本仓库是 **周家屹（Jiayi Zhou）学术个人主页** 的源码，使用 Jekyll 构建，并通过 GitHub Pages 部署。

- **线上站点**：https://Jiayi-Zhou.github.io
- **源码仓库**：https://github.com/Jiayi-Zhou/Jiayi-Zhou.github.io
- **所有者 GitHub 主页**：https://github.com/JoeYi666
- **谷歌学术主页**：https://scholar.google.com/citations?user=qcxrzQcAAAAJ&hl=zh-CN

本站是基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 模板深度定制的版本，原始单页布局已被替换为以 `_data/*.yml` 为数据源的中英双语多页设计。

---

## 仓库结构速查

```text
.
├── _config.yml              # 站点元数据、作者信息、SEO、构建设置
├── _data/
│   ├── about.yml            # About 页面内容（Hero、简介、理念、动态、教育、爱好）
│   ├── research.yml         # Research 页面内容
│   ├── publications.yml     # Publications 页面内容（含 Working Papers）
│   ├── patents.yml          # Patents 页面内容
│   ├── skills.yml           # Skills 页面内容
│   ├── contact.yml          # Contact 页面内容
│   └── navigation.yml       # 顶部导航链接
├── _pages/
│   ├── about.md             # 主页（/）
│   ├── research.md          # 研究页面（/research/）
│   ├── publications.md      # 学术发表页面（/publications/）
│   ├── patents.md           # 专利页面（/patents/）
│   ├── skills.md            # 技能页面（/skills/）
│   └── contact.md           # 联系页面（/contact/）
├── _includes/
│   ├── bi.html              # 双语内容渲染用 include
│   ├── masthead.html        # 顶部导航栏 + 语言/主题切换按钮
│   ├── head/custom.html     # 字体、favicon、MathJax、语言/主题偏好恢复脚本
│   └── ...
├── assets/
│   ├── js/i18n.js           # 语言切换逻辑
│   ├── js/theme.js          # 主题切换逻辑（light/dark/system）
│   ├── js/publications.js   # Publications 页面展开/折叠逻辑
│   └── css/                 # 编译后的样式（源文件在 _sass/）
├── _sass/
│   └── _redesign.scss       # 自定义主题样式，包括语言隐藏规则与暗色模式
├── images/                  # 头像、favicon、论文配图
├── files/papers/            # 论文 PDF 文件
├── run_server.sh            # 本地开发：bundle exec jekyll liveserve
├── README.md                # 本文件（中文主要维护手册）
└── docs/
    └── README-en.md         # 英文参考版
```

你最常编辑的文件是 [`_config.yml`](_config.yml)（作者资料）和各页面数据文件（`_data/*.yml`）。

---

## 站点结构

| 页面 | 访问路径 | 数据文件 |
|---|---|---|
| About | `/` | [`_data/about.yml`](_data/about.yml) |
| Research | `/research/` | [`_data/research.yml`](_data/research.yml) |
| Publications | `/publications/` | [`_data/publications.yml`](_data/publications.yml) |
| Patents | `/patents/` | [`_data/patents.yml`](_data/patents.yml) |
| Skills | `/skills/` | [`_data/skills.yml`](_data/skills.yml) |
| Contact | `/contact/` | [`_data/contact.yml`](_data/contact.yml) |

导航顺序由 [`_data/navigation.yml`](_data/navigation.yml) 控制。

---

## 双语机制说明

本站通过**单一数据源双语模型**支持英文与中文：

1. **数据源**：每个 `_data/*.yml` 文件将每条内容都以相邻的 `en:` 和 `zh:` 字段成对存储。例如：

   ```yaml
   about:
     paragraphs:
       - en: "I am a Ph.D. candidate at ..."
         zh: "我是中国科学院科技战略咨询研究院的博士研究生 ..."
   ```

2. **渲染 include**：[`_includes/bi.html`](_includes/bi.html) 将两种语言版本并排输出到 HTML 中：

   ```liquid
   {% include bi.html en=item.en zh=item.zh %}
   ```

   这会生成两个分别带有 `data-lang-block="en"` 和 `data-lang-block="zh"` 属性的 `<div>` 块。

4. **主题切换器**：[`assets/js/theme.js`](assets/js/theme.js) 提供 **light / dark / system** 三种模式，持久化到 `localStorage`。[`_includes/head/custom.html`](_includes/head/custom.html) 中的内联脚本会在首屏绘制前恢复主题偏好，避免闪烁。

5. **CSS 过滤**：[`_sass/_redesign.scss`](_sass/_redesign.scss) 隐藏非当前语言的内容，并定义亮/暗两套配色：

   ```scss
   html[data-lang="en"] [data-lang-block="zh"] { display: none !important; }
   html[data-lang="zh"] [data-lang-block="en"] { display: none !important; }
   ```

### 单一数据源原则

- 在 `_data/*.yml` 中，**务必同时修改同一条目的 `en:` 和 `zh:`**，不要只添加英文。
- 英文文本作为结构基准；中文文本应传达相同含义。
- 两个字段都支持 Markdown 语法（`**加粗**`、`[链接](url)`、列表等）。

---

## 日常编辑指南

### 更新作者资料

编辑 [`_config.yml`](_config.yml)：

- `title`、`description`、`description_zh`
- `author.name`、`author.avatar`、`author.email`
- `author.googlescholar`、`author.github`、`author.researchgate`、`author.orcid`
- `repository`：必须保持为 `Jiayi-Zhou/Jiayi-Zhou.github.io`，否则谷歌学术爬虫和 CDN 路径会失效。

### 更新各页面内容

每个页面都有独立的数据文件，编辑对应文件即可：

| 页面 | 数据文件 | 常用字段 |
|---|---|---|
| About | [`_data/about.yml`](_data/about.yml) | `hero`、`about.paragraphs`、`philosophy.cards`、`education`、`hobbies`、`references` |
| Research | [`_data/research.yml`](_data/research.yml) | `intro`、`projects`、`interests.items` |
| Publications | [`_data/publications.yml`](_data/publications.yml) | `published`（已发表论文）、`working_papers`（工作论文） |
| Patents | [`_data/patents.yml`](_data/patents.yml) | `list` |
| Skills | [`_data/skills.yml`](_data/skills.yml) | `groups`、`certifications.items` |
| Contact | [`_data/contact.yml`](_data/contact.yml) | `intro`、`locations` |

### 添加或编辑论文

在 [`_data/publications.yml`](_data/publications.yml) 中，已发表论文放入 `published:`，工作论文放入 `working_papers:`。每篇论文的字段包括：

```yaml
published:
  - id: zhou2025ranking
    year: 2025
    type: "journal"
    type_en: "Journal Article"
    type_zh: "期刊论文"
    title: "English title"
    title_zh: "中文标题"
    authors: "**Jiayi Zhou**, et al."
    authors_zh: "**周家屹**等"
    venue_en: "*Journal*, 2025."
    venue_zh: "《期刊》，2025。"
    description_en: "Short contribution summary in English."
    description_zh: "中文主要工作与贡献简述。"
    abstract_en: "English abstract."
    abstract_zh: "中文摘要。"
    doi: "10.xxxx/xxxxx"
    pdf: "/files/papers/zhou2025ranking.pdf"
    bibtex: |
      @article{...}
```

论文 PDF 请放入 [`files/papers/`](files/papers/)，文件名与 `pdf` 字段保持一致。

### 添加或编辑学术发表

在 [`_data/publications.yml`](_data/publications.yml) 中，已发表论文放入 `published:`，工作论文放入 `working_papers:`。论文字段参见上文示例。

### 更新导航

编辑 [`_data/navigation.yml`](_data/navigation.yml)。每条导航包含 `title`（英文）、`title_zh`（中文）和 `url`（页面路径，如 `/research/`）。

### 添加新页面

1. 在 `_data/` 下新建双语数据文件（如 `_data/newpage.yml`）。
2. 在 [`_pages/`](_pages/) 下新建 Markdown 页面文件（如 `_pages/newpage.md`），设置 `permalink`。
3. 如需在导航中显示，在 [`_data/navigation.yml`](_data/navigation.yml) 中添加条目。
4. 同步更新 `README.md` 与 `docs/README-en.md` 以记录新页面。

### 主题模式

点击顶部导航栏的主题按钮可在 **system → light → dark → system** 间循环切换。选择会持久化到 `localStorage`，并在刷新后保持。

### Markdown 与 HTML include 混用

- 数据文件支持 Markdown；[`_includes/bi.html`](_includes/bi.html) 会自动调用 `markdownify`。
- 如果需要在 HTML 属性或特殊结构中嵌入双语文本，请使用 [`_includes/bi.html`](_includes/bi.html) 或成对的 `span`/`div` 语言块。
- 在页面模板中，保持 HTML 结构完整，并确保每个可见文本都有 `en` 和 `zh` 版本。

---

## 本地运行

推送前建议在本地预览：

### 环境要求

按 [Jekyll 官方安装指南](https://jekyllrb.com/docs/installation/#requirements) 安装 Ruby、RubyGems、GCC 和 Make。

然后安装 gem 依赖：

```bash
bundle install
```

### 启动服务

```bash
bash run_server.sh
```

该命令执行 `bundle exec jekyll liveserve`。在浏览器中打开 http://127.0.0.1:4000。

修改源文件后，Jekyll 会自动重新构建并刷新页面。

### 验证清单

- 访问 `/`、`/research/`、`/publications/`、`/patents/`、`/skills/`、`/contact/`，确认各页面渲染正常。
- 点击顶部导航每个链接，确认跳转正确。
- 在多个页面切换语言，确认只显示选中语言且选择跨页面保持一致。
- 切换主题并刷新，确认无闪烁；system 模式随 OS 主题变化。
- 在 `/publications/` 确认：已发表论文、Working Papers、每篇描述、可展开摘要/BibTeX、DOI/PDF 链接均正常。

---

## 构建与部署

本站通过 GitHub Pages 从 `main` 分支自动部署。

1. 提交改动：

   ```bash
   git add .
   git commit -m "Update homepage content"
   ```

2. 推送到远程 `main` 分支：

   ```bash
   git push origin main
   ```

3. GitHub Pages 会自动重新构建站点。可在仓库的 **Actions** 标签页查看构建状态。

4. 构建完成后访问 https://Jiayi-Zhou.github.io。

### 自定义域名

当前未配置自定义域名。如后续添加，请更新 [`_config.yml`](_config.yml) 中的 `url` 并在此记录。

---

## 谷歌学术引用统计

本站可显示实时的 Google Scholar 引用数徽章。

### 工作原理

工作流 [`.github/workflows/google_scholar_crawler.yaml`](.github/workflows/google_scholar_crawler.yaml) 运行爬虫，从 Google Scholar 获取引用数据，并存储到 `google-scholar-stats` 分支的 `gs_data.json` 和 `gs_data_shieldsio.json` 中。

[`_pages/about.md`](_pages/about.md) 中的徽章 URL 指向 `gs_data_shieldsio.json`，可通过 [`_config.yml`](_config.yml) 中的 `google_scholar_stats_use_cdn` 选择 GitHub raw 或 jsDelivr CDN。

### 所需 Secret

1. 从谷歌学术主页 URL 中获取 ID：`qcxrzQcAAAAJ`。
2. 在 GitHub 仓库中进入 **Settings → Secrets and variables → Actions → New repository secret**。
3. 添加 `GOOGLE_SCHOLAR_ID`，值为 `qcxrzQcAAAAJ`。
4. 进入 **Actions** 标签页，启用 workflows（若未启用）。

### 故障排查

- **徽章只显示 "citations" 没有数字**：爬虫可能失败或数据分支为空。在 **Actions** 标签页查看最新工作流运行记录。
- **CDN 延迟**：若 `google_scholar_stats_use_cdn: true`，jsDelivr 会缓存 JSON 文件，更新会有延迟。测试时可改为 `false` 使用 GitHub raw，或附加缓存清除参数。
- **工作流未触发**：推送到 `main` 分支以及每天 UTC 08:00 都会触发。也可在 Actions 标签页手动触发。

---

## 主题定制

大部分视觉样式位于 [`_sass/_redesign.scss`](_sass/_redesign.scss)。主要区域包括：

- 调色板与亮/暗模式变量。
- `[data-lang-block]` 语言隐藏规则。
- 导航栏、页眉、语言切换按钮（`#lang-toggle`）与主题切换按钮（`#theme-toggle`）。
- Publications、Patents、Skills、Contact 等多页面卡片样式。

首屏网络动画渲染在 [`_pages/about.md`](_pages/about.md) 的 `<canvas id="hero-network">` 上，对应 JavaScript 已打包在站点资源中。

字体在 [`_includes/head/custom.html`](_includes/head/custom.html) 中加载：Spectral（英文展示衬线）、Inter（正文）、Noto Serif SC（中文衬线）。

---

## 常见问题

### Jekyll 构建报错

- 运行 `bundle exec jekyll build` 查看完整错误日志。
- 常见原因：`_data/*.yml` 的 YAML 缩进错误、未闭合的引号、或缺失的 Liquid 标签。

### 语言无法切换

- 确认 `assets/js/i18n.js` 已加载（见 [`_includes/scripts.html`](_includes/scripts.html)）。
- 确认 `_sass/_redesign.scss` 中包含 `[data-lang-block]` 隐藏规则。
- 确认 [`_includes/masthead.html`](_includes/masthead.html) 中的按钮具有 `id="lang-toggle"`。

### 主题切换无效或出现闪烁

- 确认 `assets/js/theme.js` 已加载（见 [`_includes/scripts.html`](_includes/scripts.html)）。
- 确认 [`_includes/head/custom.html`](_includes/head/custom.html) 中的内联主题脚本位于 `<head>` 内、且在首屏绘制前执行。

### 出现中英文混排

- 确保 `_data/*.yml` 中每个条目都同时包含 `en:` 和 `zh:`。
- 确保双语文本都统一使用 [`_includes/bi.html`](_includes/bi.html) 渲染，而不是内联 `{{ ... | markdownify }}`。

### 中文字体未加载

- 确认可访问 `fonts.googleapis.com` 和 `fonts.gstatic.com`。
- 中文字体 `Noto Serif SC` 在 [`_includes/head/custom.html`](_includes/head/custom.html) 中加载。

### 引用徽章未更新

- 确认已设置 `GOOGLE_SCHOLAR_ID` Secret。
- 检查 `google-scholar-stats` 分支中是否存在 `gs_data_shieldsio.json`。
- 查看最近一次爬虫工作流的运行日志。

---

## 维护检查清单

### 每次内容更新前

- [ ] 我在对应的 `_data/*.yml` 中同时修改了每条改动的 `en:` 和 `zh:`。
- [ ] YAML 缩进正确（每级 2 空格）。
- [ ] 我已使用 `bash run_server.sh` 在本地预览。
- [ ] 我点击了语言切换按钮，确认两种语言都正常渲染。
- [ ] 我在多个页面间切换，确认语言和主题选择跨页面保持一致。

### 每次部署前

- [ ] `git status` 只显示预期改动。
- [ ] 提交信息清晰明确。
- [ ] 已推送到 `main` 分支且 GitHub Pages 构建成功。
- [ ] 已访问线上站点确认更新生效。

### 定期检查

- [ ] Google Scholar 引用徽章正常加载并显示最新数字。
- [ ] 所有外部链接（Google Scholar、ORCID、ResearchGate、GitHub、邮箱）均可访问。
- [ ] 无图片或 favicon 缺失。
- [ ] `README.md` 与 `docs/README-en.md` 保持同步。

---

## 如何保持两份 README 同步

- **中文版为主要维护文档**：本仓库的日常维护以 `README.md` 为准，新增页面或调整结构时先在这里修改。
- **英文版为辅助参考**：`docs/README-en.md` 是中文版的一一对应翻译，应保持相同的标题层级、章节顺序与事实内容。
- **路径与命令保持一致**：仅翻译自然语言说明，文件路径和命令不改动。
- **最近同步日期**：2026-08-25。

如有疑问，以 `README.md` 的内容为准。

---

## 许可与致谢

原始 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 模板基于 MIT 许可证分发。本站是在其基础上进行深度定制的版本，新增了双语支持、数据驱动主页以及全新的视觉设计。

- Font Awesome 基于 SIL OFL 1.1 与 MIT 许可证分发。
- 视觉设计参考了 [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) 与 [academicpages](https://github.com/academicpages/academicpages.github.io)，二者均为 MIT 许可证。

所有个人内容（简介、研究、论文、图片等）归周家屹所有。
