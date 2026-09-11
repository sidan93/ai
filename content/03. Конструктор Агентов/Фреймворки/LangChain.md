---
tags:
  - framework
  - langchain
  - agents
  - python
aliases:
  - LangChain
created: 2026-04-16
updated: 2026-09-10
status: time-sensitive
---

# LangChain

> [!abstract]
> LangChain v1 — высокоуровневый Python-фреймворк для model/tool integration и агентов. Основной конструктор агента — `create_agent`; его цикл выполняется поверх runtime LangGraph.

## Текущая карта экосистемы

- **LangChain** — готовые абстракции моделей, инструментов, middleware, structured output и `create_agent`.
- **LangGraph** — низкоуровневые графы выполнения, состояние, persistence, streaming и human-in-the-loop.
- **LangSmith** — отдельный сервис для трассировки, evals и наблюдаемости.
- **Provider packages** — интеграции с конкретными поставщиками моделей устанавливаются отдельно.

Старые руководства по `LLMChain`, `AgentExecutor` и `langgraph.prebuilt.create_react_agent` могут относиться к прежним API. Для нового проекта начинай с документации v1 и migration guide.

## Когда использовать

- Нужно быстро собрать инструментального агента из поддерживаемых интеграций.
- Нужны middleware, structured output и единый интерфейс моделей.
- Хочется начать с `create_agent`, сохранив возможность перейти к собственному графу LangGraph.

## Когда можно обойтись без него

- Один-два вызова модели без состояния и ветвлений.
- Критичен минимальный набор зависимостей.
- API провайдера уже покрывает весь необходимый workflow.

## Минимальный пример

```python
from langchain.agents import create_agent


def get_weather(city: str) -> str:
    """Return weather from a trusted backend."""
    return f"No backend configured for {city}"


agent = create_agent(
    model="provider:model-name",
    tools=[get_weather],
    system_prompt="Use tools when needed and report their limitations.",
)
```

Идентификатор модели, пакет провайдера и способ передачи ключа сверяй с текущей документацией. Функция в примере — заглушка, а не источник погоды.

## Официальные источники

- [LangChain overview](https://docs.langchain.com/oss/python/langchain/overview)
- [Agents](https://docs.langchain.com/oss/python/langchain/agents)
- [LangChain v1 migration](https://docs.langchain.com/oss/python/migrate/langchain-v1)
- [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview)

## Связи

- [[_Frameworks Index]]
- [[Tool Use Function Calling]]
- [[Протоколы Автономности]]
