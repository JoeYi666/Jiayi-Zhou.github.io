---
permalink: /patents/
title: ""
excerpt: ""
author_profile: true
---

{% assign p = site.data.patents %}

<section class="section">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Patents</span><span class="i18n" data-lang-block="zh">专利</span></h2>
  <p class="section__lede">{% include bi.html en=p.intro.en zh=p.intro.zh %}</p>

  {% for item in p.list %}
  <article class="patent-card">
    <div class="patent-card__status">
      <span class="i18n" data-lang-block="en">{{ item.status_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.status_zh }}</span>
    </div>
    <h3 class="patent-card__title">
      <span class="i18n" data-lang-block="en">{{ item.title_en }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.title_zh }}</span>
    </h3>
    
    <p class="patent-card__meta">
      <span class="i18n" data-lang-block="en">{{ item.number }} · {{ item.date }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.number_zh }} · {{ item.date_zh }}</span>
    </p>
    
    <p class="patent-card__authors">
      <span class="i18n" data-lang-block="en">{{ item.inventors_en | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
      <span class="i18n" data-lang-block="zh">{{ item.inventors_zh | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}</span>
    </p>
    
    <p class="patent-card__description">{% include bi.html en=item.description_en zh=item.description_zh %}</p>
  </article>
  {% endfor %}
</section>
