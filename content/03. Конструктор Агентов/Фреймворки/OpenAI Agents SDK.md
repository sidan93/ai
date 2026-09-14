---
tags: [framework, sdk, agents, openai, orchestration]
aliases: [OpenAI Agents SDK]
created: 2026-09-14
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# OpenAI Agents SDK

> [!abstract] Суть
> OpenAI Agents SDK — компактный provider-native SDK для agent loop, tools, orchestration, state, guardrails и tracing. Это кодовая библиотека; её не следует смешивать с hosted Agents API или визуальными builders.

## Основные примитивы

- **Agent** — instructions, model, tools, guardrails и выходная схема.
- **Runner** — исполняет agent loop и обрабатывает tool calls.
- **Handoff** — передаёт управление специализированному агенту.
- **Agent as tool** — оставляет управление у центрального оркестратора.
- **Guardrails и approvals** — проверяют ввод/вывод и останавливают рискованные tool calls для ревью.
- **State/results** — переносят контекст и результаты между шагами запуска.
- **Tracing и evals** — делают workflow наблюдаемым и проверяемым.

## Handoff или agent-as-tool

Используй **handoff**, когда специалист должен продолжить разговор и сам выбирать следующие действия. Используй **agent as tool**, когда центральный агент должен получить узкий результат и сохранить контроль над финальным ответом.

## Когда выбирать

- приложение в основном использует OpenAI API;
- нужен лёгкий agent SDK без отдельного универсального orchestration framework;
- нужны встроенные handoffs, approvals, tracing и поддержка нескольких агентов;
- допустим более тесный контракт с возможностями OpenAI.

Собственный цикл остаётся разумнее для короткого workflow. Для сложного долгоживущего графа сравни SDK с отдельным orchestration runtime.

## Важные границы безопасности

- guardrail не заменяет авторизацию внутри tool;
- approval ставится перед фактическим side effect;
- внешние данные считаются недоверенными и не превращаются автоматически в инструкции;
- sensitive inputs и traces требуют отдельной политики хранения;
- multi-agent добавляется только после сравнения с одним агентом.

## Официальные источники

- [Agents SDK overview](https://developers.openai.com/api/docs/guides/agents/sdk)
- [Orchestration and handoffs](https://developers.openai.com/api/docs/guides/agents/orchestration)
- [Guardrails and human review](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals)
- [Results and state](https://developers.openai.com/api/docs/guides/agents/results)

## Связанные заметки

- [[Tool Use Function Calling]]
- [[Multi-Agent Systems]]
- [[Протоколы Автономности]]
- [[Наблюдаемость и оценка агентов]]
- [[_Frameworks Index]]
