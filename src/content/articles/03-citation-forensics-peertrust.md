---
title: PeerTrust: Benchmark Verification & Citation Forensics at ScienceWerx
description: How we validated citation-integrity screening algorithms across 268 ORCID-resolved researchers with a 99.2% exact numerical match.
date: 2026-09-02
tags: [research, algorithms, forensics, sciencewerx]
lang: en
draft: false
---

# PeerTrust: Benchmark Verification & Citation Forensics at ScienceWerx

Scientific literature relies fundamentally on trust and peer recognition. However, the rise of citation cartels, paper mills, and manipulated referencing schemes threatens the credibility of modern research metrics.

At **ScienceWerx Inc.** and in collaboration with **KNOWDYN LTD**, our team developed **PeerTrust**, an open researcher-level citation-integrity screening system designed to systematically identify anomalous referencing behavior.

### The Benchmarking Challenge

To ensure the screening tool does not produce false positives or diverge under differing runtime environments, we performed an exhaustive empirical benchmark:

- **Cohort**: 268 ORCID-resolved highly-cited researchers across multiple scientific disciplines.
- **Verification Methodology**: We evaluated the production scoring engine against an independent Python reference reimplementation built from mathematical first principles.
- **Agreement**: The production engine and the independent Python implementation agreed on the classification verdict for **all 260 evaluable researchers (100% verdict concordance)**.
- **Precision**: 99.2% of scored profiles yielded an exact numerical match down to multiple floating-point decimal places.

The results, datasets, and methodology are documented in our research paper:
*Ali, Y., Basuni, H., Kamal, A., Kadry, B., and Saqr, K. (2026). PeerTrust Finds Elevated Citation-Forensic Profiles in Recent Highly Cited Research. Dataset: doi:10.5281/zenodo.22151538.*

