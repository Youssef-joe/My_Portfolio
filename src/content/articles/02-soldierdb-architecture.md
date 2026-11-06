---
title: SoldierDB: A Relational Storage Engine with B+Trees and Vector Search in Go
description: Deep dive into building SoldierDB: crash-safe page stores, copy-on-write B+tree indices, vector search, and exposing a stable C ABI.
date: 2026-08-15
tags: [databases, golang, c-abi, vector-search]
lang: en
draft: false
cover: /images/blog/soldierdb-engine.svg
---

# SoldierDB: A Relational Storage Engine with B+Trees and Vector Search in Go

![SoldierDB Modular Engine Architecture](/images/blog/soldierdb-engine.svg)

SoldierDB is a relational database built from scratch in Go to study how durable storage engines guarantee ACID invariants without sacrificing read latency.

When studying database internals, write-ahead logging (WAL) and slotted pages seem simple conceptually. But until you serialize raw memory offsets, handle file truncations on crash recovery, and maintain concurrent readers without global mutex locks, the trade-offs remain abstract.

---

### Key Architectural Pillars

#### 1. Copy-on-Write B+Tree Indexing
Instead of in-place mutation requiring complex page-level latching protocols, SoldierDB employs a **copy-on-write tree structure**:
* Updates clone path nodes from the root down to the target leaf.
* Concurrent readers hold an immutable root reference for lock-free snapshot reads.
* An atomic 8-byte pointer swap commits the root update once leaf writes succeed.

#### 2. Slotted Page Layout (4096-Byte Pages)
To avoid disk fragmentation from variable-length columns (VARCHAR, BLOBs):
* The **Page Header (24 bytes)** tracks the total free space and highest slot index.
* The **Slot Array** grows downward from the header, storing `(offset, length)` pairs.
* The **Record Payload** grows upward from the end of the page.
* Defragmentation is a linear memory-copy compacting free space when slots are freed.

```go
// Slotted Page Record Header
type SlotHeader struct {
    Offset uint16 // Byte offset from start of page
    Length uint16 // Length of serialized record
}

func (p *Page) InsertTuple(data []byte) (uint16, error) {
    if p.FreeSpace() < uint16(len(data)+4) {
        return 0, ErrPageOverflow
    }
    slotID := p.Header.SlotCount
    p.Header.SlotCount++
    // Write record to end of page window
    newOffset := p.Header.FreeSpaceEnd - uint16(len(data))
    copy(p.Data[newOffset:], data)
    p.SetSlot(slotID, SlotHeader{Offset: newOffset, Length: uint16(len(data))})
    p.Header.FreeSpaceEnd = newOffset
    return slotID, nil
}
```

---

### Embedded Vector Similarity Search

Modern workloads frequently pair structured metadata with semantic embeddings. SoldierDB includes a dedicated float32 vector column type:

| Engine Stage | Implementation | Complexity |
| :--- | :--- | :--- |
| **Storage** | Contiguous 768 / 1536 float32 arrays | $O(D)$ space per row |
| **Distance Metric** | Cosine Similarity & Dot Product | SIMD unrolled iterations |
| **Top-K Selection** | Bounded Min-Heap Priority Queue | $O(N \log K)$ |

---

### Stable C ABI: Interoperating with Rust & C++

To make SoldierDB usable outside the Go runtime, the engine exports clean C symbol bindings via CGO:

```c
// soldierdb.h — Public C Foreign Function Interface
typedef struct soldier_db_t soldier_db;

soldier_db* soldier_open(const char* filepath);
int soldier_execute_sql(soldier_db* db, const char* query, char** result_json);
void soldier_close(soldier_db* db);
```

This architecture enables Rust backend services and C++ game engines to utilize SoldierDB without runtime conflict.
