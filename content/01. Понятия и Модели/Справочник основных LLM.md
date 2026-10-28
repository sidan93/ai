---
tags:
  - reference
  - models
  - llm
  - vendors
created: 2026-04-15
updated: 2026-10-28
status: time-sensitive
review_after: 2026-11-28
---

# Основные ИИ-сервисы и модели

> [!abstract] Как пользоваться справочником
> Выбирай не «самую умную модель вообще», а подходящий продукт под задачу. Интерфейс, инструменты, политика данных и цена часто важнее небольшой разницы в бенчмарках.

## Сервисы для обычной работы

| Продукт | Сильная сторона | Когда выбирать |
| :--- | :--- | :--- |
| [ChatGPT](https://chatgpt.com) | Универсальный рабочий интерфейс, инструменты, анализ файлов, экосистема OpenAI | Нужен один сервис для разных типов задач |
| [Claude](https://claude.ai) | Работа с текстом, кодом, документами и длительными агентными задачами | Важны аккуратное редактирование и работа с проектами |
| [Gemini](https://gemini.google.com) | Мультимодальность и интеграция с сервисами Google | Работа уже живёт в экосистеме Google |
| [Perplexity](https://perplexity.ai) | Поиск с явными ссылками на веб-источники | Нужен быстрый обзор темы, который потом можно проверить |
| [DeepSeek](https://chat.deepseek.com) | Чат и API моделей DeepSeek | Нужна альтернативная линейка; подходят условия доступа и обработки данных |
| [Le Chat](https://chat.mistral.ai) | Европейский провайдер и модели Mistral | Нужна альтернатива крупным американским платформам |

## Семейства моделей на 28 октября 2026

- **OpenAI API:** GPT-6 Astra (`gpt-6-astra`) — флагман для сложного reasoning и кода; GPT-6.1 Sol (`gpt-6.1-sol`) — баланс возможностей и стоимости; GPT-6.1 Terra (`gpt-6.1-terra`) — visual reasoning, computer use и повседневная работа; GPT-6 Luna (`gpt-6-luna`) — узкие массовые задачи. Это позиционирование провайдера; итоговый выбор требует собственного eval. Модель в ChatGPT и API model ID — не одно и то же.
- **Anthropic:** Claude Fable 5.1, Opus 5.5, Sonnet 5.5 и Haiku 5.5. API IDs: `claude-fable-5-1`, `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`. Для сложных задач сравни Fable/Opus, для баланса и массовой обработки — Sonnet/Haiku; проверяй effort и доступность в нужной платформе.
- **Google:** Gemini 4 Argon (`gemini-4-argon`), Gemini 3.8 Flash (`gemini-3.8-flash`) и Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`) обозначены в каталоге как **stable**. Gemini 3.1 Pro доступен как **preview** (`gemini-3.1-pro-preview`); учитывай отдельный жизненный цикл.
- **DeepSeek:** `deepseek-flash` обслуживается моделью **DeepSeek-V4.1-Flash-1017**; второй текущий API ID — `deepseek-v4-pro`. Старые Flash IDs ещё принимаются, но перенаправляются на новый backend: это не способ закрепить прежнюю модель.
- **Локальные модели:** Qwen 3.8, Gemma 4, gpt-oss и компактный LFM3-1.7B — кандидаты под разные задачи, ресурсы и лицензии; см. [[Top_LLM_Index_2026-10|октябрьский выбор моделей]]. Открытые веса не означают одинаковые права использования.

## Критерии выбора

1. Проверь качество на 10–30 своих задачах.
2. Проверь работу с нужными инструментами: веб, файлы, код, изображения, MCP.
3. Сравни полный расход на задачу, а не рекламную цену токена.
4. Уточни, где хранятся данные и используются ли они для обучения.
5. Для API закрепляй конкретный model ID и следи за deprecation.

> [!note] Подписки и доступность
> Стоимость и доступность зависят от страны, платформы, налогов и типа аккаунта. Не используй эту страницу как платёжную инструкцию — переходи на официальный прайс перед покупкой.

## Официальные источники

- [OpenAI — model catalog](https://developers.openai.com/api/docs/models)
- [OpenAI — latest model guidance](https://developers.openai.com/api/docs/guides/latest-model)
- [Anthropic — models overview](https://platform.claude.com/docs/en/models/overview)
- [Google — Gemini API documentation](https://ai.google.dev/gemini-api/docs)
- [Google — model catalog](https://ai.google.dev/gemini-api/docs/models)
- [DeepSeek — API models](https://api-docs.deepseek.com/quick_start/pricing)

## Связанные заметки

- [[Справочник LLM API]] — API, цены и правила расчёта.
- [[Top_LLM_Index_2026-10|Выбор моделей: октябрь 2026]] — текущий shortlist и методика сравнения.
- [[_Local AI Index]] — локальный запуск.
