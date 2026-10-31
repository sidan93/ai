---
title: Model Selection — October 2026
tags: [models, selection, local_ai, cloud_ai]
aliases: [Актуальный выбор моделей, Model Selection October 2026, model-selection-2026-10, 05.-атлас-и-справочники/выбор-моделей/model-selection-2026-10]
created: 2026-10-28
updated: 2026-10-31
status: time-sensitive
review_after: 2026-11-28
source_url: https://developers.openai.com/api/docs/models
---

# Model Selection — October 2026

> [!abstract] Как выбирать
> Срез на **28 октября 2026 года**: кандидаты для собственного eval, а не общий рейтинг. Сначала проверь доступность, данные и инструменты, затем сравни качество, задержку и стоимость принятого результата на одинаковых задачах.

Этот срез хранит конкретные API IDs и локальные теги для сравнения. Выбор рабочего сервиса описан в [[Справочник основных LLM|справочнике сервисов]], а расчёт стоимости и проверка лимитов — в [[Справочник LLM API]].

## Облачный shortlist

| Кандидат | Когда включить в тест | Точный API ID и оговорка |
| :--- | :--- | :--- |
| GPT-6 Astra | Сложный reasoning, код и агентные задачи | `gpt-6-astra`; флагман по позиционированию OpenAI |
| GPT-6.1 Sol | Баланс возможностей и стоимости | `gpt-6.1-sol`; сравни с Astra на своих задачах |
| GPT-6.1 Terra | Visual reasoning, computer use и повседневная работа | `gpt-6.1-terra`; проверь нужные инструменты и effort |
| GPT-6 Luna | Узкие массовые задачи | `gpt-6-luna`; учитывай повторные попытки и исправления |
| Claude Fable 5.1 / Opus 5.5 | Сложная и длительная работа | `claude-fable-5-1`, `claude-opus-5-5`; доступность зависит от платформы |
| Claude Sonnet 5.5 / Haiku 5.5 | Баланс / короткие массовые запросы | `claude-sonnet-5-5`, `claude-haiku-5-5`; сопоставь качество, effort и итоговую цену |
| Gemini 4 Argon | Reasoning и мультимодальные сценарии | `gemini-4-argon`; **stable** |
| Gemini 3.8 Flash / 3.5 Flash-Lite | Быстрые агентные задачи / большой поток | `gemini-3.8-flash`, `gemini-3.5-flash-lite`; **stable** |
| Gemini 3.1 Pro | Проверка существующей интеграции или отдельный эксперимент | `gemini-3.1-pro-preview`; **preview**, проверяй жизненный цикл |
| DeepSeek Flash / V4 Pro | Альтернативный API-кандидат | `deepseek-flash`, `deepseek-v4-pro`; первый обслуживается DeepSeek-V4.1-Flash-1017 |

Это не исчерпывающий каталог. Старые DeepSeek Flash IDs ещё принимаются, но обращаются к новому backend: принятие имени не гарантирует прежнюю модель. Перед нагрузкой проверь действующий прайс.

## Локальный shortlist

| Кандидат | Разумный сценарий первого теста | Что проверить до загрузки |
| :--- | :--- | :--- |
| Qwen 3.8: `qwen3.8:27b` | Текст, изображения и tools в поддерживающем runtime | В Ollama указан файл **18 GB**; для запуска требуется дополнительная память |
| Gemma 4: `e2b`, `e4b`, `12b`, `26b`, `31b` | Выбрать размер под доступное железо и нужные модальности | Точный тег, квант, доступность tools/vision и условия лицензии |
| gpt-oss: `20b` / `120b` | Reasoning и агентные эксперименты на подходящем железе | Все веса, квант и скорость; 120B требует соответствующих ресурсов |
| LFM3-1.7B | Компактные local agents, tool calling и structured output | **LFM Open License v1.0**; авторы не рекомендуют agentic coding и сложный многошаговый reasoning |

Каталог runtime показывает доступные сборки, но не доказывает качество на твоём языке и задаче. У одного семейства могут быть local и cloud tags; режим исполнения проверяй отдельно. Для LFM3 выбирай checkpoint и движок по официальной model card, не предполагая поддержку любым runtime.

## Память: файл весов — только начало

Не приравнивай размер скачивания к требованию RAM/VRAM. Нужен запас под KV-cache, runtime, контекст и систему. Для MoE учитывай **все веса**, а не только активные параметры. Поэтому файл Qwen размером 18 GB не означает, что модель удобно запустится на машине с 18 GB памяти.

Квантование, CPU offload и unified memory меняют компромисс между памятью и скоростью. Перед покупкой железа проверь конкретную сборку с нужной длиной контекста: [[Железо для локальных моделей]] и [[Форматы и квантование]].

## Мини-eval вместо выбора по одному числу

1. Собери 10–30 своих задач и критерии приёмки; не включай чувствительные данные без разрешения.
2. Зафиксируй API ID или точный локальный тег, prompt, effort, tools и контекст.
3. Прогони одинаковые входы; по возможности оцени ответы вслепую.
4. Считай время и стоимость **принятого результата** с retries и ручными исправлениями.
5. Для local запиши runtime, квант, железо, потребление памяти и tokens/s.
6. Повтори проверку после смены backend, цен или рабочего процесса.

Цены и cache/batch-условия — в [[Справочник LLM API]]. Этот срез опирается на каталоги и model cards; сравнительный эксперимент на всех кандидатах здесь не проводился.

## Официальные источники

- [OpenAI — model catalog](https://developers.openai.com/api/docs/models) и [latest model guide](https://developers.openai.com/api/docs/guides/latest-model).
- [Anthropic — models overview](https://platform.claude.com/docs/en/models/overview).
- [Google — Gemini model catalog](https://ai.google.dev/gemini-api/docs/models).
- [DeepSeek — текущие API model names](https://api-docs.deepseek.com/quick_start/pricing).
- Ollama: [Qwen 3.8](https://ollama.com/library/qwen3.8), [Gemma 4](https://ollama.com/library/gemma4), [gpt-oss](https://ollama.com/library/gpt-oss).
- [Liquid AI — LFM3-1.7B model card](https://huggingface.co/LiquidAI/LFM3-1.7B).

## Связанные материалы

- [[Справочник основных LLM]] — сервисы и рабочие сценарии.
- [[_Local AI Index]] — выбор runtime и локальный запуск.
- [[Top_LLM_Index_2026-09|Предыдущий срез: сентябрь 2026]] — исторический контекст, не текущая рекомендация.
