---
tags:
  - glossary
  - architecture
  - knowledge-management
aliases:
  - RAG
  - Retrieval-Augmented Generation
  - Генерация с дополнением из поиска
created: 2026-04-15
---

# RAG (Retrieval-Augmented Generation)

> [!abstract] Определение
> **RAG** — технология, объединяющая поиск информации (Retrieval) и генерацию текста (Generation). Вместо того чтобы опираться только на свои веса, модель сначала ищет релевантные факты во внешнем источнике и использует их как контекст для ответа.

Применительно к базе знаний: плагины **Smart Connections**, **Khoj** и **Copilot** создают векторный индекс файлов и находят нужные фрагменты при каждом запросе — это и есть RAG в действии.

→ Подробный разбор с 10 методиками, таблицей RAG vs Long Context и практическими паттернами: **[[RAG (Retrieval-Augmented Generation)|Полный гайд по RAG]]**

---

## Связанные концепции
- [[Hallucination]] — то, с чем RAG борется эффективнее всего.
- [[Context Window]] — физическое ограничение, которое RAG помогает обойти.
- [[Embeddings]] — математическая основа RAG-поиска.
