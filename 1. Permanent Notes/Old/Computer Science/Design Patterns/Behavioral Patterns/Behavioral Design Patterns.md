---
id: 8fe98caf-ec22-4a6e-a906-eb87cb981681
created_date: 2025-04-08T13:30:31
type: note
tags:
  - "#DesignPattern"
  - "#DesignPattern/Behavioral"
---
---

| Prerequisite | - [[Object Oriented Programming]] |
| ------------ | --------------------------------- |

---
> [!INFORMATION] Overview
> Behavioral patterns are concerned with algorithms and the assignment of responsibilities between objects

---
## 📚 Patterns
---

| **Pattern**                 | **Usefulness (1–5)**                         | **Difficulty (1–5)**                     | **Notes**                                                                   |
| --------------------------- | -------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------- |
| **Observer**                | :LiStar::LiStar::LiStar::LiStar::LiStar:     | :LiStar::LiStar:                         | Core for event-driven design, UI systems, and pub-sub mechanisms.           |
| **Strategy**                | :LiStar::LiStar::LiStar::LiStar::LiStarHalf: | :LiStar::LiStar:                         | A go-to for making algorithms interchangeable; very intuitive.              |
| **Command**                 | :LiStar::LiStar::LiStar::LiStar:             | :LiStar::LiStar::LiStar:                 | Powerful for decoupling senders/receivers, task queues, or undo stacks.     |
| **Iterator**                | :LiStar::LiStar::LiStar::LiStar:             | :LiStar::LiStarHalf:                     | Very easy in most languages; great for abstracting collections.             |
| **State**                   | :LiStar::LiStar::LiStar::LiStar:             | :LiStar::LiStar::LiStar:                 | Clean handling of object state transitions; can be overused.                |
| **Chain of Responsibility** | :LiStar::LiStar::LiStar::LiStarHalf:         | :LiStar::LiStar::LiStar:                 | Ideal for flexible request handling pipelines. Slightly abstract.           |
| **Mediator**                | :LiStar::LiStar::LiStar::LiStarHalf:         | :LiStar::LiStar::LiStar::LiStarHalf:     | Reduces coupling between classes, but may grow too central.                 |
| **Template Method**         | :LiStar::LiStar::LiStar:                     | :LiStar::LiStar:                         | Solid for frameworks and base class extension; can feel rigid.              |
| **Visitor**                 | :LiStar::LiStar::LiStar:                     | :LiStar::LiStar::LiStar::LiStar:         | Good for structured object operations (like ASTs); breaks encapsulation.    |
| **Memento**                 | :LiStar::LiStar::LiStarHalf:                 | :LiStar::LiStar::LiStar:                 | Handy for snapshotting internal state (e.g., undo), but not broadly needed. |
| **Null Object**             | :LiStar::LiStar::LiStarHalf:                 | :LiStar:                                 | Lightweight and simple; avoids null checks, rarely critical though.         |
| **Interpreter**             | :LiStar::LiStar:                             | :LiStar::LiStar::LiStar::LiStar::LiStar: | Niche usage (custom DSLs, language parsers); high complexity.               |

---
## 🕳️ Further Reading
---
- [[Structural Design Patterns]]
- [[Creational Design Patterns]]

---
## 🔗 References
---
- Gang of four books on Design Pattern
- Dive Into Design Patterns by Alexander Shvets
- Head First Design Pattern