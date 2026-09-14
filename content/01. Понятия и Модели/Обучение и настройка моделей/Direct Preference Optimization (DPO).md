---
tags:
  - dpo
  - alignment
  - preference-optimization
  - fine-tuning
aliases:
  - DPO
  - Direct Preference Optimization
  - Прямая оптимизация предпочтений
created: 2026-04-16
updated: 2026-09-14
status: evergreen
---

# Direct Preference Optimization

> [!abstract]
> DPO — offline preference-optimization метод, который обучает политику предпочитать chosen ответ rejected ответу относительно reference policy. Отдельный явный reward model и online PPO loop не требуются.

## Данные

Типичный пример содержит:

- prompt `x`;
- выбранный ответ `y_w`;
- отклонённый ответ `y_l`.

Пара сообщает относительное предпочтение, а не абсолютную правильность. Если оба ответа плохи или различаются нерелевантной особенностью, обучение закрепит слабый сигнал.

## DPO и классический RLHF

| Свойство | RLHF с reward model + PPO | DPO |
| :--- | :--- | :--- |
| Явный reward model | обычно да | нет |
| Online rollouts при optimization | обычно да | обычно нет |
| Reference policy | ограничивает сдвиг | входит в objective |
| Инженерная сложность | выше | обычно ниже |
| Нужны preference data и evals | да | да |

## Когда рассматривать

- есть качественные пары предпочтений;
- SFT учит допустимому ответу, но плохо различает более и менее желательные варианты;
- нужно устойчиво менять стиль, формат или стратегию ответа;
- существует отдельный eval set и baseline.

## Риски

- noisy или однородные preferences;
- shortcut learning по длине и стилю;
- переоптимизация и потеря разнообразия;
- ухудшение вне training distribution;
- data leakage между train и eval;
- некорректный reference model или hyperparameters.

DPO — не универсальная замена RLHF и не гарантия alignment. Выбор метода зависит от данных, инфраструктуры и измеряемого поведения.

## Источник

- [Rafailov et al. — Direct Preference Optimization](https://arxiv.org/abs/2305.18290)

## Связанные заметки

- [[Reinforcement Learning from Human Feedback (RLHF)]]
- [[Fine-tuning]]
- [[Evals]]
- [[_Training and Alignment Index]]
