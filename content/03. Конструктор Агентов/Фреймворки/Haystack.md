---
tags: [framework, haystack, rag, pipelines, agents]
aliases: [Haystack]
created: 2026-04-16
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# Haystack

> [!abstract] Суть
> Haystack 2 — open-source Python framework для компонентных RAG-, search- и agent-pipelines. Его сильная сторона — явный граф совместимых компонентов, а не скрытая цепочка вызовов.

## Модель

- **Component** — типизированный шаг: converter, embedder, retriever, ranker, generator, router и т. п.
- **Pipeline** — направленный мультиграф; поддерживает ветвления, циклы и сериализацию.
- **AsyncPipeline** — параллельно выполняет независимые компоненты.
- **Document Store** — интерфейс хранения и поиска документов.
- **Tool** — функция, component или pipeline, доступные модели.
- **Agent** — итеративный tool-use component с явными exit conditions.

Проверка совместимости входов и выходов ловит часть ошибок сборки, но не доказывает корректность данных, retrieval или ответа.

## Когда выбирать

- нужны видимые и заменяемые стадии ingestion/query pipeline;
- используются hybrid search, filters, routing и reranking;
- retrieval важнее сложной долгоживущей агентной оркестрации;
- существующий pipeline удобно предоставить агенту как один контролируемый tool.

Для workflow с богатым состоянием, approvals и длительным возобновлением отдельно сравни orchestration runtime. Для простого RAG сравни с небольшим собственным pipeline.

## Production-чек

- evals отдельно для retrieval и generation;
- retries, timeouts и лимиты циклов;
- контроль доступа и фильтры метаданных до выдачи контекста;
- защита от вредоносных инструкций в документах;
- tracing, сериализация и совместимость версий компонентов;
- фактический выигрыш AsyncPipeline по latency.

## Официальные источники

- [Haystack documentation](https://docs.haystack.deepset.ai/docs)
- [Pipelines](https://docs.haystack.deepset.ai/docs/pipelines)
- [Agent component](https://docs.haystack.deepset.ai/docs/agent)
- [Components](https://docs.haystack.deepset.ai/docs/components)

## Связанные заметки

- [[RAG (Retrieval-Augmented Generation)]]
- [[LlamaIndex]]
- [[Indirect Prompt Injection]]
- [[_Frameworks Index]]
