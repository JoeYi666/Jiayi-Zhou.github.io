---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% assign a = site.data.about %}

<!-- ============================== HERO ============================== -->
<section class="hero" id="about">
  <canvas id="hero-network" aria-hidden="true"></canvas>
  <div class="hero__inner">
    <div class="hero__text">
    <div class="hero__kicker">
      <span class="i18n" data-lang-block="en">{{ site.author.employer | default: "Crypto Finance · Stablecoin Economics · Biophysical Economics" }}</span>
      <span class="i18n" data-lang-block="zh">加密金融 · 稳定币经济学 · 生物物理经济学</span>
    </div>
    <h1 class="hero__name">
      <span class="i18n" data-lang-block="en">{{ a.hero.name_en }} <span class="hero__name-zh">周家屹</span></span>
      <span class="i18n" data-lang-block="zh">{{ a.hero.name_zh }} <span class="hero__name-en">Jiayi Zhou</span></span>
    </h1>
    <p class="hero__subtitle">
      <span class="i18n" data-lang-block="en">{{ a.hero.subtitle_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ a.hero.subtitle_zh }}</span>
    </p>
    <p class="hero__tagline">
      <span class="i18n" data-lang-block="en">{{ a.hero.tagline_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ a.hero.tagline_zh }}</span>
    </p>
    <div class="hero__keywords">
      {% for kw in a.hero.keywords %}
      <span class="hero__chip"><span class="i18n" data-lang-block="en">{{ kw.en }}</span><span class="i18n" data-lang-block="zh">{{ kw.zh }}</span></span>
      {% endfor %}
    </div>
    <div class="hero__actions">
      <a class="hero__btn hero__btn--gold" href="{{ site.author.googlescholar }}"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
      <a class="hero__btn" href="mailto:{{ site.author.email }}"><i class="fas fa-envelope"></i> Email</a>
      <a class="hero__btn" href="https://github.com/{{ site.author.github }}"><i class="fab fa-github"></i> GitHub</a>
      <a class="hero__btn hero__btn--icon" href="{{ site.author.orcid }}" aria-label="ORCID"><i class="ai ai-orcid"></i></a>
      <a class="hero__btn hero__btn--icon" href="{{ site.author.researchgate }}" aria-label="ResearchGate"><i class="fab fa-researchgate"></i></a>
    </div>
    </div>
    <div class="hero__avatar">
      <img src="{{ site.author.avatar | relative_url }}" alt="{{ site.author.name }}">
    </div>
  </div>
</section>

<!-- ============================== CONTACT ============================== -->
{% assign c = site.data.contact %}
<section class="section contact-section" id="contact">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Contact</span><span class="i18n" data-lang-block="zh">联系方式</span></h2>
  <p class="section__lede">{% include bi.html en=c.intro.en zh=c.intro.zh %}</p>

  <div class="contact-grid">
    <div class="contact-card">
      <h3>Email</h3>
      <p><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
    </div>

    {% for loc in c.locations %}
    <div class="contact-card">
      <h3>
        <span class="i18n" data-lang-block="en">{{ loc.label_en }}</span>
        <span class="i18n" data-lang-block="zh">{{ loc.label_zh }}</span>
      </h3>
      <p>
        <span class="i18n" data-lang-block="en">{{ loc.value_en }}</span>
        <span class="i18n" data-lang-block="zh">{{ loc.value_zh }}</span>
      </p>
    </div>
    {% endfor %}
  </div>

  <p class="contact-social-hint">{% include bi.html en=c.social_hint.en zh=c.social_hint.zh %}</p>
  <div class="hero__actions hero__actions--center">
    <a class="hero__btn" href="{{ site.author.googlescholar }}"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
    <a class="hero__btn" href="https://github.com/{{ site.author.github }}"><i class="fab fa-github"></i> GitHub</a>
    <a class="hero__btn" href="{{ site.author.orcid }}"><i class="ai ai-orcid"></i> ORCID</a>
    <a class="hero__btn" href="{{ site.author.researchgate }}"><i class="fab fa-researchgate"></i> ResearchGate</a>
  </div>
</section>

<!-- ============================== ABOUT ============================== -->
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">About Me</span><span class="i18n" data-lang-block="zh">个人简介</span></h2>
  {% for p in a.about.paragraphs %}
    {% include bi.html en=p.en zh=p.zh %}
  {% endfor %}
</section>

<!-- ======================= RESEARCH PHILOSOPHY ======================= -->
<section class="section philosophy">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Research Philosophy</span><span class="i18n" data-lang-block="zh">研究理念</span></h2>
  <p class="section__lede">
    <span class="i18n" data-lang-block="en">Empirical finance meets monetary theory: from balance-sheet mechanics to causal inference and reproducible, AI-augmented research.</span>
    <span class="i18n" data-lang-block="zh">实证金融与货币理论相结合：从资产负债表机制到因果推断、可复现与 AI 增强的科研。</span>
  </p>
  <div class="philosophy__grid">
    {% for card in a.philosophy.cards %}
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
      <p>{{ a.philosophy.quote.zh_text }}</p>
      <cite>{{ a.philosophy.quote.zh_source }}</cite>
    </div>
    <div class="i18n" data-lang-block="en">
      <p>{{ a.philosophy.quote.en_text }}</p>
      <cite>{{ a.philosophy.quote.en_source }}</cite>
    </div>
  </blockquote>
</section>

<!-- ============================ EDUCATION =========================== -->
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Education</span><span class="i18n" data-lang-block="zh">教育经历</span></h2>
  <ul class="edu-list">
    {% for e in a.education %}
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

<!-- ============================= HOBBIES ============================ -->
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Hobbies</span><span class="i18n" data-lang-block="zh">兴趣爱好</span></h2>
  {% for hb in a.hobbies %}
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
<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">References</span><span class="i18n" data-lang-block="zh">推荐人</span></h2>
  {% include bi.html en=a.references.en zh=a.references.zh %}
</section>
