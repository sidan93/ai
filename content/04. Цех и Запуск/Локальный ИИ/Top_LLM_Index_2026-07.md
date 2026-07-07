---
tags:
  - ranking
  - models
  - benchmark
  - local_ai
aliases:
  - Рейтинг нейросетей 2026-07
  - Состояние рынка ИИ
created: 2026-07-07
updated: 2026-07-07
---

# 🏁 Рейтинг LLM: Состояние на Июль 2026

> [!quote] Главный инсайт июля
> Рынок разделился на три яруса: (1) сверхдорогие флагманы с агентным reasoning (Fable 5, Opus 4.8, GPT-5.5), (2) open-weight модели, догнавшие облачных середняков, и (3) ультра-компактные MoE/1-bit модели для edge. Главный технологический прорыв квартала — MTP (Multi-Token Prediction), ускоряющий локальный инференс в 2–3 раза.

---

## 🥇 Титаны (Проприетарные / Облачные)

*Верхушка айсберга. Цены — подписка $20/мес, если не указано иное.*

| Место | Модель | Индекс (AA) | Ключевое преимущество | Нюанс |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Claude Fable 5** (Anthropic) | 60 | Абсолютный лидер по интеллекту. Агентные задачи, сложный код, multi-step reasoning. | Отозван 12 июня по экспортному контролю США. Работает только через fallback. |
| **2** | **Claude Opus 4.8** (Anthropic) | 56 | Лучший публично доступный: кодинг, творческое письмо, «человечность». Thinking-режим — #2 в Agent Arena. | $20/мес (Pro). Thinking даёт +5 п.п. к качеству на сложных задачах. |
| **3** | **GPT-5.5** (OpenAI) | 55 | xHigh-режим: рекордсмен по следованию инструкциям. Ultra mode с sub-agents. | GPT-5.6 (Sol) анонсирован 26 июня, но только для ~20 government-approved партнёров. |
| **4** | **Claude Sonnet 5** (Anthropic) | 53 | Идеальный баланс скорость/качество. Thinking — #6 в Agent Arena. | Основная рабочая лошадка для продакшена. |
| **5** | **GLM-5.2** (Z.ai) | 51 | Китайский флагман. #9 в Agent Arena. Силён в reasoning и математике. | Max-режим конкурирует с GPT-5.5 high. |
| **6** | **Gemini 3.5 Flash** (Google) | 50 | Контекст 1M+ токенов. Лучшее соотношение цена/качество среди проприетарных. | Бесплатный tier через AI Studio. |
| **7** | **Gemini 3.1 Pro Preview** (Google) | 46 | Мультимодальность (видео, аудио, изображения). Контекст 2M. | Промпт >200K — двойной тариф. |
| **8** | **Qwen3.7 Max** (Alibaba) | 46 | Сильнейшая не-американская облачная модель. | Закрытая, через API Alibaba Cloud. |
| **9** | **DeepSeek V4 Pro** (DeepSeek) | 44 | Почти уровень GPT-5.5, но в 10 раз дешевле. MoE: 37B активных из 671B. | Лучший API для бюджета. |
| **10** | **Kimi K2.6 / K2.7 Code** (Moonshot) | 44 / 42 | Специалист по коду и reasoning. K2.7 — улучшенная код-версия. | Бесплатный доступ через kimi.moonshot.cn. |

---

## 🥈 Атланты (Открытые / Локальные)

*Модели с открытыми весами. Можно запустить на своём железе. Главный тренд: MoE-архитектуры с малым числом активных параметров.*

### Топ-уровень (24 GB VRAM: RTX 3090/4090/5090)

| Модель | Параметры | Квант | VRAM | Tok/s | Специализация |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Qwen 3.6 27B** | 27B dense | Q5_K_M | ~18 GB | ~27 | **Лучший универсал.** Код, reasoning, 119 языков. MTP даёт до 40 tok/s. |
| **Gemma 4 31B** | 31B dense | QAT q4_0 | ~18 GB | ~25 | Мультимодальность (vision+text), сильный код, Google-экосистема. |
| **DeepSeek V4 Flash** | 284B (13B act. MoE) | Q4 | ~20 GB | ~28 | Near-frontier reasoning по цене домашнего ПК. |
| **Gemma 4 26B-A4B** | 26B (4B act. MoE) | Q4_K_M | ~17 GB | ~46 | Рекордная эффективность: качество 26B при скорости 4B. |
| **Llama 4 Maverick** | 400B (17B act. MoE) | Q4 | ~22 GB | ~20 | Самая широкая экосистема. Если плагин работает с локальным ИИ — он работает с Llama. |

### Средний уровень (12–16 GB VRAM: RTX 4070/5070, 4060 Ti 16GB)

| Модель | Параметры | Квант | VRAM | Специализация |
| :--- | :--- | :--- | :--- | :--- |
| **Qwen 3.5 14B** | 14B dense | Q4_K_M | ~9 GB | Сильный reasoning, tool calling. |
| **Gemma 4 12B** | 12B dense | QAT 4-bit | ~6.5 GB | Сбалансированное качество и скорость. |
| **Ministral 3 14B** | 14B dense | Q4_K_M | ~8 GB | Mistral-качество, Apache 2.0. |
| **Mellum2-12B-A2.5B** | 12B (2.5B act. MoE) | Q4_K_M | ~8 GB | Специалист по коду от JetBrains. |

