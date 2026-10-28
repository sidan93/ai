---
tags:
  - reference
  - pricing
  - api
  - llm
created: 2026-04-15
updated: 2026-10-28
status: time-sensitive
review_after: 2026-11-28
---

# Справочник LLM API

> [!warning] Изменчивые данные
> Каталоги моделей обновлены на 28 октября 2026 года. Цены и лимиты зависят от модели, режима и платформы: перед платной нагрузкой проверь действующий официальный прайс. Таблица ниже не является сравнением тарифов.

## Быстрый выбор

| Задача | На что смотреть |
| :--- | :--- |
| Сложная агентная работа | Качество на собственных задачах, надёжность tool use, цена успешного результата |
| Массовая обработка | Цена входа и выхода, batch-тариф, кэширование, rate limits |
| Длинные документы | Реальный effective context, качество поиска по контексту, long-context surcharge |
| Чувствительные данные | Хранение, обучение на данных, регион обработки, ZDR/enterprise-условия |

## Актуальные семейства

| Провайдер | Актуальный ориентир | Что важно |
| :--- | :--- | :--- |
| OpenAI | GPT-6 Astra, GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Luna | IDs: `gpt-6-astra`, `gpt-6.1-sol`, `gpt-6.1-terra`, `gpt-6-luna`; сравнивай effort, tools и цену принятого результата |
| Anthropic | Claude Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5 | IDs: `claude-fable-5-1`, `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`; проверяй платформу и effort |
| Google | Stable: Gemini 4 Argon, 3.8 Flash, 3.5 Flash-Lite; preview: 3.1 Pro | IDs: `gemini-4-argon`, `gemini-3.8-flash`, `gemini-3.5-flash-lite`, `gemini-3.1-pro-preview`; preview имеет отдельный жизненный цикл |
| DeepSeek | `deepseek-flash` → DeepSeek-V4.1-Flash-1017; `deepseek-v4-pro` | Прежние Flash IDs принимаются с перенаправлением на новый backend; перед нагрузкой проверь действующий прайс |

Полную матрицу цен здесь намеренно не дублируем: она устаревает быстрее заметки. Ниже приведены прямые официальные страницы.

## Как считать стоимость

```text
базовая стоимость = uncached_input × тариф обычного входа
                    + cache_read × тариф чтения кэша
                    + output × тариф выхода
```

`uncached_input` и `cache_read` — **непересекающиеся части входа**. Если usage сообщает общий input и cached tokens, сначала вычти cached из общего input. Тариф за миллион токенов требует деления соответствующего числа токенов на 1 000 000.

Отдельно учти cache write/хранение, tools и поиск, если они тарифицируются. Если cache write заменяет обычный input-тариф, не прибавляй оба тарифа к тем же токенам. Batch-скидки, long-context tiers и правила оплаты reasoning проверяй по прайсу конкретной модели и режима.

Низкая цена токена не гарантирует меньшую стоимость задачи: модели по-разному токенизируют текст, используют разное число reasoning-токенов и могут требовать разное число попыток.

## Практические правила

- Не сравнивай подписку на чат с ценой API.
- Считай цену на реальном наборе запросов, а не только по прайс-листу.
- Для повторяющегося длинного префикса используй [[004. 2026-04-16 - Prompt Caching|кэширование промптов]], если оно поддерживается.
- Для несрочной пакетной обработки проверяй Batch API.
- Контекстное окно — верхний технический предел, а не обещание одинакового качества на всей длине.
- Для данных пользователей отдельно проверяй retention, training policy и региональные ограничения.

## Официальные источники

- [OpenAI — model catalog](https://developers.openai.com/api/docs/models)
- [OpenAI — API pricing](https://developers.openai.com/api/docs/pricing)
- [Anthropic — pricing](https://www.anthropic.com/pricing)
- [Anthropic — models overview](https://platform.claude.com/docs/en/models/overview)
- [Google — Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [Google — Gemini API documentation](https://ai.google.dev/gemini-api/docs)
- [DeepSeek — API и текущие model names](https://api-docs.deepseek.com/quick_start/pricing).

## Связанные заметки

- [[Справочник основных LLM]] — продукты и сценарии выбора.
- [[Token]] — что именно тарифицирует API.
- [[Context Window]] — как понимать лимиты контекста.
- [[RAG (Retrieval-Augmented Generation)]] — как не передавать всю базу в каждый запрос.
