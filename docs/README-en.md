
# Jiayi Zhou's Academic Homepage — Maintenance Handbook

> This is the English reference version. The primary maintenance handbook is the Chinese README: [中文维护手册](../README.md).

[中文维护手册](../README.md)

This repository hosts the source code of **Jiayi Zhou's (周家屹) academic personal homepage**, built with Jekyll and deployed via GitHub Pages.

- **Live site**: https://Jiayi-Zhou.github.io
- **Source repo**: https://github.com/Jiayi-Zhou/Jiayi-Zhou.github.io
- **Owner's GitHub profile**: https://github.com/JoeYi666
- **Google Scholar**: https://scholar.google.com/citations?user=qcxrzQcAAAAJ&hl=zh-CN

The site is a heavily customized fork of the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template. The original layout has been replaced with a bilingual, single-page design driven by data in [`_data/home.yml`](../_data/home.yml).

---

## Repository structure at a glance

```text
.
├── _config.yml              # Site metadata, author info, SEO, build settings
├── _data/
│   ├── home.yml             # Main homepage content (all sections, bilingual)
│   └── navigation.yml       # Top navigation links
├── _pages/
│   └── about.md             # Homepage template; pulls data from _data/home.yml
├── _includes/
│   ├── bi.html              # Bilingual content renderer include
│   ├── masthead.html        # Top navigation bar + language toggle button
│   ├── head/custom.html     # Fonts, favicon, MathJax, language-preference script
│   └── ...
├── assets/
│   ├── js/i18n.js           # Language switcher logic
│   └── css/                 # Compiled styles (source in _sass/)
├── _sass/
│   └── _redesign.scss       # Custom theme styles, including language hiding
├── images/                  # Avatar, favicon, paper thumbnails
├── run_server.sh            # Local development: bundle exec jekyll liveserve
├── README.md                # Chinese primary handbook
└── docs/
    └── README-en.md         # This file (English reference version)
```

The two files you will edit most often are [`_config.yml`](../_config.yml) (author profile) and [`_data/home.yml`](../_data/home.yml) (page content).

---

## How bilingual support works

The homepage supports English and Chinese through a **single-source bilingual data model**:

1. **Data source**: [`_data/home.yml`](../_data/home.yml) stores every piece of content as paired `en:` and `zh:` fields. For example:

   ```yaml
   about:
     paragraphs:
       - en: "I am a Ph.D. candidate at ..."
         zh: "我是中国科学院科技战略咨询研究院的博士研究生 ..."
   ```

2. **Renderer include**: [`_includes/bi.html`](../_includes/bi.html) outputs both language versions side by side in the HTML:

   ```liquid
   {% include bi.html en=item.en zh=item.zh %}
   ```

   This generates two `<div>` blocks tagged with `data-lang-block="en"` and `data-lang-block="zh"`.

3. **Language switcher**: [`assets/js/i18n.js`](../assets/js/i18n.js) toggles the `<html data-lang="en|zh">` attribute and persists the choice in `localStorage`. [`_includes/head/custom.html`](../_includes/head/custom.html) runs an inline script before first paint to restore the visitor's preference and avoid a flash of the default language.

4. **CSS filtering**: [`_sass/_redesign.scss`](../_sass/_redesign.scss) hides the inactive language:

   ```scss
   html[data-lang="en"] [data-lang-block="zh"] { display: none !important; }
   html[data-lang="zh"] [data-lang-block="en"] { display: none !important; }
   ```

### Single-source-of-truth rule

- **Always edit `en:` and `zh:` together** in the same entry of [`_data/home.yml`](../_data/home.yml). Never add an English-only entry.
- The English text is the structural source of truth; the Chinese text should convey the same meaning.
- Markdown syntax (`**bold**`, `[links](url)`, lists) is supported in both fields.

---

## Daily editing guide

### Update author profile

Edit [`_config.yml`](../_config.yml):

- `title`, `description`, `description_zh`
- `author.name`, `author.avatar`, `author.email`
- `author.googlescholar`, `author.github`, `author.researchgate`, `author.orcid`
- `repository`: must remain `Jiayi-Zhou/Jiayi-Zhou.github.io` for the Google Scholar crawler and CDN path to work.

### Update homepage sections

Edit [`_data/home.yml`](../_data/home.yml). Each section corresponds to a block in [`_pages/about.md`](../_pages/about.md):

