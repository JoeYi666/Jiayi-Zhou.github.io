# Jiayi Zhou's Academic Homepage — Maintenance Handbook

> This is the English reference version. The primary maintenance handbook is the Chinese README: [中文维护手册](../README.md).

[中文维护手册](../README.md)

This repository hosts the source code of **Jiayi Zhou's (周家屹) academic personal homepage**, built with Jekyll and deployed via GitHub Pages.

- **Live site**: https://joeyi666.github.io/Jiayi-Zhou.github.io/
- **Source repo**: https://github.com/JoeYi666/Jiayi-Zhou.github.io
- **Owner's GitHub profile**: https://github.com/JoeYi666
- **Google Scholar**: https://scholar.google.com/citations?user=qcxrzQcAAAAJ&hl=zh-CN

The site is a heavily customized fork of the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template. The original single-page layout has been replaced with a bilingual, multi-page design driven by data in `_data/*.yml`. Because the site is deployed as a GitHub Pages project site under the sub-path `baseurl: /Jiayi-Zhou.github.io`, all internal links are generated with Jekyll's `relative_url` filter.

---

## Repository structure at a glance

```text
.
├── _config.yml              # Site metadata, author info, SEO, baseurl, build settings
├── _data/                   # Core data source for page text (bilingual)
│   ├── about.yml            # About page content (hero, bio, philosophy, education, hobbies, references)
│   ├── contact.yml          # Home page Contact block content (contact info, address)
│   ├── navigation.yml       # Top navigation links
│   ├── publications.yml     # Research Outputs page content (Working Papers + peer-reviewed + patents)
│   ├── research.yml         # Research page content
│   └── skills.yml           # Skills page content
├── _pages/                  # Page templates (Markdown + Liquid)
│   ├── about.md             # Home page (/), includes Hero, Contact block, About, education, hobbies, references
│   ├── publications.md      # Research Outputs page (/publications/)
│   ├── research.md          # Research page (/research/)
│   └── skills.md            # Skills page (/skills/)
├── _includes/
│   ├── bi.html              # Bilingual content renderer include
│   ├── masthead.html        # Top navigation bar + language/theme toggle buttons
│   ├── head/custom.html     # Fonts, favicon, MathJax, language/theme restore scripts
│   └── ...
├── assets/
│   ├── js/i18n.js           # Language switcher logic
│   ├── js/theme.js          # Theme switcher logic (light ↔ dark binary)
│   ├── js/publications.js   # Publications expand/collapse logic
│   └── css/                 # Compiled styles (source in _sass/)
├── _sass/
│   └── _redesign.scss       # Custom theme styles, language hiding rules, dark mode
├── images/                  # Avatar, favicon, paper figures
├── files/papers/            # Paper PDF files
├── run_server.sh            # Local development: bundle exec jekyll liveserve
├── README.md                # Chinese primary handbook
└── docs/
    └── README-en.md         # This file (English reference version)
```

**The files you will edit most often are [`_config.yml`](../_config.yml) (author profile) and the per-page data files in [`_data/`](../_data/).** Daily content updates usually do not require changing `_pages/*.md` templates.

---

## Site structure

| Page | URL | Data file | Notes |
|---|---|---|---|
| About | `/` | [`_data/about.yml`](../_data/about.yml) | Home page, includes Hero, Contact block, bio, research philosophy, education, hobbies, references |
| Research | `/research/` | [`_data/research.yml`](../_data/research.yml) | Research directions and project introductions |
| Research Outputs | `/publications/` | [`_data/publications.yml`](../_data/publications.yml) | Working papers, peer-reviewed publications, patents |
| Skills | `/skills/` | [`_data/skills.yml`](../_data/skills.yml) | Skills and certifications |

The Contact block on the home page is sourced from [`_data/contact.yml`](../_data/contact.yml). Navigation order is controlled by [`_data/navigation.yml`](../_data/navigation.yml).

---

## How bilingual support works

The site supports English and Chinese through a **single-source bilingual data model**: both language versions are stored as paired fields inside the same data file, and the template displays only the active language.

### 1. Where is the text content stored?

All page text is stored in [`_data/*.yml`](../_data/) YAML files. Every field that needs bilingual support appears as an adjacent `_en` / `_zh` or `en:` / `zh:` pair. For example, in [`_data/about.yml`](../_data/about.yml):

