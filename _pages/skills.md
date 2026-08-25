---
permalink: /skills/
title: ""
excerpt: ""
author_profile: true
---

{% assign s = site.data.skills %}

<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Skills & Methods</span><span class="i18n" data-lang-block="zh">技能与方法</span></h2>
  <p class="section__lede">{% include bi.html en=s.intro.en zh=s.intro.zh %}</p>

  <div class="skills-grid">
    {% for g in s.groups %}
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

<section class="section">
  <h3 class="section__subtitle">
    <span class="i18n" data-lang-block="en">{{ s.certifications.title_en }}</span>
    <span class="i18n" data-lang-block="zh">{{ s.certifications.title_zh }}</span>
  </h3>
  <ul class="edu-list">
    {% for c in s.certifications.items %}
    <li class="edu-list__item">
      <span class="edu-list__period">{{ c.period }}</span>
      <div>{% include bi.html en=c.en zh=c.zh %}</div>
    </li>
    {% endfor %}
  </ul>
</section>
