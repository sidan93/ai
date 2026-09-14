---
tags:
  - architecture
  - workflows
  - orchestration
aliases:
  - LLM Workflow Patterns
  - Паттерны LLM-workflow
created: 2026-09-14
updated: 2026-09-14
status: evergreen
---

# Workflow-паттерны LLM-систем

> [!abstract]
> Workflow задаёт поток выполнения программно. В отличие от агента, его основные переходы известны заранее; модель решает локальные задачи внутри узлов.

## Chaining

```text
extract → validate → transform → validate → publish
```

Используй, когда задачу можно разложить на фиксированные зависимые шаги. Контракт между узлами лучше задавать схемой, а не свободным текстом. Подробнее: [[Prompt Chaining]].

## Routing

```text
input → classifier/router ─┬→ support workflow
                           ├→ billing workflow
                           └→ fallback
```

Подходит для различимых классов запросов. Router может быть правилом, небольшой моделью или основной LLM. Измеряй ошибки маршрутизации отдельно от качества downstream-веток.

## Parallelization

Независимые ветки выполняются одновременно, затем результаты агрегируются:

- **sectioning:** разные подзадачи или источники;
- **voting:** несколько независимых оценок одного объекта.

Параллельность сокращает wall-clock time, но увеличивает расход и требует правил дедупликации, конфликтов и частичных отказов.

## Orchestrator–workers

Оркестратор динамически формирует подзадачи, запускает workers и собирает результат. Это полезно, когда число и тип подзадач заранее неизвестны. Если decomposition фиксирована, обычный workflow проще.

## Evaluator–optimizer

```text
generator → evaluator → accept
                │
                └→ feedback → generator
```

Используй, когда критерии можно выразить рубрикой и итерация действительно повышает качество. Ограничивай число циклов и сохраняй лучший результат: evaluator тоже ошибается.

## Общие компоненты

- типизированные входы и выходы узлов;
- timeouts, retries и idempotency;
- бюджет calls, tokens, времени и денег;
- state вне истории сообщений;
- trace с версиями prompts, моделей и tools;
- fallback для каждого внешнего компонента;
- end-to-end evals, а не только тесты отдельных prompts.

## Workflow или agent

| Признак | Workflow | Agent |
| :--- | :--- | :--- |
| Переходы | заданы кодом | выбираются моделью |
| Предсказуемость | выше | ниже |
| Отладка | проще | требует trajectory traces |
| Лучший сценарий | стабильный процесс | непредсказуемая задача с обратной связью |

Начинай с workflow. Agent loop добавляй, когда невозможно заранее описать полезную траекторию без взрыва правил.

## Источник

- [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

## Связанные заметки

- [[_AI Systems Architecture Index]]
- [[Паттерны Агентного Дизайна]]
- [[LLM-as-a-Judge]]
- [[Multi-Agent Systems]]
