---
tags: [framework, langchain, langgraph, agents, orchestration]
aliases: [LangChain, LangGraph]
created: 2026-04-16
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# LangChain и LangGraph

> [!abstract] Суть
> LangChain — высокоуровневый framework для агентов и интеграций. LangGraph — отдельный низкоуровневый runtime для долгоживущей stateful-оркестрации; его можно использовать без LangChain.

## Карта экосистемы

| Компонент | Роль |
| :--- | :--- |
| LangChain | Models, tools, middleware, structured output и готовый agent loop |
| LangGraph | State, nodes, edges, persistence, durable execution, streaming и human-in-the-loop |
| Deep Agents | Более готовый agent harness поверх экосистемы |
| LangSmith | Отдельная платформа tracing, evals, testing и deployment |

Это не взаимозаменяемые названия. `create_agent` удобен для типового tool-calling агента; собственный LangGraph нужен, когда порядок, состояние и точки управления являются частью бизнес-логики.

## Когда выбирать

**LangChain**, если нужны готовые интеграции, middleware и быстрый старт с agent loop.

**LangGraph**, если нужны:

- явный граф с ветвлениями и циклами;
- checkpoints, пауза, возобновление и human approval;
- долгие stateful workflows;
- смешение детерминированных шагов и агентных узлов.

**Обойтись SDK провайдера**, если workflow короткий и собственный цикл остаётся понятнее абстракций.

## Риски и границы

- Экосистема меняется быстро: старые материалы про `LLMChain`, `AgentExecutor` и прежние prebuilt API могут быть неактуальны.
- Persistence не делает tools идемпотентными: повтор внешнего действия надо предотвращать отдельно.
- LangSmith — не обязательное условие использования open-source LangChain/LangGraph.
- Широкая интеграция ускоряет прототип, но повышает площадь зависимостей и миграций.

## Практика

Держи доменные tools и схемы данных независимыми от фреймворка. Тестируй node/tool отдельно, а граф — через сценарии с сохранённым состоянием, ошибкой и повторным запуском.

## Официальные источники

- [LangChain overview](https://docs.langchain.com/oss/python/langchain/overview)
- [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api)
- [LangChain v1 migration](https://docs.langchain.com/oss/python/migrate/langchain-v1)

## Связанные заметки

- [[Workflow-паттерны LLM-систем]]
- [[Протоколы Автономности]]
- [[Наблюдаемость и оценка агентов]]
- [[_Frameworks Index]]
