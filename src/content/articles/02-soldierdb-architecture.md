---
title: SoldierDB: A Relational Storage Engine with B+Trees and Vector Search in Go
description: Deep dive into building SoldierDB: crash-safe page stores, copy-on-write B+tree indices, and exposing a stable C ABI.
date: 2026-08-15
tags: [databases, golang, c-abi, vector-search]
lang: en
draft: false
---

# SoldierDB: A Relational Storage Engine with B+Trees and Vector Search in Go

SoldierDB started out as an inquiry into how database storage engines maintain durability across crashes while preserving low-latency reads. When an engineer reads about ACID properties, it is easy to nod along with write-ahead logging (WAL) and slotted pages. But until you manage raw byte slices, serialize disk pages, and maintain pointer links in memory, the guarantees remain theoretical.

### Core Architectural Decisions

1. **Slotted Page Storage**: Disk files are partitioned into uniform 4KB pages. Page headers maintain offsets to dynamic-sized records, preventing page fragmentation and allowing straightforward defragmentation on record deletion.
2. **Copy-on-Write B+Tree**: Instead of in-place mutation requiring complex latching protocols, SoldierDB uses a copy-on-write B+tree structure. Updates produce path copying from root to leaf, giving transactional snapshots for concurrent readers without lock contention.
3. **Brute-Force Vector Search**: While HNSW or IVFPQ are popular for high-dimensional embeddings, implementing exact brute-force cosine similarity over fixed-dimension vectors within the storage engine allows low-overhead semantic indexing for small to medium sets.
4. **Stable C ABI**: To allow clients in Rust, C++, and Python to consume SoldierDB without Go runtime interop friction, the storage engine exposes a clean `extern "C"` style API using CGO export signatures.

Building the engine confirmed an enduring conviction: the cleanest software abstractions emerge from deeply understanding the storage layout at the byte level.

