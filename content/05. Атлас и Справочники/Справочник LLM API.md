---
tags:
  - reference
  - pricing
  - api
  - llm
created: 2026-04-15
updated: 2026-09-14
status: time-sensitive
review_after: 2026-10-14
---

# Справочник LLM API

> [!warning] Изменчивые данные
> Цены, лимиты и названия моделей меняются часто. Страница проверена 14 сентября 2026 года по официальным источникам. Перед запуском платной нагрузки перепроверь тариф провайдера.

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
| OpenAI | GPT-6 Astra; GPT-5.6 Terra / Luna для баланса и большого потока | Сравнивай reasoning effort, tools и цену успешной задачи; фиксируй model ID |
| Anthropic | Claude Opus 5, Fable 5.1, Sonnet 5, Haiku 4.5 | Проверяй доступность, effort и правила fallback для чувствительных доменов |
| Google | Gemini 3.1 Pro, 3.8 Flash, 3.5 Flash-Lite | Режимы обслуживания и preview-модели имеют отдельные цены и жизненный цикл |
| DeepSeek | DeepSeek V4 Flash / Pro | OpenAI- и Anthropic-совместимые форматы API; отдельная цена cache hit/miss |

Полную матрицу цен здесь намеренно не дублируем: она устаревает быстрее заметки. Ниже приведены прямые официальные страницы.

## Как считать стоимость

```text
стоимость = входные токены × тариф входа
            + кэшированные токены × тариф кэша
            + выходные токены × тариф выхода
            + инструменты, поиск и хранение кэша
```

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
- [DeepSeek — models and pricing](https://api-docs.deepseek.com/quick_start/pricing)

## Связанные заметки

- [[Справочник основных LLM]] — продукты и сценарии выбора.
- [[Token]] — что именно тарифицирует API.
- [[Context Window]] — как понимать лимиты контекста.
- [[RAG (Retrieval-Augmented Generation)]] — как не передавать всю базу в каждый запрос.
