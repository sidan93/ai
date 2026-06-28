---
tags:
  - claude_code
  - workflow
  - engineering
  - open_source
aliases:
  - Engineering Loop
created: 2026-06-25
source: https://github.com/sidan93/claude-eng-loop
---

# Engineering Loop — рабочий контур Claude Code

**Engineering Loop** — это `CLAUDE.md`-шаблон, превращающий AI-агента в структурированного инженера. 9-фазный процесс от приёма задачи до проверки цели, с режимами исполнения и встроенным предохранителем от зацикливания.

> Репозиторий: [sidan93/claude-eng-loop](https://github.com/sidan93/claude-eng-loop)

---

## Проблема

Без структуры Claude Code пишет код бесцельно, забывает собственный контекст и объявляет победу до проверки результата. Ты отлаживаешь AI-баги вместо того чтобы поставлять фичи.

## Как работает

9 обязательных фаз для каждой задачи:

```
Receive → Understand → Decompose → Plan → Align → Execute → Verify → [Gap? → Plan]
```

### Фазы

| Фаза | Суть |
|------|------|
| **0 — Receive** | Прочитать задачу и весь связанный контекст, не формируя мнения |
| **1 — Understand** | Переформулировать, подтвердить понимание |
| **2 — Decompose** | Разбить на независимо планируемые блоки |
| **3 — Plan** | Пошаговый план на каждый блок (макс 5–7 шагов) |
| **4 — Review** | Проверка согласованности всех планов с исходной целью |
| **5 — Align** | Показать план → получить одобрение |
| **6 — Execute** | Блок за блоком |
| **7 — Verify** | Тесты, сценарий, план vs. результат — обязательно до объявления done |
| **8 — Goal Check** | Достигли ли именно того, что просили? Нет → gap-анализ → фаза 3 |

### Ключевые механики

- **Режимы**: Interactive (по умолчанию), Autonomous, Just Chat
- **Fast Track**: микро-задачи (опечатка, переименование) пропускают фазы 2–5
- **Escape Hatch**: жёсткий ограничитель — максимум 3 итерации полного цикла, блок не может падать больше 2 раз
- **Direct Answer**: чистые вопросы без кода — мгновенный ответ без запуска цикла

## Быстрая установка

```bash
curl -o CLAUDE.md https://raw.githubusercontent.com/sidan93/claude-eng-loop/main/CLAUDE.md
```

Заполнить секцию `## Project Context`, запустить Claude Code и дать задачу.

---

## Публикации

| Платформа | Ссылка |
|-----------|--------|
| GitHub | [sidan93/claude-eng-loop](https://github.com/sidan93/claude-eng-loop) |
| Reddit r/PromptEngineering | [Controlling Claude Code: a 9-phase system prompt](https://www.reddit.com/r/PromptEngineering/comments/1udjmaz/controlling_claude_code_a_9phase_system_prompt/) |
| Reddit r/ClaudeAI | [Claude Engineering Loop: 9-phase workflow](https://www.reddit.com/r/ClaudeAI/comments/1udhbtr/claude_engineering_loop_9phase_workflow_in_one/) |
| Hacker News | [HN discussion](https://news.ycombinator.com/item?id=48644504) |
| LinkedIn | [Post](https://www.linkedin.com/feed/update/urn:li:activity:7475186476368986112/) |

---

## 🔗 Связи
- [[Быстрый старт Claude Code]] — установка и базовая настройка
- [[Инструкция по эксплуатации]] — общий операционный подход к работе с агентами
- [[_Claude Code Index]] — навигатор раздела