```yaml
about:
  paragraphs:
    - en: "I am a Ph.D. candidate at ..."
      zh: "我是中国科学院科技战略咨询研究院的博士研究生 ..."
```

Or, in [`_data/publications.yml`](../_data/publications.yml):

```yaml
- id: zhou2025ranking
  title: "Ranking Influential Non-Content Factors ..."
  title_zh: "科学论文引用影响力的非内容因素排名 ..."
  description_en: "Short contribution summary in English."
  description_zh: "中文主要工作与贡献简述。"
  abstract_en: "English abstract."
  abstract_zh: "中文摘要。"
```

### 2. Are English and Chinese stored together?

**Yes, in the same YAML file.** Each content entry has both an English and a Chinese version, placed side by side. This approach has several advantages:

- You can edit the two languages in one-to-one correspondence, making it harder to miss a translation.
- Templates read a single data source, so you do not need to maintain two parallel file trees.
- Adding a new page or paper is done once, with bilingual content filled in together.

### 3. How does a page decide which language to show?

1. **Renderer include**: [`_includes/bi.html`](../_includes/bi.html) outputs both language versions side by side in the HTML:

   ```liquid
   {% include bi.html en=item.en zh=item.zh %}
   ```

   This generates two `<div>` blocks tagged with `data-lang-block="en"` and `data-lang-block="zh"`.

2. **CSS filtering**: [`_sass/_redesign.scss`](../_sass/_redesign.scss) hides the inactive language based on the `data-lang` attribute on `<html>`:

   ```scss
   html[data-lang="en"] [data-lang-block="zh"] { display: none !important; }
   html[data-lang="zh"] [data-lang-block="en"] { display: none !important; }
   ```

3. **Language switcher**: [`assets/js/i18n.js`](../assets/js/i18n.js) toggles the `<html data-lang="en|zh">` attribute when the top-bar "中文/EN" button is clicked, and persists the choice in `localStorage`. An inline script in [`_includes/head/custom.html`](../_includes/head/custom.html) restores the visitor's preference before first paint to avoid a flash.

### 4. What to watch when editing bilingual content

- **Always edit both the English and Chinese versions of the same entry**; do not change only one side.
- Field naming conventions:
  - Simple fields: `title` / `title_zh`, `authors` / `authors_zh`.
  - Long-text fields: `description_en` / `description_zh`, `abstract_en` / `abstract_zh`.
  - Generic key-value pairs: `en:` / `zh:`.
- Both fields support Markdown syntax (`**bold**`, `[links](url)`, lists, etc.) and are rendered with `markdownify` by the template.

---

## Daily editing guide

### Quick reference table for text edits

| What you want to change | Where to edit | Notes |
|---|---|---|
| Author name, email, avatar, Google Scholar / GitHub / ORCID / ResearchGate links | [`_config.yml`](../_config.yml) `author:` block | Affects footer/social links on every page |
| Top navigation text and order | [`_data/navigation.yml`](../_data/navigation.yml) | Each entry has `title` (English), `title_zh` (Chinese), and `url` |
| Home page Hero (name, position, tagline, keywords, buttons) | [`_data/about.yml`](../_data/about.yml) `hero:` block | English/Chinese pairs |
| Home page Contact block | [`_data/contact.yml`](../_data/contact.yml) | Contact info, address, social hints |
| Bio, research philosophy, education, hobbies, references | [`_data/about.yml`](../_data/about.yml) | English/Chinese pairs |
| Research page | [`_data/research.yml`](../_data/research.yml) | English/Chinese pairs |
| Research Outputs page (papers, patents) | [`_data/publications.yml`](../_data/publications.yml) | See publication editing notes below |
| Skills page | [`_data/skills.yml`](../_data/skills.yml) | English/Chinese pairs |
| Page titles, SEO descriptions, baseurl | [`_config.yml`](../_config.yml) | e.g. `description` / `description_zh` |
| Visual style, colors, dark mode | [`_sass/_redesign.scss`](../_sass/_redesign.scss) | Requires SCSS knowledge |
| Language/theme switcher logic | [`assets/js/i18n.js`](../assets/js/i18n.js) / [`assets/js/theme.js`](../assets/js/theme.js) | Usually not needed |

### Update author profile

Edit [`_config.yml`](../_config.yml):

