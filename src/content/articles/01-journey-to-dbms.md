---
title: Satisfying my curiosity for DBMSs: Building a B+Tree from scratch in Go
description: Why do we even use a DBMS when storing data isn't that hard? Learning by building a KV store on top of a B+Tree.
date: 2026-07-25
tags: [databases, golang, btree, systems]
lang: en
draft: false
cover: /images/blog/btree-architecture.svg
---

# Satisfying my curiosity for DBMSs: Building a B+Tree from scratch in Go

![B+Tree Node Hierarchy & Slotted Page Storage Engine](/images/blog/btree-architecture.svg)

> **Core Lesson Learned**: Drawing the diagram taught me more than writing the code did. During initial implementation, I had a flawed execution path where a leaf node routed into "Find Child" — an arrow that strictly belongs to internal branch nodes. Tracing diagrams against raw pointer mutations caught what unit tests missed.

---

### Why Go Underneath the Abstraction?

I've always wanted to explore what happens underneath DBMS internals. Before diving in, a senior engineer gave me advice that shaped my entire journey:

> *"Before you go deep, grasp the complete high-level vision first. Why do we even use a DBMS when just dumping bytes to disk isn't that hard? What makes transactions complex? Why so many variants — OLTP, OLAP, and hybrid HTAP?"*

So I laid out a focused roadmap:
1. **Relational Normalization & Theoretical Foundations** (Studying relational calculus and schema constraints).
2. **Implementing SoldierDB** following the book *"Build Your Own Database From Scratch in Go"*.
3. **Linking the code to mechanical realities**: Breaking the engine under crash simulations, seeing how transactions roll back, and measuring B+Tree splits under skewed write patterns.

---

### The Two Node Personalities: Internal vs. Leaf

In a B+Tree, keeping internal and leaf nodes distinct is critical for cache performance:

| Attribute | Internal Nodes | Leaf Nodes |
| :--- | :--- | :--- |
| **Primary Role** | Router / Index Guide | Value Store & Sequential Scanner |
| **Contains Values?** | No, keys and child pointers only | Yes, raw record payloads |
| **Child Links** | Branching pointer array | Sibling pointer (`next_leaf`) |
| **Fan-out Factor** | High (e.g. 100–250 per 4KB page) | Moderate (record size dependent) |

```go
// Node header layout in Go
type BNode struct {
    data []byte // 4096-byte aligned page slice
}

const (
    BNODE_NODE = 1 // Internal router node
    BNODE_LEAF = 2 // Leaf node with records
)

func (node BNode) btype() uint16 {
    return binary.LittleEndian.Uint16(node.data[0:2])
}

func (node BNode) nkeys() uint16 {
    return binary.LittleEndian.Uint16(node.data[2:4])
}
```

---

### What's Next on the Path?

From here, the journey expands into:
* **The Relational Model & Volcano Query Execution**
* **ACID Transactions via Write-Ahead Logging (WAL)**
* **Internals of production storage engines**: PostgreSQL, DuckDB, and ClickHouse.

Editing your own database to see what breaks will always be infinitely more educational than just reading about it.
