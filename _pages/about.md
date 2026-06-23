---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. candidate at the Institutes of Science and Development, Chinese Academy of Sciences (CASISD), affiliated with the School of Public Policy and Management, University of Chinese Academy of Sciences (UCAS). My supervisor is Prof. Jian-Feng Guo.

My research focuses on **crypto finance and stablecoin economics**, spanning decentralized finance (DeFi), systemic risk and financial stability, international financial markets, and machine learning / causal inference in finance. My doctoral dissertation examines the impact of USD stablecoins on international financial markets through a multi-method empirical framework.

<a href='https://scholar.google.com.hk/citations?user=qcxrzQcAAAAJ&hl=zh-CN'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

# 🔥 News
- *2026.01*: &nbsp;🎉🎉 U.S. Patent Application No. 19/346,554 filed — "Industry Development State Assessment Device and Apparatus Based on Dissipative Structural Model".
- *2025.06*: &nbsp;🎉 Manuscript submitted to *International Review of Financial Analysis* — "Evolution of Crypto Financial Risk: From Code Vulnerabilities to Macroeconomic Spillovers" (FINANA-D-26-00631).
- *2025.02*: &nbsp;🎉 Paper published in *Big Data and Cognitive Computing* — "Ranking Influential Non-Content Factors on Scientific Papers' Citation Impact".

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/500x300.png' alt="crypto risk" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Evolution of Crypto Financial Risk: From Code Vulnerabilities to Macroeconomic Spillovers]()

**Jiayi-Yi Zhou**, Jie-Jing Li, Bo-Bo Xu, Yu-Ran Ma\*, Jian-Feng Guo\*

*International Review of Financial Analysis* (Under Review), Manuscript No. FINANA-D-26-00631

- Developed a modular BERTopic framework to conduct topic modeling on 891 crypto-finance publications, identifying 19 core research themes spanning risk identification, measurement, transmission, hedging, and governance.
- Mapped topic clusters against a hand-collected database of 1,980 crypto risk events (2012–2025) to construct an end-to-end risk research framework.
</div>
</div>

- [Ranking Influential Non-Content Factors on Scientific Papers' Citation Impact: A Multidomain Comparative Analysis](https://doi.org/10.3390/bdcc9020030), Zhu, J., **Zhou, J.-Y.**, Pan, J., Gu, F., & Guo, J.-F.\*, *Big Data and Cognitive Computing*, 9(2), 30, 2025.
- Analysis of China's Oil and Gas Imports and Exports from 2018 to 2022, **Zhou, J.-Y.**, et al., *International Petroleum Economics*, 2023. (in Chinese)
- A Model for Calculating the Value of Carbon Emission Rights Based on the Ideas of Biophysical Economics, **Zhou, J.-Y.**, et al., *Chinese Journal of Management Science*, 2022. (in Chinese)

# 🏆 Patents
- Guo, J.-F., **Zhou, J.-Y.**, Cao, Q., Liu, S., & Pan, J. (2026). *Industry Development State Assessment Device and Apparatus Based on Dissipative Structural Model*. U.S. Patent Application No. 19/346,554, filed Jan. 22, 2026.

# 🔬 Research Experience

**Doctoral Dissertation: The Impact of USD Stablecoins on International Financial Markets** — *Independent Researcher*
*Sep. 2023 – Present*

- Constructed the **Incremental-Stock-Flow-Consistent (ISFC)** analytical framework to model stablecoin issuers' balance sheets, revealing their accounting isomorphism with commercial banks alongside institutional heterogeneity.
- Applied **Random Forest, XGBoost, and SHAP** to identify key drivers of stablecoin issuance across macro, crypto-market, regulatory, and network-effect dimensions; developed **LSTM/GRU and Transformer** models for multi-scenario supply forecasting.
- Employed **LP-IV with Elastic Net residual instruments** to identify causal effects of stablecoin reserve allocation on U.S. Treasury yields and commercial paper spreads; integrated **Diebold-Yilmaz spillover indices** and **TVP-VAR** to quantify time-varying volatility transmission to bond markets.
- Designed **Difference-in-Differences (DiD), triple-difference, and synthetic control** strategies with **IV-2SLS** (on-chain activity and regulatory events as instruments) to estimate stablecoins' impact on interbank lending, money market funds, and monetary policy rate pass-through.
- Built **cross-border stablecoin flow networks** using on-chain data; applied **PageRank, Louvain community detection, and cascade failure simulations** to analyze digital dollarization dynamics and foreign exchange volatility spillovers.
- Applied **Hansen (1999) panel threshold models** to test currency substitution effects across emerging and advanced economies; employed **RDD** for regulatory threshold identification and **event studies** on SVB-USDC depeg and GENIUS/CLARITY Act shocks.
- Data sources: **Glassnode, DeFiLlama, TradingView**; all empirical work implemented in **Python**.

# 🎓 Educations
- *2023.09 – Present*, **Ph.D. Candidate** in Public Policy and Management, University of Chinese Academy of Sciences / Institutes of Science and Development, CAS. Advisor: Prof. Jian-Feng Guo. Dissertation: *The Impact of USD Stablecoins on International Financial Markets: Research and Empirical Analysis*.
- *2019.09 – 2023.06*, **Bachelor of Management**, School of Economics and Management, China University of Petroleum, Beijing.

# 💻 Skills & Methods

**Programming & Tools**
- **Python** (proficient): data processing, econometric modeling, machine learning, deep learning
- **AI-Assisted Development**: Claude Code, GitHub Copilot — proficient in LLM-driven coding workflows for research automation; skilled in MCP (Model Context Protocol) tool development and integration
- **Version Control**: Git, GitHub — experienced in repository management and reproducible research pipelines
- **Data Platforms**: Bloomberg Terminal (BMC certified), Glassnode (on-chain analytics), DeFiLlama (DeFi metrics), TradingView (market data & technical analysis)
- **LaTeX**, Microsoft Office

**Quantitative Methods**
- **ML / DL**: Random Forest, XGBoost, SHAP, BERTopic, LSTM, GRU, Transformer
- **Causal Inference & Econometrics**: DiD, IV-2SLS, LP-IV, SVAR-IV, RDD, Synthetic Control, Panel Threshold Models (Hansen 1999), Event Studies
- **Time Series & Spillover Analysis**: TVP-VAR, Diebold-Yilmaz Spillover Index, VECM, CoVaR/MES
- **Network Analysis**: Complex network modeling, PageRank, Louvain community detection, cascade failure simulation

**Languages**
- Chinese: Native
- English: TOEFL — proficient in academic reading, writing, and communication

# 📜 Certifications
- *2023.05*, **Bloomberg Market Concepts (BMC)** — Bloomberg

# 🏊 Hobbies

**Swimming**
- Proficient in all four competitive strokes: Freestyle, Breaststroke, Backstroke, and Butterfly

**Movies**
- Avid cinephile with 1,000+ films watched; passionate about cinematic art and storytelling

# 💬 References
Available upon request.
