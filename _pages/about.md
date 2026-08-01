---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% assign h = site.data.home %}

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<!-- ============================== HERO ============================== -->
<section class="hero" id="about">
  <canvas id="hero-network" aria-hidden="true"></canvas>
  <div class="hero__inner">
    <div class="hero__kicker">
      <span class="i18n" data-lang-block="en">{{ site.author.employer | default: "Crypto Finance · Stablecoin Economics · Biophysical Economics" }}</span>
      <span class="i18n" data-lang-block="zh">加密金融 · 稳定币经济学 · 生物物理经济学</span>
    </div>
    <h1 class="hero__name">
      <span class="i18n" data-lang-block="en">{{ h.hero.name_en }} <span class="hero__name-zh">周家屹</span></span>
      <span class="i18n" data-lang-block="zh">{{ h.hero.name_zh }} <span class="hero__name-en">Jiayi Zhou</span></span>
    </h1>
    <p class="hero__subtitle">
      <span class="i18n" data-lang-block="en">{{ h.hero.subtitle_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ h.hero.subtitle_zh }}</span>
    </p>
    <p class="hero__tagline">
      <span class="i18n" data-lang-block="en">{{ h.hero.tagline_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ h.hero.tagline_zh }}</span>
    </p>
    <div class="hero__keywords">
      {% for kw in h.hero.keywords %}
      <span class="hero__chip"><span class="i18n" data-lang-block="en">{{ kw.en }}</span><span class="i18n" data-lang-block="zh">{{ kw.zh }}</span></span>
      {% endfor %}
    </div>
    <div class="hero__actions">
      <a class="hero__btn hero__btn--gold" href="{{ site.author.googlescholar }}"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
      <a class="hero__btn" href="mailto:{{ site.author.email }}"><i class="fas fa-envelope"></i> Email</a>
      <a class="hero__btn" href="https://github.com/{{ site.author.github }}"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
</section>

<span class='anchor' id='about-me'></span>

<!-- ============================== ABOUT ============================== -->
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">About Me</span><span class="i18n" data-lang-block="zh">个人简介</span></h2>
  {% for p in h.about.paragraphs %}
    {% include bi.html en=p.en zh=p.zh %}
  {% endfor %}
  <p>
    <a href='{{ site.author.googlescholar }}'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations" alt="Google Scholar citations"></a>
  </p>
</section>

<!-- ======================= RESEARCH PHILOSOPHY ======================= -->
<span class='anchor' id='philosophy'></span>
<section class="section philosophy">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Research Philosophy</span><span class="i18n" data-lang-block="zh">研究理念</span></h2>
  <p class="section__lede">
    <span class="i18n" data-lang-block="en">First-principles economics: value, money, and energy as one conservation–dissipation dynamics.</span>
    <span class="i18n" data-lang-block="zh">第一性原理的经济学：价值、货币与能源，同属一套守恒—耗散动力学。</span>
  </p>
  <div class="philosophy__grid">
    {% for card in h.philosophy.cards %}
    <div class="philosophy__card">
      <h3>
        <span class="i18n" data-lang-block="en">{{ card.title_en }}</span>
        <span class="i18n" data-lang-block="zh">{{ card.title_zh }}</span>
      </h3>
      {% include bi.html en=card.en zh=card.zh %}
    </div>
    {% endfor %}
  </div>
  <blockquote class="philosophy__quote">
    <div class="i18n" data-lang-block="zh">
      <p>{{ h.philosophy.quote.zh_text }}</p>
      <cite>{{ h.philosophy.quote.zh_source }}</cite>
    </div>
    <div class="i18n" data-lang-block="en">
      <p>{{ h.philosophy.quote.en_text }}</p>
      <cite>{{ h.philosophy.quote.en_source }}</cite>
    </div>
  </blockquote>
</section>

<!-- ============================== NEWS ============================== -->
<span class='anchor' id='news'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">News</span><span class="i18n" data-lang-block="zh">最新动态</span></h2>
  <ul class="news-list">
    {% for item in h.news %}
    <li class="news-list__item">
      <span class="news-list__date">{{ item.date }}</span>
      <div class="news-list__body">{% include bi.html en=item.en zh=item.zh %}</div>
    </li>
    {% endfor %}
  </ul>
</section>

<!-- ========================== PUBLICATIONS ========================== -->
<span class='anchor' id='publications'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Publications</span><span class="i18n" data-lang-block="zh">学术发表</span></h2>

  <div class='paper-box'>
    <div class='paper-box-image'>
      <div>
        <div class="badge"><span class="i18n" data-lang-block="en">{{ h.publications.featured.badge_en }}</span><span class="i18n" data-lang-block="zh">{{ h.publications.featured.badge_zh }}</span></div>
        <img src='images/500x300.png' alt="crypto risk" width="100%">
      </div>
    </div>
    <div class='paper-box-text' markdown="1">