### Лёгкий уровень (8 GB VRAM и меньше)

| Модель | Параметры | Квант | VRAM | Специализация |
| :--- | :--- | :--- | :--- | :--- |
| **Qwen 3.5 9B** | 9B dense | Q4_K_M | ~6 GB | Компактный универсал. |
| **Llama 3.1 8B** | 8B dense | Q4_K_M | ~5 GB | Широкая совместимость, стабильный. |
| **Gemma 4 E2B** | ~5B (2B act. MoE) | Q4 | ~3 GB | Мультимодальность на edge. |
| **Phi-4 Mini** | 3.8B dense | Q4 | ~2.5 GB | Математика, reasoning в минимальном размере. |

### Apple Silicon (Mac)

| Модель | VRAM | Бэкенд | Tok/s | Особенность |
| :--- | :--- | :--- | :--- | :--- |
| **Gemma 4 E4B** | 16GB+ | GGUF Q5_K_P | 24.5 | Лучший агент на Mac. |
| **Qwen 3.5 9B** | 16GB+ | GGUF Q6_K | 13.5 | Dense reasoning. |
| **Gemma 4 26B-A4B** | 32GB+ | GGUF Q4_K_M | 46 | MoE-зверь, 4B активных. |
| **Qwen 3.6 27B MTP** | 32GB+ | AX Engine 6-bit | **40** | MTP даёт 2.2× ускорение. |
| **Bonsai-4B** | 8GB+ | MLX 1-bit | 60–136 | 0.6 GB, работает на iPhone. |

---

## 🛠 Специализированный софт (Must-have, июль 2026)

- **Для кода:** *Claude Opus 4.8* (сложный), *Claude Sonnet 5* (повседневный), *Qwen 3.6 27B* (локально).
- **Для текстов и писем:** *Claude Opus 4.8* — недосягаем по «литературности» и стилю.
- **Для поиска и фактчекинга:** *Perplexity* + *Gemini 3.1 Pro* (контекст 2M).
- **Для базы знаний:** *Ollama* + *Qwen 3.6 27B* или *Gemma 4 26B* + плагин Smart Connections.
- **Для Apple Silicon:** AX Engine с MTP-пакетами (Gemma 4, Qwen 3.6) — прирост скорости 2–3×.
- **Для iPhone / Edge:** *Bonsai-4B* (1-bit, 0.6 GB) — 60 tok/s на iPhone 17 Pro Max.

---

## 📉 Тренды квартала (Апрель → Июль 2026)

1. **MoE везде:** Mixture of Experts стала стандартом для открытых моделей. DeepSeek V4 (13B/284B), Gemma 4 (4B/26B), Llama 4 (17B/400B) — все используют MoE. Активные параметры важнее тотальных.

2. **MTP-революция:** Multi-Token Prediction даёт 2–3× ускорение декодинга на Apple Silicon (AX Engine, MTPLX). Qwen 3.6 27B с MTP обходит «голый» Llama 4 Maverick по скорости.

3. **Регуляция frontier-моделей:** GPT-5.6 ограничен government-approved партнёрами. Claude Fable 5 отозван по экспортному контролю. Правительства стали главным гейткипером SOTA.

4. **1-bit модели:** Bonsai-4B (0.6 GB) доказывает: квантование может быть экстремальным. Качество падает, но для простых задач — приемлемо.

5. **Thinking-режимы как стандарт:** Opus 4.8 Thinking, Sonnet 5 Thinking, GPT-5.5 xHigh — все флагманы ожидают, что ты включишь «думание». Разрыв reasoning/non-reasoning достиг 5–15 п.п.

6. **J-space (Anthropic, июль 2026):** Обнаружено скрытое «пространство мышления» в нейросетях Claude — модель думает о концепциях, не записывая их в chain-of-thought.

---

## 🔗 Связанные концепции

- [[_Advanced Architectures Index|Мультиагентные системы]] — как запрячь эти модели в одну упряжку.
- [[Справочник LLM API|API Price List]] — актуальные цены на токены (июль 2026).
- [[Справочник основных LLM|Model Library]] — подробные карточки на каждую модель.
- [[Hardware|Локальное железо для AI]] — что купить для домашнего дата-центра.
- [[Formats|Форматы и Квантование]] — Q4_K_M, QAT, NVFP4, 1-bit: что выбрать.
- [[Top_LLM_Index_2026-04|Рейтинг LLM (апрель 2026)]] — предыдущий срез для сравнения.

---

## 📊 Источники

- [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models) (данные на 07.07.2026)
- [Agent Arena — Agentic Leaderboard](https://arena.ai/leaderboard/agent) (данные на 07.07.2026)
- [Best Local AI Models for Each VRAM Tier (4 GB to 80 GB) in 2026](https://dev.to/jovan_chan_9500711396d4e6/best-local-ai-models-for-each-vram-tier-4-gb-to-80-gb-in-2026-6kj)
- [OpenAI — Previewing GPT-5.6 Sol](https://openai.com/index/previewing-gpt-5-6-sol/)
- [Anthropic discovers Claude's hidden 'thinking' workspace](https://indianexpress.com/article/technology/artificial-intelligence/anthropic-claude-hidden-workspace-what-it-means-10775230/)
- [Best Local LLMs of 2026](https://apidog.com/blog/best-local-llms-2026/)
- [wiltodelta/small-llm-testing — Apple Silicon benchmarks](https://github.com/wiltodelta/small-llm-testing)
