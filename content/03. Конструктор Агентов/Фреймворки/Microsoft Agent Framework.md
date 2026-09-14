---
tags: [framework, agents, workflows, microsoft, azure]
aliases: [Microsoft Agent Framework, MAF]
created: 2026-09-14
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# Microsoft Agent Framework

> [!abstract] Суть
> Microsoft Agent Framework — текущий SDK и runtime Microsoft для agentic-приложений, объединяющий развитие AutoGen и Semantic Kernel. Он разделяет готового agent loop и явные workflows.

## Основные части

- **Agents** — instructions, models, tools, conversations и middleware.
- **Workflows** — граф выполнения с executors и edges для управляемой оркестрации.
- **State и checkpoints** — сохранение и возобновление долгих процессов.
- **Human-in-the-loop** — запрос ввода или подтверждения в контролируемой точке.
- **Integrations** — model providers, MCP, hosting и observability.
- **Agent harness** — готовая среда выполнения вокруг модели и tools.

Agent выбирает действия динамически; workflow задаёт структуру кодом. В production обычно полезна композиция: детерминированный workflow с узкими агентными узлами.

## Когда выбирать

- основной стек — .NET, Python, Microsoft/Azure или несколько поддерживаемых providers;
- нужна единая модель agents и graph workflows;
- мигрирует существующий AutoGen или Semantic Kernel проект;
- важны middleware, hosting и enterprise-интеграции Microsoft.

Не выбирай только из-за бренда или обещания универсальности. Сравни API, deployment, tracing и lock-in на своём сценарии.

## Миграция с AutoGen

Не делай механическую замену импортов. Сначала сопоставь agents, teams, messages, state, tools и termination conditions с новыми понятиями; затем переноси один workflow за раз и сравнивай traces/evals.

## Официальные источники

- [Microsoft Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/)
- [Agent concepts](https://learn.microsoft.com/en-us/agent-framework/concepts/agents/)
- [Workflow concepts](https://learn.microsoft.com/en-us/agent-framework/concepts/workflows/)
- [Migration guides](https://learn.microsoft.com/en-us/agent-framework/migration-guide/)

## Связанные заметки

- [[AutoGen]]
- [[Workflow-паттерны LLM-систем]]
- [[Multi-Agent Systems]]
- [[_Frameworks Index]]