| Section in `home.yml` | Rendered section | What to edit |
|---|---|---|
| `hero` | Name, subtitle, tagline, keywords | Update text and keywords. |
| `about.paragraphs` | About Me / 个人简介 | Add/remove bilingual paragraphs. |
| `philosophy.cards` + `philosophy.quote` | Research Philosophy / 研究理念 | Edit cards and quote. |
| `news` | News / 最新动态 | Add newest items at the top. |
| `publications.featured` + `publications.list` | Publications / 学术发表 | Update featured paper and list. |
| `patents` | Patents / 专利 | Add or update patents. |
| `research` | Research Experience / 科研经历 | Update title, role, period, bullet points. |
| `education` | Education / 教育经历 | Add degrees. |
| `skills.groups` | Skills & Methods / 技能与方法 | Reorganize groups/items. |
| `certifications` | Certifications / 证书 | Add certificates. |
| `hobbies` | Hobbies / 兴趣爱好 | Add hobbies. |
| `references` | References / 推荐人 | Update availability note. |

### Add or edit news

Append a new item to the top of the `news:` list:

```yaml
news:
  - date: "2026.08"
    en: "🎉 Paper accepted at ..."
    zh: "🎉 论文被 ... 接收。"
  - date: "2026.01"
    en: "..."
    zh: "..."
```

### Add or edit publications

For a regular list item, add a bilingual entry under `publications.list:`:

```yaml
publications:
  list:
    - en: "[Title](https://doi.org/...), **Zhou, J.-Y.**, ..., *Journal*, 2026."
      zh: "[标题](https://doi.org/...)，**周家屹**等，《期刊》，2026。"
```

For the featured paper, update `publications.featured` (title, authors, venue, bullet points, badges).

### Update navigation

Edit [`_data/navigation.yml`](../_data/navigation.yml). Each entry has `title` (English), `title_zh` (Chinese), and `url` (anchor ID that must match an `id` in [`_pages/about.md`](../_pages/about.md)).

### Add a new section

1. Add the bilingual data to [`_data/home.yml`](../_data/home.yml).
2. Add a new HTML section in [`_pages/about.md`](../_pages/about.md) using the existing sections as a template.
3. Add an anchor `<span class='anchor' id='your-section'></span>`.
4. Add a navigation entry in [`_data/navigation.yml`](../_data/navigation.yml) if needed.
5. Update both `README.md` and `docs/README-en.md` to document the new section.

### Markdown and HTML includes

- Data fields support Markdown; [`_includes/bi.html`](../_includes/bi.html) calls `markdownify` automatically.
- If you need bilingual text inside HTML attributes or special structures, use [`_includes/bi.html`](../_includes/bi.html) or paired `span`/`div` language blocks.
- In [`_pages/about.md`](../_pages/about.md), keep HTML structures intact and ensure every visible text has both an `en` and a `zh` version.

---

## Local run

To preview changes locally before pushing:

### Prerequisites

