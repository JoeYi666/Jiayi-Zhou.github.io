---
permalink: /publications/
title: ""
excerpt: ""
author_profile: true
---

{% assign p = site.data.publications %}

<section class="section publications-page">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Publications</span><span class="i18n" data-lang-block="zh">学术发表</span></h2>
  <p class="section__lede">{% include bi.html en=p.intro.en zh=p.intro.zh %}</p>

  <h3 class="section__subtitle"><span class="i18n" data-lang-block="en">Peer-reviewed</span><span class="i18n" data-lang-block="zh">已发表论文</span></h3>
  {% for paper in p.published %}
  <article class="paper-card" data-paper-id="{{ paper.id }}">
    <div class="paper-card__meta">
      <span class="paper-card__year">{{ paper.year }}</span>
      <span class="paper-card__type"><span class="i18n" data-lang-block="en">{{ paper.type_en }}</span><span class="i18n" data-lang-block="zh">{{ paper.type_zh }}</span></span>
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
      {% endif %}
      {% if paper.pdf != "" %}
      <a class="paper-card__link" href="{{ paper.pdf }}" target="_blank" rel="noopener">PDF</a>
      {% endif %}
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="abstract-{{ paper.id }}">
        <span class="i18n" data-lang-block="en">Abstract</span>
        <span class="i18n" data-lang-block="zh">摘要</span>
      </button>
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="bibtex-{{ paper.id }}">
        BibTeX
      </button>
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

  <h3 class="section__subtitle"><span class="i18n" data-lang-block="en">Working Papers</span><span class="i18n" data-lang-block="zh">工作论文</span></h3>
  {% for paper in p.working_papers %}
  <article class="paper-card" data-paper-id="{{ paper.id }}">
    <div class="paper-card__meta">
      <span class="paper-card__year">{{ paper.year }}</span>
      <span class="paper-card__type paper-card__type--wp"><span class="i18n" data-lang-block="en">{{ paper.type_en }}</span><span class="i18n" data-lang-block="zh">{{ paper.type_zh }}</span></span>
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
      {% endif %}
      {% if paper.pdf != "" %}
      <a class="paper-card__link" href="{{ paper.pdf }}" target="_blank" rel="noopener">PDF</a>
      {% endif %}
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="abstract-{{ paper.id }}">
        <span class="i18n" data-lang-block="en">Abstract</span>
        <span class="i18n" data-lang-block="zh">摘要</span>
      </button>
      <button class="paper-card__toggle" type="button" aria-expanded="false" data-toggle="bibtex-{{ paper.id }}">
        BibTeX
      </button>
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
</section>
