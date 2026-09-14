---
tags: [MOC, frameworks, agents]
aliases: [Фреймворки ИИ-агентов]
created: 2026-04-16
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# Фреймворки для AI-приложений

> [!abstract] Главное
> Фреймворк — не архитектура и не гарантия качества. Сначала опиши workflow, состояние, инструменты и критерии успеха; затем выбери минимальный слой, который снимает реальную инженерную проблему.

## Сначала реши, нужен ли фреймворк

Для одного вызова модели, structured output или пары tools обычно достаточно официального SDK провайдера и собственного кода. Фреймворк начинает окупаться, когда нужны циклы, ветвления, долговременное состояние, восстановление после сбоя, human-in-the-loop, несколько агентов или сложный retrieval.

## Карта выбора

| Вариант | Что это | Смотреть, когда… |
| :--- | :--- | :--- |
| Собственный цикл + SDK провайдера | Минимальный baseline | Логика короткая, важны прозрачность и малое число зависимостей |
| [[OpenAI Agents SDK]] | Provider-native SDK агентов | Проект строится вокруг OpenAI и нужны handoffs, guardrails, state и tracing |
| [[Microsoft Agent Framework]] | SDK агентов и workflow runtime | Нужен стек Microsoft/Azure/.NET или миграция с AutoGen/Semantic Kernel |
| [[LangChain]] / LangGraph | Высокоуровневый agent API + графовый runtime | Нужна широкая экосистема или явная stateful-оркестрация |
| [[LlamaIndex]] | Data/RAG framework + Workflows | Главная сложность — ingestion, retrieval и работа с частными данными |
| [[Haystack]] | Компонентные RAG- и search-pipelines | Нужен явный тестируемый граф обработки данных |
| [[CrewAI]] | Opinionated crews + event-driven flows | Ролевая декомпозиция действительно соответствует процессу |
| [[AutoGen]] | Поддерживаемый legacy-фреймворк Microsoft | Уже есть AutoGen-система или изучается прежний event-driven runtime |

Не существует универсального «лучшего» варианта. Например, LangGraph и Haystack оба используют графы, но первый прежде всего оркестрирует состояние и действия, а второй силён в компонентных data/RAG pipelines.

### Кандидаты второго круга

- **Pydantic AI** — typed Python SDK с dependency injection, validated outputs, multi-provider API, graph/durable execution и OpenTelemetry; сильный кандидат для Python-команд, уже использующих Pydantic.
- **Google ADK** — code-first agent framework с сильной связью с экосистемой Google/Gemini, но заявленной model- и deployment-независимостью.
- **Mastra** — TypeScript framework для agents, workflows, RAG, evals и observability; имеет смысл сравнить в TS-native продукте.

Им не выделены отдельные карточки, потому что этот справочник группирует варианты по инженерской роли, а не пытается быть исчерпывающим реестром пакетов.

## Как выбирать без гадания

1. Опиши один реальный сценарий и допустимые ошибки.
2. Собери простейший вариант без фреймворка — это baseline сложности, цены и качества.
3. Сделай одинаковый spike на одном-двух кандидатах.
4. Проверь не happy path, а timeout, повторный запуск, ошибку tool, невалидный output и prompt injection.
5. Зафиксируй решение и план выхода: какие доменные интерфейсы не должны зависеть от фреймворка.

### Матрица проверки

- нужные модели, tools, MCP и structured output;
- явная модель состояния, checkpoints и resumability;
- retries, idempotency, streaming и concurrency;
- approvals и минимальные права инструментов;
- traces, метрики, evals и экспорт телеметрии;
- deployment, лицензия, темп breaking changes и зрелость проекта;
- стоимость, latency и сложность отладки;
- возможность заменить model/provider/framework без переписывания доменной логики.

## Частые ошибки

- начинать с multi-agent, не доказав пользу относительно одного агента;
- принимать визуальный builder или облачную платформу за сам open-source runtime;
- копировать пример старой major-версии;
- прятать бизнес-логику внутри prompt и callbacks фреймворка;
- считать встроенный tracing полноценной оценкой качества;
- доверять инструментам без схем, лимитов, approvals и аудита.

> [!warning] Актуальность
> Статусы и API проверены 2026-09-14. Перед установкой сверяй migration guide, release notes и документацию выбранной версии.

## Официальные источники

- [OpenAI Agents SDK](https://developers.openai.com/api/docs/guides/agents/sdk)
- [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/)
- [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview)
- [LlamaIndex documentation](https://docs.llamaindex.ai/en/stable/)
- [Haystack documentation](https://docs.haystack.deepset.ai/docs)
- [CrewAI documentation](https://docs.crewai.com/)
- [AutoGen repository and status](https://github.com/microsoft/autogen)
- [Pydantic AI documentation](https://pydantic.dev/docs/ai/overview/)
- [Google Agent Development Kit](https://adk.dev/)
- [Mastra documentation](https://mastra.ai/docs)

## Связанные заметки

- [[_Agent Builder Index|Конструктор агентов]]
- [[AI Stack 2026]]
- [[Анатомия Агента]]
- [[Стек агентной системы]]
- [[Workflow-паттерны LLM-систем]]
- [[Наблюдаемость и оценка агентов]]
- [[Чек-лист агентной системы]]
