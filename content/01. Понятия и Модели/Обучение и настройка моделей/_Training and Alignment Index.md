---
tags:
  - MOC
  - training
  - post-training
  - alignment
aliases:
  - Обучение и настройка моделей
  - Training and Alignment
created: 2026-09-14
updated: 2026-09-14
status: evergreen
---

# Обучение и настройка моделей

> [!abstract]
> Эти методы меняют веса или обучаемые компоненты модели. Они находятся до inference и отличаются от prompting, RAG, tools и agent harness.

## Карта

```text
pretraining
    ↓
continued pretraining / domain adaptation
    ↓
SFT
    ↓
preference optimization: RLHF, DPO и другие методы
    ↓
evals → deployment → monitoring
```

Реальные конвейеры не обязаны следовать одной последовательности. Названия методов не раскрывают весь training recipe конкретной модели.

## Материалы

- [[Fine-tuning]] — общее определение дополнительного обучения.
- [[Reinforcement Learning from Human Feedback (RLHF)]] — preference signal через human feedback и RL.
- [[Direct Preference Optimization (DPO)]] — оптимизация по выбранным и отклонённым ответам без отдельного явного reward model.
- [[Knowledge Distillation]] — перенос поведения teacher к student.

## Не путать

| Подход | Меняет веса | Добавляет знания во время запроса |
| :--- | :---: | :---: |
| Prompting | нет | только переданный context |
| RAG | нет | да, через retrieval |
| Skill | нет | даёт процедуру и ресурсы |
| SFT / RLHF / DPO | да | нет автоматически |

## Практическое правило

Сначала определи измеримый провал. Prompt, retrieval или tool часто дешевле обновлять и проще откатывать. Обучение оправдано, когда нужно устойчиво изменить поведение на большом классе запросов и есть качественные данные, eval set, вычислительный бюджет и план deployment.

## Связи

- [[Weights]]
- [[Inference]]
- [[Evals]]
- [[_AI Systems Architecture Index|Архитектура AI-систем]]
- [[_Map of Content|Промпт-инжиниринг]]
