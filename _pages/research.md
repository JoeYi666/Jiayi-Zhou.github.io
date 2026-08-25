---
permalink: /research/
title: ""
excerpt: ""
author_profile: true
---

{% assign r = site.data.research %}

<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Research</span><span class="i18n" data-lang-block="zh">研究</span></h2>
  <p class="section__lede">{% include bi.html en=r.intro.en zh=r.intro.zh %}</p>
</section>

{% for proj in r.projects %}
<section class="section research-section">
  <div class="research__head">
    <div>
      <strong>
        <span class="i18n" data-lang-block="en">{{ proj.title_en }}</span>
        <span class="i18n" data-lang-block="zh">{{ proj.title_zh }}</span>
      </strong>
      <em>
        — <span class="i18n" data-lang-block="en">{{ proj.role_en }}</span><span class="i18n" data-lang-block="zh">{{ proj.role_zh }}</span>
      </em>
    </div>
    <span class="research__period">
      <span class="i18n" data-lang-block="en">{{ proj.period }}</span>
      <span class="i18n" data-lang-block="zh">{{ proj.period_zh }}</span>
    </span>
  </div>
  <ul>
    {% for pt in proj.points %}
    <li>{% include bi.html en=pt.en zh=pt.zh %}</li>
    {% endfor %}
  </ul>
</section>
{% endfor %}

<section class="section">
  <h3 class="section__subtitle">
    <span class="i18n" data-lang-block="en">{{ r.interests.title_en }}</span>
    <span class="i18n" data-lang-block="zh">{{ r.interests.title_zh }}</span>
  </h3>
  <ul class="interest-list">
    {% for item in r.interests.items %}
    <li><span class="i18n" data-lang-block="en">{{ item.en }}</span><span class="i18n" data-lang-block="zh">{{ item.zh }}</span></li>
    {% endfor %}
  </ul>
</section>