Install Jekyll dependencies following the [official Jekyll installation guide](https://jekyllrb.com/docs/installation/#requirements): Ruby, RubyGems, GCC, and Make.

Then install gems:

```bash
bundle install
```

### Start the server

```bash
bash run_server.sh
```

This runs `bundle exec jekyll liveserve`. Open http://127.0.0.1:4000 in your browser.

If you edit a source file, Jekyll will rebuild and reload the page automatically.

### Verify both languages

Click the **中文 / EN** button in the top-right corner and confirm:

- Every section switches cleanly without mixed-language text.
- Navigation labels change language.
- New content appears in both languages.

---

## Build and deploy

The site is deployed automatically with GitHub Pages from the `main` branch.

1. Commit your changes:

   ```bash
   git add .
   git commit -m "Update homepage content"
   ```

2. Push to the remote `main` branch:

   ```bash
   git push origin main
   ```

3. GitHub Pages will rebuild the site. Check the **Actions** tab for build status.

4. Visit https://Jiayi-Zhou.github.io after the build completes.

### Custom domain

No custom domain is currently configured. If you add one later, update the `url` in [`_config.yml`](../_config.yml) and document it here.

---

## Google Scholar citation stats

The site can display a live Google Scholar citations badge.

### How it works

The workflow [`.github/workflows/google_scholar_crawler.yaml`](../.github/workflows/google_scholar_crawler.yaml) runs a crawler that fetches citation data from Google Scholar and stores it in the `google-scholar-stats` branch as `gs_data.json` and `gs_data_shieldsio.json`.

The badge URL in [`_pages/about.md`](../_pages/about.md) points to `gs_data_shieldsio.json` via either GitHub raw (default) or jsDelivr CDN (controlled by `google_scholar_stats_use_cdn` in [`_config.yml`](../_config.yml)).

### Required secret

1. Find the Google Scholar ID from the profile URL: `qcxrzQcAAAAJ`.
2. In the GitHub repo, go to **Settings → Secrets and variables → Actions → New repository secret**.
3. Add `GOOGLE_SCHOLAR_ID` with value `qcxrzQcAAAAJ`.
4. Go to the **Actions** tab and enable workflows if they are not already active.

### Troubleshooting

- **Badge shows "citations" with no number**: The crawler may have failed or the data branch may be empty. Check the latest workflow run in the **Actions** tab.
- **CDN delays**: If `google_scholar_stats_use_cdn: true`, jsDelivr caches the JSON file. Updates may be delayed. Switch to `false` to use GitHub raw, or append a cache-busting query string when testing.
- **No workflow triggered**: Pushes to `main` and a daily cron at 08:00 UTC trigger the crawler. You can also trigger it manually from the Actions tab.

---

## Customizing the theme

Most visual styles are in [`_sass/_redesign.scss`](../_sass/_redesign.scss). Key areas:

- Color palette and hero section styles.
- `[data-lang-block]` language hiding rules.
- Masthead, navigation, and language toggle (`#lang-toggle`).

The hero network animation is rendered on `<canvas id="hero-network">` in [`_pages/about.md`](../_pages/about.md). The corresponding JavaScript is bundled in the site assets.

For typography, fonts are loaded in [`_includes/head/custom.html`](../_includes/head/custom.html): Spectral (English display serif), Inter (body), and Noto Serif SC (Chinese serif).

---

## Troubleshooting

### Jekyll build errors

- Run `bundle exec jekyll build` to see the full error log.
- Common causes: YAML indentation mistakes in [`_data/home.yml`](../_data/home.yml), unclosed quotes, or missing Liquid tags.

### Language not switching

- Check that `assets/js/i18n.js` is loaded (see [`_includes/scripts.html`](../_includes/scripts.html)).
- Check that `_sass/_redesign.scss` contains the `[data-lang-block]` hide rules.
- Verify the button has `id="lang-toggle"` in [`_includes/masthead.html`](../_includes/masthead.html).

### Mixed-language content

- Ensure every entry in [`_data/home.yml`](../_data/home.yml) has both `en:` and `zh:` fields.
- Check that [`_includes/bi.html`](../_includes/bi.html) is used consistently instead of inline `{{ ... | markdownify }}` for bilingual text.

### Chinese fonts not loading

- Confirm network access to `fonts.googleapis.com` and `fonts.gstatic.com`.
- The `Noto Serif SC` font is loaded in [`_includes/head/custom.html`](../_includes/head/custom.html).

### Citation badge not updating

- Verify the `GOOGLE_SCHOLAR_ID` secret is set.
- Check the `google-scholar-stats` branch for `gs_data_shieldsio.json`.
- Review the latest crawler workflow run for errors.

---

## Maintenance checklist

### Before every content update

- [ ] I edited both `en:` and `zh:` fields for every changed entry in [`_data/home.yml`](../_data/home.yml).
- [ ] I used valid YAML indentation (2 spaces per level).
- [ ] I previewed the site locally with `bash run_server.sh`.
- [ ] I clicked the language toggle and confirmed both languages render correctly.

### Before every deployment

- [ ] `git status` shows only intended changes.
- [ ] I committed with a clear message.
- [ ] I pushed to `main` and the GitHub Pages build succeeded.
- [ ] I visited the live site and confirmed the updates appear.

### Periodic checks

- [ ] Google Scholar citations badge loads and shows a current number.
- [ ] All external links (Google Scholar, ORCID, ResearchGate, GitHub, email) still work.
- [ ] No broken images or missing favicons.
- [ ] Both `README.md` and `docs/README-en.md` are still in sync.

---

## How to keep the two READMEs in sync

- **Chinese is the primary maintenance document**: `README.md` is the source of truth for this repository. Add or restructure sections there first.
- **English is the auxiliary reference**: `README.md` is a one-to-one translation of the Chinese version. Keep the same heading hierarchy, section order, and factual content.
- **Keep paths and commands identical**: only translate natural-language explanations.
- **Last synced**: 2026-08-23.

When in doubt, refer to `README.md`.

---

## License and acknowledgments

The original [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template is distributed under the MIT License. This site is a custom redesign with added bilingual support, a data-driven homepage, and a refreshed visual design.

- Font Awesome is distributed under the SIL OFL 1.1 and MIT License.
- The redesign is influenced by [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) and [academicpages](https://github.com/academicpages/academicpages.github.io), both under the MIT License.

All personal content (biography, research, publications, images) belongs to Jiayi Zhou.
