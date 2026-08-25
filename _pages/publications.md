---
permalink: /publications/
title: ""
excerpt: ""
author_profile: true
---

{% assign p = site.data.publications %}

<section class="section publications-page">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Research Outputs</span><span class="i18n" data-lang-block="zh">研究成果</span></h2>
  <p class="section__lede">{% include bi.html en=p.intro.en zh=p.intro.zh %}</p>

  <!-- Working Papers -->
  <h3 class="section__subtitle">
    <span class="i18n" data-lang-block="en">{{ p.section_titles.working_papers.en }}</span>
    <span class="i18n" data-lang-block="zh">{{ p.section_titles.working_papers.zh }}</span>
  </h3>
  {% for paper in p.working_papers %}
  <article class="paper-card paper-card--wp" data-paper-id="{{ paper.id }}">
    <div class="paper-card__meta">
      {% if paper.chapter %}
      <span class="paper-card__chapter">
        <span class="i18n" data-lang-block="en">{{ paper.chapter }}</span>
        <span class="i18n" data-lang-block="zh">{{ paper.chapter_zh }}</span>
      </span>
      {% endif %}
      <span class="paper-card__year">{{ paper.year }}</span>
      <span class="paper-card__type paper-card__type--wp">
        <span class="i18n" data-lang-block="en">{{ paper.type_en }}</span>
        <span class="i18n" data-lang-block="zh">{{ paper.type_zh }}</span>
      </span>
    </div>

    <h4 class="paper-card__title">
      <span class="i18n" data-lang-block="en">{{ paper.title }}</span>
      <span class="i18n" data-lang-block="zh">{{ paper.title_zh }}</span>
    </h4>

    <p class="paper-card__authors">
      <span class="i18n" data-lang-block="en">{{ paper.authors | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
      <span class="i18n" data-lang-block="zh">{{ paper.authors_zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
    </p>

    <p class="paper-card__venue">
      <span class="i18n" data-lang-block="en">{{ paper.venue_en | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
      <span class="i18n" data-lang-block="zh">{{ paper.venue_zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
    </p>

    <p class="paper-card__description">{% include bi.html en=paper.description_en zh=paper.description_zh %}</p>

    <div class="paper-card__actions">
      {% if paper.doi != "" %}
      <a class="paper-card__link" href="https://doi.org/{{ paper.doi }}" target="_blank" rel="noopener">DOI</a>
      {% else %}
      <button class="paper-card__link" type="button" disabled>DOI</button>
      {% endif %}
      {% if paper.pdf != "" %}
      <a class="paper-card__link" href="{{ paper.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
      {% endif %}
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="abstract-{{ paper.id }}">
        <span class="i18n" data-lang-block="en">Abstract</span>
        <span class="i18n" data-lang-block="zh">摘要</span>
      </button>
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="bibtex-{{ paper.id }}">
        BibTeX
      </button>
      {% if paper.github != "" %}
      <a class="paper-card__link paper-card__link--github" href="{{ paper.github }}" target="_blank" rel="noopener">GitHub</a>
      {% else %}
      <button class="paper-card__link paper-card__link--github" type="button" disabled>GitHub</button>
      {% endif %}
    </div>

    <div class="paper-card__detail" id="abstract-{{ paper.id }}" hidden>
      <div class="paper-card__detail-label">
        <span class="i18n" data-lang-block="en">Abstract</span>
        <span class="i18n" data-lang-block="zh">摘要</span>
      </div>
      <p>{% include bi.html en=paper.abstract_en zh=paper.abstract_zh %}</p>
    </div>

    <div class="paper-card__detail" id="bibtex-{{ paper.id }}" hidden>
      <div class="paper-card__detail-label">BibTeX</div>
      <pre><code>{{ paper.bibtex | escape }}</code></pre>
    </div>
  </article>
  {% endfor %}

  <!-- Peer-reviewed Publications -->
  <h3 class="section__subtitle">
    <span class="i18n" data-lang-block="en">{{ p.section_titles.peer_reviewed.en }}</span>
    <span class="i18n" data-lang-block="zh">{{ p.section_titles.peer_reviewed.zh }}</span>
  </h3>
  {% for paper in p.peer_reviewed %}
  <article class="paper-card" data-paper-id="{{ paper.id }}">
    <div class="paper-card__meta">
      <span class="paper-card__year">{{ paper.year }}</span>
      <span class="paper-card__type">
        <span class="i18n" data-lang-block="en">{{ paper.type_en }}</span>
        <span class="i18n" data-lang-block="zh">{{ paper.type_zh }}</span>
      </span>
    </div>

    <h4 class="paper-card__title">
      <span class="i18n" data-lang-block="en">{{ paper.title }}</span>
      <span class="i18n" data-lang-block="zh">{{ paper.title_zh }}</span>
    </h4>

    <p class="paper-card__authors">
      <span class="i18n" data-lang-block="en">{{ paper.authors | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
      <span class="i18n" data-lang-block="zh">{{ paper.authors_zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
    </p>

    <p class="paper-card__venue">
      <span class="i18n" data-lang-block="en">{{ paper.venue_en | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
      <span class="i18n" data-lang-block="zh">{{ paper.venue_zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
    </p>

    <p class="paper-card__description">{% include bi.html en=paper.description_en zh=paper.description_zh %}</p>

    <div class="paper-card__actions">
      {% if paper.doi != "" %}
      <a class="paper-card__link" href="https://doi.org/{{ paper.doi }}" target="_blank" rel="noopener">DOI</a>
      {% else %}
      <button class="paper-card__link" type="button" disabled>DOI</button>
      {% endif %}
      {% if paper.pdf != "" %}
      <a class="paper-card__link" href="{{ paper.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
      {% endif %}
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="abstract-{{ paper.id }}">
        <span class="i18n" data-lang-block="en">Abstract</span>
        <span class="i18n" data-lang-block="zh">摘要</span>
      </button>
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="bibtex-{{ paper.id }}">
        BibTeX
      </button>
      {% if paper.github != "" %}
      <a class="paper-card__link paper-card__link--github" href="{{ paper.github }}" target="_blank" rel="noopener">GitHub</a>
      {% else %}
      <button class="paper-card__link paper-card__link--github" type="button" disabled>GitHub</button>
      {% endif %}
    </div>

    <div class="paper-card__detail" id="abstract-{{ paper.id }}" hidden>
      <div class="paper-card__detail-label">
        <span class="i18n" data-lang-block="en">Abstract</span>
        <span class="i18n" data-lang-block="zh">摘要</span>
      </div>
      <p>{% include bi.html en=paper.abstract_en zh=paper.abstract_zh %}</p>
    </div>

    <div class="paper-card__detail" id="bibtex-{{ paper.id }}" hidden>
      <div class="paper-card__detail-label">BibTeX</div>
      <pre><code>{{ paper.bibtex | escape }}</code></pre>
    </div>
  </article>
  {% endfor %}

  <!-- Patents -->
  <h3 class="section__subtitle">
    <span class="i18n" data-lang-block="en">{{ p.section_titles.patents.en }}</span>
    <span class="i18n" data-lang-block="zh">{{ p.section_titles.patents.zh }}</span>
  </h3>
  {% for item in p.patents %}
  <article class="patent-card" data-patent-id="{{ item.id }}">
    <div class="patent-card__status">
      <span class="i18n" data-lang-block="en">{{ item.status_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.status_zh }}</span>
    </div>
    <h4 class="patent-card__title">
      <span class="i18n" data-lang-block="en">{{ item.title_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.title_zh }}</span>
    </h4>

    <p class="patent-card__meta">
      <span class="i18n" data-lang-block="en">{{ item.number }} · {{ item.date }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.number_zh }} · {{ item.date_zh }}</span>
    </p>

    <p class="patent-card__authors">
      <span class="i18n" data-lang-block="en">{{ item.inventors_en | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.inventors_zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
    </p>

    <p class="patent-card__description">{% include bi.html en=item.description_en zh=item.description_zh %}</p>

    <div class="paper-card__actions">
      <a class="paper-card__link paper-card__link--github" href="{{ item.github }}" target="_blank" rel="noopener">GitHub</a>
    </div>
  </article>
  {% endfor %}
</section>
