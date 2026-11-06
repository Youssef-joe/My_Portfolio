---
title: PeerTrust: Benchmark Verification & Citation Forensics at ScienceWerx
description: How we validated citation-integrity screening algorithms across 268 ORCID-resolved researchers with a 99.2% exact numerical match.
date: 2026-09-02
tags: [research, algorithms, forensics, sciencewerx]
lang: en
draft: false
cover: /images/blog/peertrust-forensics.svg
---

# PeerTrust: Benchmark Verification & Citation Forensics at ScienceWerx

![PeerTrust Benchmark Validation Workflow](/images/blog/peertrust-forensics.svg)

Scientific progress relies on verifiable trust. In recent years, academic literature has faced growing threats from **citation cartels**, **paper mills**, and **coordinated referencing syndicates** designed to game H-indexes and university ranking algorithms.

At **ScienceWerx Inc.**, in collaboration with **KNOWDYN LTD**, our research team engineered **PeerTrust** — an automated, open researcher-level citation-integrity screening framework.

---

### The Empirical Benchmark Challenge

Before deploying citation forensics into production, screening algorithms must be rigorously benchmarked to prevent false-positive classifications that could damage legitimate academic reputations.

We designed a dual-engine verification protocol:
1. **ScienceWerx Production Engine**: A distributed screening engine processing cross-institutional citation graphs.
2. **Independent Python Reference Model**: A clean-room reimplementation written strictly from mathematical first principles by an independent team.

---

### Cohort & Empirical Concordance

The validation benchmark evaluated **268 ORCID-resolved researchers** with high citation profiles across multidisciplinary categories:

| Evaluation Metric | Production Engine | Python Reference | Concordance |
| :--- | :--- | :--- | :--- |
| **Analyzed Cohort** | 268 Profiles | 268 Profiles | 100% |
| **Fully Scored Profiles** | 260 Profiles | 260 Profiles | **100% Agreement** |
| **Classification Verdict** | 260 Verdicts | 260 Verdicts | **100% (260/260)** |
| **Exact Numerical Match** | Multi-decimal score | Multi-decimal score | **99.2% Exact** |

> **Key Finding**: The dual-engine design demonstrated that citation anomaly indicators remain mathematically invariant across execution runtimes, confirming production reliability.

---

### Detection Vectors in PeerTrust

The screening pipeline identifies three distinct forensic signals:

1. **Reciprocal Citation Cartels**: Spectral graph clustering identifies tightly coupled cliques where Author A and Author B cite each other disproportionately above field averages.
2. **Self-Citation Velocity Spikes**: Detecting unnatural bursts of self-referencing in newly published papers without genuine thematic continuity.
3. **Co-Authorship Inflation Rings**: Mapping editorial networks that trade favorable peer review for mandatory citation inclusion.

### Publication & Open Science Dataset

The full benchmark methodology, algorithmic definitions, and curated validation cohort are published and archived:
* **Title**: *PeerTrust Finds Elevated Citation-Forensic Profiles in Recent Highly Cited Research*
* **Authors**: Ali, Y., Basuni, H., Kamal, A., Kadry, B., and Saqr, K. (2026)
* **Venue**: ScienceWerx Inc. and KNOWDYN LTD
* **Zenodo DOI**: [10.5281/zenodo.22151538](https://doi.org/10.5281/zenodo.22151538)
