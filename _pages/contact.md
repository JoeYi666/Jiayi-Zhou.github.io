---
permalink: /contact/
title: ""
excerpt: ""
author_profile: true
---

{% assign c = site.data.contact %}

<section class="section contact-page">
  <h2 class="section__title"><span class="i18n" data-lang-block="en">Contact</span><span class="i18n" data-lang-block="zh">联系</span></h2>
  <p class="section__lede">{% include bi.html en=c.intro.en zh=c.intro.zh %}</p>

  <div class="contact-grid">
    <div class="contact-card">
      <h3>
        <span class="i18n" data-lang-block="en">Email</span>
        <span class="i18n" data-lang-block="zh">邮箱</span>
      </h3>
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