<span class="i18n" data-lang-block="en">**{{ h.publications.featured.title }}**</span>
<span class="i18n" data-lang-block="zh">**{{ h.publications.featured.title_zh }}**</span>

{{ h.publications.featured.authors | markdownify }}

<span class="i18n" data-lang-block="en">{{ h.publications.featured.venue_en | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
<span class="i18n" data-lang-block="zh">{{ h.publications.featured.venue_zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>

{% for pt in h.publications.featured.points %}
- <span class="i18n" data-lang-block="en">{{ pt.en | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span><span class="i18n" data-lang-block="zh">{{ pt.zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
{% endfor %}
    </div>
  </div>

  <ul class="pub-list">
    {% for pub in h.publications.list %}
    <li>{% include bi.html en=pub.en zh=pub.zh %}</li>
    {% endfor %}
  </ul>
</section>

<!-- ============================= PATENTS ============================ -->
<span class='anchor' id='patents'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Patents</span><span class="i18n" data-lang-block="zh">专利</span></h2>
  <ul class="pub-list">
    {% for p in h.patents %}
    <li>{% include bi.html en=p.en zh=p.zh %}</li>
    {% endfor %}
  </ul>
</section>

<!-- ======================= RESEARCH EXPERIENCE ======================= -->
<span class='anchor' id='research'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Research Experience</span><span class="i18n" data-lang-block="zh">科研经历</span></h2>
  <div class="research">
    <div class="research__head">
      <div>
        <strong>
          <span class="i18n" data-lang-block="en">{{ h.research.title_en }}</span>
          <span class="i18n" data-lang-block="zh">{{ h.research.title_zh }}</span>
        </strong>
        <em>
          — <span class="i18n" data-lang-block="en">{{ h.research.role_en }}</span><span class="i18n" data-lang-block="zh">{{ h.research.role_zh }}</span>
        </em>
      </div>
      <span class="research__period">
        <span class="i18n" data-lang-block="en">{{ h.research.period }}</span>
        <span class="i18n" data-lang-block="zh">{{ h.research.period_zh }}</span>
      </span>
    </div>
    <ul>
      {% for pt in h.research.points %}
      <li>{% include bi.html en=pt.en zh=pt.zh %}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<!-- ============================ EDUCATION =========================== -->
<span class='anchor' id='education'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Education</span><span class="i18n" data-lang-block="zh">教育经历</span></h2>
  <ul class="edu-list">
    {% for e in h.education %}
    <li class="edu-list__item">
      <span class="edu-list__period">
        <span class="i18n" data-lang-block="en">{{ e.period }}</span>
        <span class="i18n" data-lang-block="zh">{{ e.period_zh }}</span>
      </span>
      <div>{% include bi.html en=e.en zh=e.zh %}</div>
    </li>
    {% endfor %}
  </ul>
</section>

<!-- ============================= SKILLS ============================= -->
<span class='anchor' id='skills'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Skills &amp; Methods</span><span class="i18n" data-lang-block="zh">技能与方法</span></h2>
  <div class="skills-grid">
    {% for g in h.skills.groups %}
    <div class="skills-card">
      <h3>
        <span class="i18n" data-lang-block="en">{{ g.name_en }}</span>
        <span class="i18n" data-lang-block="zh">{{ g.name_zh }}</span>
      </h3>
      <ul>
        {% for it in g.items %}
        <li>{% include bi.html en=it.en zh=it.zh %}</li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

<!-- ========================= CERTIFICATIONS ========================= -->
<span class='anchor' id='certifications'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Certifications</span><span class="i18n" data-lang-block="zh">证书</span></h2>
  <ul class="edu-list">
    {% for c in h.certifications %}
    <li class="edu-list__item">
      <span class="edu-list__period">{{ c.period }}</span>
      <div>{% include bi.html en=c.en zh=c.zh %}</div>
    </li>
    {% endfor %}
  </ul>
</section>

<!-- ============================= HOBBIES ============================ -->
<span class='anchor' id='hobbies'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Hobbies</span><span class="i18n" data-lang-block="zh">兴趣爱好</span></h2>
  {% for hb in h.hobbies %}
  <div class="hobby">
    <strong>
      <span class="i18n" data-lang-block="en">{{ hb.name_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ hb.name_zh }}</span>
    </strong>
    {% include bi.html en=hb.en zh=hb.zh %}
  </div>
  {% endfor %}
</section>

<!-- =========================== REFERENCES =========================== -->
<span class='anchor' id='references'></span>
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">References</span><span class="i18n" data-lang-block="zh">推荐人</span></h2>
  {% include bi.html en=h.references.en zh=h.references.zh %}
</section>
