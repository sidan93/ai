---
tags: [framework, llamaindex, rag, data, agents, workflows]
aliases: [LlamaIndex]
created: 2026-04-16
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# LlamaIndex

> [!abstract] Суть
> LlamaIndex — data-centric framework для ingestion, индексации, retrieval, query engines, RAG и агентов над частными данными. Это набор заменяемых компонентов, а не «магическая точность поиска».

## Основной конвейер

1. **Load / ingest** — получить документы и метаданные, разбить и преобразовать их.
2. **Index / store** — построить представление и сохранить его в выбранном хранилище.
3. **Retrieve / rerank** — найти и переупорядочить кандидатов.
4. **Synthesize** — сформировать ответ из извлечённого контекста.
5. **Evaluate** — отдельно измерить retrieval и итоговый ответ.

Ключевые абстракции включают documents/nodes, indexes, retrievers, query engines, agents и event-driven Workflows. Коннекторы вынесены в LlamaHub; managed-возможности LlamaCloud следует оценивать отдельно от open-source framework.

## Workflows вместо старого QueryPipeline

Workflows описывают асинхронные шаги, события, ветвления и циклы. Старый `QueryPipeline` feature-frozen и подлежит удалению; для нового кода документация рекомендует Workflows.

## Когда выбирать

- главная сложность проекта находится в ingestion и retrieval;
- источники и индексы нужно часто менять или комбинировать;
- нужен агент, чьи основные tools работают с данными;
- нужны готовые data connectors и RAG-компоненты.

Не выбирай автоматически только потому, что в проекте есть PDF. Для маленькой базы знаний достаточно простого pipeline, если он прозрачен и проходит evals.

## Что измерять

- полноту и точность retrieval на размеченных вопросах;
- качество chunking, metadata filters, reranking и цитат;
- freshness: как обновляются и удаляются документы;
- права доступа до retrieval, а не после генерации;
- latency и стоимость каждого этапа;
- устойчивость к indirect prompt injection в документах.

## Официальные источники

- [LlamaIndex documentation](https://docs.llamaindex.ai/en/stable/)
- [Ingestion pipeline](https://docs.llamaindex.ai/en/stable/module_guides/loading/ingestion_pipeline/)
- [QueryPipeline deprecation and Workflows](https://docs.llamaindex.ai/en/stable/module_guides/querying/pipeline/)
- [MCP support](https://docs.llamaindex.ai/en/stable/module_guides/mcp/)

## Связанные заметки

- [[RAG (Retrieval-Augmented Generation)]]
- [[Indirect Prompt Injection]]
- [[Haystack]]
- [[_Frameworks Index]]
