---
tags:
  - MOC
  - architecture
  - ai-engineering
aliases:
  - _Advanced Architectures Index
  - Master Architecture Guide
  - Карта продвинутых архитектур
  - Архитектура AI-систем
created: 2026-04-16
updated: 2026-09-14
status: evergreen
---

# Архитектура AI-систем

> [!abstract]
> Здесь описан системный дизайн вокруг модели: как получать контекст, соединять несколько вызовов, проверять результат и выбирать минимально достаточную сложность.

## Граница с промптингом

[[_Map of Content|Промпт-инжиниринг]] управляет входом отдельного вызова модели. Архитектура определяет связи между вызовами и внешними компонентами.

```text
инструкция → один model call                 = prompting

input → retrieval → model → check → output  = system architecture
```

Промпты присутствуют внутри почти любой AI-системы, но не заменяют state, routing, tools, retries, permissions и evals.

## Маршрут по разделу

### Контекст и знания

- [[Long Context Management]] — отбор, упаковка, сжатие и восстановление контекста.
- [[RAG (Retrieval-Augmented Generation)]] — retrieval перед генерацией и проверка grounding.
- [[GraphRAG]] — графовый индекс и запросы по сущностям, связям и сообществам.

### Поток выполнения

- [[Workflow-паттерны LLM-систем]] — chaining, routing, parallelization, orchestrator–workers и evaluator–optimizer.
- [[Prompt Chaining]] — граница между техникой prompting и программным workflow.
- [[Tool Use Function Calling]] — структурированные действия через агентный контур.
- [[Multi-Agent Systems]] — динамическая координация нескольких агентов.

### Качество

- [[LLM-as-a-Judge]] — масштабируемая субъективная оценка с обязательной калибровкой.
- [[Evals]] — повторяемые проверки системы.
- [[Наблюдаемость и оценка агентов]] — traces, метрики и разбор траекторий.

## Лестница сложности

Используй первый уровень, который проходит evals:

1. Детерминированный код без LLM.
2. Один вызов модели с ясным контрактом.
3. Фиксированный workflow из нескольких шагов.
4. Workflow с retrieval или tools.
5. Один агент с динамическим выбором действий.
6. Несколько агентов только при независимом параллелизме, изоляции контекста или разных полномочиях.

Каждый следующий уровень увеличивает стоимость, задержку, число отказов и требования к наблюдаемости.

## Быстрый выбор

| Задача | Базовый вариант | Добавлять, если не хватает |
| :--- | :--- | :--- |
| Ответ по небольшой подборке | long context | retrieval при росте корпуса |
| Ответ по большой базе | RAG | hybrid search, reranking, query rewriting |
| Вопросы о связях и общих темах корпуса | baseline RAG | GraphRAG после сравнения на eval set |
| Предсказуемое преобразование | один call | prompt chain с проверяемыми границами |
| Разные классы запросов | routing | agent loop при непредсказуемой траектории |
| Независимые направления поиска | parallelization | multi-agent orchestration |
| Субъективное качество текста | rubric + human sample | откалиброванный LLM judge |

## Что сюда не входит

- [[_Map of Content|Промпт Лаборатория]] — инструкции и методики отдельных вызовов.
- [[_Agentic Systems Index|Агентные системы]] — автономный цикл, tools, память и безопасность.
- [[_Training and Alignment Index|Обучение и настройка моделей]] — SFT, RLHF и DPO меняют веса.
- [[_Skills Index|Skills]] — переиспользуемые рабочие процедуры.
- [[_Frameworks Index|Фреймворки]] — конкретные реализации, а не архитектурные решения.

## Источник паттернов

- [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