- `title`, `description`, `description_zh`
- `author.name`, `author.avatar`, `author.email`
- `author.googlescholar`, `author.github`, `author.researchgate`, `author.orcid`
- `baseurl`: must remain `/Jiayi-Zhou.github.io` to match the current GitHub Pages project-site path.
- `repository`: keep as `Jiayi-Zhou/Jiayi-Zhou.github.io` (used for GitHub metadata).

### Update page content

Each page has its own data file; edit the corresponding file:

| Page | Data file | Common fields |
|---|---|---|
| About | [`_data/about.yml`](../_data/about.yml) | `hero`, `about.paragraphs`, `philosophy.cards`, `education`, `hobbies`, `references` |
| Home Contact block | [`_data/contact.yml`](../_data/contact.yml) | `intro`, `locations`, `social_hint` |
| Research | [`_data/research.yml`](../_data/research.yml) | `intro`, `projects`, `interests.items` |
| Research Outputs | [`_data/publications.yml`](../_data/publications.yml) | `working_papers`, `peer_reviewed`, `patents` |
| Skills | [`_data/skills.yml`](../_data/skills.yml) | `groups`, `certifications.items` |

### Add or edit a publication

In [`_data/publications.yml`](../_data/publications.yml):

- Peer-reviewed papers go under `peer_reviewed:`.
- Working papers go under `working_papers:`.
- Patents go under `patents:`.

Example paper entry:

```yaml
peer_reviewed:
  - id: zhou2025ranking
    year: 2025
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
    github: "https://github.com/JoeYi666/repo-name"
    bibtex: |
      @article{...}
```

Place PDF files in [`files/papers/`](../files/papers/) and match the filename with the `pdf` field.

### Update navigation

Edit [`_data/navigation.yml`](../_data/navigation.yml). Each entry has `title` (English), `title_zh` (Chinese), and `url` (page path, e.g. `/research/`).

### Add a new page

1. Create a new bilingual data file in `_data/` (e.g. `_data/newpage.yml`).
2. Create a new Markdown page in [`_pages/`](../_pages/) (e.g. `_pages/newpage.md`) with a `permalink`.
3. Add an entry to [`_data/navigation.yml`](../_data/navigation.yml) if it should appear in the navigation.
4. Update both `README.md` and `docs/README-en.md` to document the new page.

### Theme modes

Click the theme button in the top navigation to toggle between **light** and **dark** modes. The choice is persisted in `localStorage` and survives refreshes. An inline script in [`_includes/head/custom.html`](../_includes/head/custom.html) restores the theme before first paint to avoid a flash.

### Markdown and HTML includes

- Data fields support Markdown; [`_includes/bi.html`](../_includes/bi.html) calls `markdownify` automatically.
- If you need bilingual text inside HTML attributes or special structures, use [`_includes/bi.html`](../_includes/bi.html) or paired `span`/`div` language blocks.
- In page templates, keep HTML structures intact and ensure every visible text has both an `en` and a `zh` version.

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

Jekyll will rebuild and reload the page automatically when you edit a source file.

### Verification checklist

- Visit `/`, `/research/`, `/publications/`, and `/skills/` and confirm each page renders correctly.
- Click every link in the top navigation and confirm the routing is correct (note the project-site sub-path `/Jiayi-Zhou.github.io/`).
- Switch languages across multiple pages and confirm only the selected language is shown and the choice persists.
- Switch themes and refresh; confirm no flash.
- On `/publications/`, confirm: Working Papers, peer-reviewed papers, patents, descriptions, expandable abstracts/BibTeX, and DOI/PDF/GitHub links all work.

---

## Build and deploy

The site is deployed automatically with GitHub Pages from the `main` branch. The actual live URL is:

```text
https://joeyi666.github.io/Jiayi-Zhou.github.io/
```

Because this is a project site (not a user site), [`_config.yml`](../_config.yml) sets `baseurl: "/Jiayi-Zhou.github.io"`. All internal links should be generated with Jekyll's `relative_url` filter, for example:

```liquid
{{ '/files/papers/zhou2025ranking.pdf' | relative_url }}
```

### Deploy steps

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

4. After the build completes, visit https://joeyi666.github.io/Jiayi-Zhou.github.io/.

### Custom domain

No custom domain is currently configured. If you add one later, update the `url` and `baseurl` in [`_config.yml`](../_config.yml) and document it here.

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

