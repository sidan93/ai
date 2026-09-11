---
tags: [framework, agents, multi_agent, microsoft]
aliases: [AutoGen]
created: 2026-04-16
updated: 2026-09-10
status: time-sensitive
review_after: 2026-12-10
---

# AutoGen

> [!abstract] Суть
> AutoGen — фреймворк Microsoft для агентных приложений. Современная архитектура отличается от старой ветки 0.2 и разделена на AgentChat, Core и Extensions.

## Слои

| Слой | Для чего |
| :--- | :--- |
| AgentChat | Высокоуровневые одиночные агенты и команды |
| Core | Event-driven runtime и низкоуровневая маршрутизация сообщений |
| Extensions | Интеграции с моделями, code executors и MCP |
| Studio | Визуальное прототипирование |

Новому проекту не стоит начинать со старых примеров ConversableAgent из AutoGen 0.2. Используй актуальные пакеты и migration guide.

## Минимальная установка

```bash
pip install -U "autogen-agentchat" "autogen-ext[openai]"
```

Пример ниже показывает форму API; model ID и учётные данные выбираются отдельно.

```python
import asyncio

from autogen_agentchat.agents import AssistantAgent
from autogen_ext.models.openai import OpenAIChatCompletionClient

async def main():
    client = OpenAIChatCompletionClient(model="MODEL_ID")
    agent = AssistantAgent("assistant", model_client=client)
    result = await agent.run(task="Кратко объясни назначение AutoGen.")
    print(result)
    await client.close()

asyncio.run(main())
```

## Когда выбирать

- исследуется взаимодействие нескольких агентов;
- нужна явная маршрутизация сообщений;
- важен event-driven runtime;
- требуются сменные executors и model clients.

Для обычного tool-calling агента один агент с хорошо определёнными tools часто проще и надёжнее команды ролей.

## Безопасность

- запускай сгенерированный код в изолированном executor;
- задавай termination conditions и лимиты;
- не передавай секреты в историю сообщений;
- отделяй пользовательское подтверждение от обычного сообщения агента;
- логируй tool calls и проверяй конечный результат.

## Официальные источники

- [AutoGen documentation](https://microsoft.github.io/autogen/stable/)
- [AgentChat tutorial](https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/tutorial/index.html)
- [Migration from 0.2](https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/migration-guide.html)

## Связанные заметки

- [[Multi-Agent Systems]]
- [[Tool Use Function Calling]]
- [[MCP (Model Context Protocol)]]
- [[_Frameworks Index]]
