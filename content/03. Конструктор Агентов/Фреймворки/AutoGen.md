---
tags: [framework, agents, multi_agent, microsoft, legacy]
aliases: [AutoGen]
created: 2026-04-16
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# AutoGen

> [!warning] Статус на 2026-09-14
> AutoGen находится в maintenance mode и поддерживается сообществом: ожидаются исправления критических ошибок и уязвимостей, но не новые крупные функции. Для новых проектов Microsoft рекомендует [[Microsoft Agent Framework]].

## Что это было

AutoGen — open-source фреймворк для одиночных и multi-agent приложений. Его современная, но теперь legacy-архитектура отличается от старой ветки 0.2.

| Слой | Назначение |
| :--- | :--- |
| AgentChat | Высокоуровневые агенты, команды и шаблоны взаимодействия |
| Core | Event-driven runtime и маршрутизация сообщений |
| Extensions | Model clients, executors и другие интеграции |
| Studio / Bench | Прототипирование и измерение сценариев |

Старые статьи с `ConversableAgent` часто относятся к AutoGen 0.2. Даже при сопровождении существующего проекта сначала определи поколение API.

## Практическое решение

**Оставаться на AutoGen разумно**, если система уже работает, миграция пока дороже поддержки, а security fixes и зависимости отслеживаются.

**Не начинать новый проект**, если нет конкретной причины зависеть от AutoGen Core или его исследовательских примеров. Сначала оцени Microsoft Agent Framework либо более узкий SDK/runtime.

## План сопровождения и миграции

1. Зафиксировать версии `autogen-agentchat`, `autogen-core` и extensions.
2. Инвентаризировать agents, teams, termination conditions, model clients и executors.
3. Закрыть generated code в sandbox и ограничить полномочия tools.
4. Перенести evals на независимый от фреймворка уровень.
5. Сопоставить компоненты с официальным migration guide Microsoft Agent Framework.
6. Мигрировать по одному workflow, сохраняя контрольные traces и результаты.

## Официальные источники

- [AutoGen repository: project status](https://github.com/microsoft/autogen)
- [AutoGen documentation](https://microsoft.github.io/autogen/stable/)
- [Migration from AutoGen to Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/migration-guide/)

## Связанные заметки

- [[Microsoft Agent Framework]]
- [[Multi-Agent Systems]]
- [[Tool Use Function Calling]]
- [[_Frameworks Index]]