- Color palette and light/dark mode variables.
- `[data-lang-block]` language hiding rules.
- Masthead, navigation, language toggle (`#lang-toggle`), and theme toggle (`#theme-toggle`).
- Multi-page card styles for Publications, Patents, Skills, and Contact.

The hero network animation is rendered on `<canvas id="hero-network">` in [`_pages/about.md`](../_pages/about.md). The corresponding JavaScript is bundled in the site assets.

For typography, fonts are loaded in [`_includes/head/custom.html`](../_includes/head/custom.html): Spectral (English display serif), Inter (body), and Noto Serif SC (Chinese serif).

---

## Troubleshooting

### Jekyll build errors

- Run `bundle exec jekyll build` to see the full error log.
- Common causes: YAML indentation mistakes in `_data/*.yml`, unclosed quotes, or missing Liquid tags.

### Language not switching

- Check that `assets/js/i18n.js` is loaded (see [`_includes/scripts.html`](_includes/scripts.html)).
- Check that `_sass/_redesign.scss` contains the `[data-lang-block]` hide rules.
- Verify the button has `id="lang-toggle"` in [`_includes/masthead.html`](_includes/masthead.html).

### Theme switching not working or flashing

- Check that `assets/js/theme.js` is loaded (see [`_includes/scripts.html`](_includes/scripts.html)).
- Verify the inline theme script in [`_includes/head/custom.html`](../_includes/head/custom.html) runs inside `<head>` and before first paint.

### Mixed-language content

- Ensure every entry in `_data/*.yml` has both an English and a Chinese version.
- Check that [`_includes/bi.html`](_includes/bi.html) is used consistently instead of inline `{{ ... | markdownify }}` for bilingual text.

### Chinese fonts not loading

- Confirm network access to `fonts.googleapis.com` and `fonts.gstatic.com`.
- The Chinese font `Noto Serif SC` is loaded in [`_includes/head/custom.html`](../_includes/head/custom.html).

### Citation badge not updating

- Verify the `GOOGLE_SCHOLAR_ID` secret is set.
- Check the `google-scholar-stats` branch for `gs_data_shieldsio.json`.
- Review the latest crawler workflow run for errors.

---

## Maintenance checklist

### Before every content update

- [ ] I edited both the English and Chinese versions for every changed entry in the relevant `_data/*.yml`.
- [ ] I used valid YAML indentation (2 spaces per level).
- [ ] I previewed the site locally with `bash run_server.sh`.
- [ ] I clicked the language toggle and confirmed both languages render correctly.
- [ ] I switched pages and confirmed language and theme choices persist across pages.
- [ ] New paper PDFs have been placed in `files/papers/` and the paths are correct.
- [ ] New paper GitHub repository links have been filled in.

### Before every deployment

- [ ] `git status` shows only intended changes.
- [ ] I committed with a clear message.
- [ ] I pushed to `main` and the GitHub Pages build succeeded.
- [ ] I visited the live site https://joeyi666.github.io/Jiayi-Zhou.github.io/ and confirmed the updates appear.

### Periodic checks

- [ ] Google Scholar citations badge loads and shows a current number.
- [ ] All external links (Google Scholar, ORCID, ResearchGate, GitHub, email) still work.
- [ ] No broken images or missing favicons.
- [ ] Both `README.md` and `docs/README-en.md` are still in sync.

---

## How to keep the two READMEs in sync

- **Chinese is the primary maintenance document**: `README.md` is the source of truth for this repository. Add new pages or restructure sections there first.
- **English is the auxiliary reference**: `docs/README-en.md` is a one-to-one translation of the Chinese version. Keep the same heading hierarchy, section order, and factual content.
- **Keep paths and commands identical**: only translate natural-language explanations.
- **Last synced**: 2026-08-25.

When in doubt, refer to `README.md`.

---

## License and acknowledgments

The original [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template is distributed under the MIT License. This site is a custom redesign with added bilingual support, a multi-page data-driven structure, and a refreshed visual design.

- Font Awesome is distributed under the SIL OFL 1.1 and MIT License.
- The redesign is influenced by [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) and [academicpages](https://github.com/academicpages/academicpages.github.io), both under the MIT License.

All personal content (biography, research, publications, images) belongs to Jiayi Zhou.
