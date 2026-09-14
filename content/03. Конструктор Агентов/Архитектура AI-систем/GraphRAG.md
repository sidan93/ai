---
tags:
  - architecture
  - retrieval
  - knowledge-graph
aliases:
  - Графовый RAG
created: 2026-04-15
updated: 2026-09-14
status: evergreen
---

# GraphRAG

> [!abstract]
> GraphRAG — семейство retrieval-подходов, использующих граф сущностей и отношений. Конкретный Microsoft GraphRAG строит иерархию сообществ и их summaries для локальных и глобальных вопросов по корпусу.

## Не просто «RAG по Obsidian-ссылкам»

Ссылки между заметками могут быть полезным графом, но Microsoft GraphRAG обычно извлекает из текста сущности, отношения и claims, кластеризует граф и создаёт community reports. Поэтому GraphRAG требует отдельного indexing pipeline и не появляется автоматически из graph view в Obsidian.

## Indexing

```text
documents
   ↓
text units
   ↓
entities + relationships + claims
   ↓
hierarchical communities
   ↓
community summaries + embeddings + source references
```

Indexing использует LLM-вызовы, поэтому может быть дорогим и недетерминированным. После обновления корпуса нужно определить стратегию переиндексации и проверки изменений графа.

## Режимы запроса Microsoft GraphRAG

- **Local Search** — вопрос о конкретной сущности и связанном окружении.
- **Global Search** — общий вопрос по корпусу через community reports и map-reduce.
- **DRIFT Search** — локальное исследование с информацией о сообществах.
- **Basic Search** — baseline vector search, когда граф не даёт преимущества.

## Когда рассматривать

- ответ требует соединить разнесённые по корпусу факты;
- важны отношения между сущностями;
- нужны общие темы и структура большой коллекции;
- baseline RAG систематически проваливает такие вопросы на eval set.

## Когда не нужен

- простой keyword/vector retrieval уже проходит тесты;
- корпус маленький или часто полностью меняется;
- нет бюджета на extraction, indexing и контроль качества графа;
- вопросы в основном локальные и не требуют multi-hop связей.

## Риски и evals

- ошибки extraction становятся рёбрами графа;
- community summary может потерять исключение или источник;
- один entity resolution способен ошибочно объединить разных людей или организации;
- graph traversal создаёт правдоподобную, но ложную цепочку;
- глобальные запросы расходуют больше времени и LLM-ресурсов.

Сравнивай с сильным baseline: hybrid search + metadata filters + reranking. Оценивай retrieval, корректность связей, citations, latency и стоимость indexing/query отдельно.

## Источник

- [Microsoft GraphRAG — official documentation](https://microsoft.github.io/graphrag/)

## Связанные заметки

- [[RAG (Retrieval-Augmented Generation)]]
- [[Long Context Management]]
- [[Embeddings]]
- [[_AI Systems Architecture Index]]
