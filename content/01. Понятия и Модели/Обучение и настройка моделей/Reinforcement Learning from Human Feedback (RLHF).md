---
tags:
  - rlhf
  - alignment
  - post-training
  - machine-learning
aliases:
  - RLHF
created: 2026-04-16
updated: 2026-09-14
status: evergreen
---

# RLHF

> [!abstract]
> Reinforcement Learning from Human Feedback — семейство post-training методов, где человеческая обратная связь формирует reward signal, а политика модели оптимизируется с помощью reinforcement learning.

## Классический конвейер

1. **SFT:** модель обучается на примерах желаемого поведения.
2. **Preference data:** люди сравнивают ответы или оценивают результаты.
3. **Reward model:** модель учится предсказывать эти предпочтения.
4. **RL optimization:** политика оптимизируется по reward с ограничением отклонения от reference model, например через PPO.
5. **Evals:** измеряются полезность, безопасность и регрессии способностей.

SFT подготавливает instruct-модель, но не является RLHF сам по себе. Не вся современная preference optimization использует отдельный reward model или PPO.

## Что может улучшать

- следование инструкциям;
- стиль и предпочтительный формат;
- выбор между несколькими допустимыми стратегиями ответа;
- часть safety-поведения;
- использование tools или рассуждений, если это отражено в feedback и training setup.

## Ограничения

- предпочтение оценщика не равно объективной истине;
- reward model наследует ошибки и состав данных;
- оптимизация может эксплуатировать несовершенный reward;
- возможны sycophancy, многословие и потеря разнообразия;
- улучшение одной метрики может ухудшить другие способности;
- само название RLHF ничего не гарантирует о качестве конкретной модели.

## RLHF, RLAIF и DPO

- **RLHF:** feedback исходит от людей и используется в RL-контуре.
- **RLAIF:** часть feedback генерируется AI по заданным принципам или rubric.
- **DPO:** напрямую оптимизирует предпочтение chosen ответа rejected ответу относительно reference policy.

Это связанные семейства post-training, но не синонимы.

## Источник

- [Ouyang et al. — Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)

## Связанные заметки

- [[Direct Preference Optimization (DPO)]]
- [[Fine-tuning]]
- [[Evals]]
- [[_Training and Alignment Index]]
