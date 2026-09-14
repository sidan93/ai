---
tags: [claude_code, workflow, engineering, source_summary]
aliases: [Engineering Loop]
created: 2026-06-25
updated: 2026-09-14
status: source-summary
source: https://github.com/sidan93/claude-eng-loop
---

# Engineering Loop — строгий контур для Claude Code

> [!abstract] Суть
> Engineering Loop — авторский `CLAUDE.md`-шаблон из девяти фаз: от чтения задачи до проверки исходной цели. Это один из вариантов дисциплины для крупных задач, а не обязательная настройка каждого coding-agent.

## Какую проблему решает

В длинной задаче агент может начать менять код до понимания границ, потерять исходную цель или принять успешный тест за завершение всей работы. Шаблон заставляет разделить понимание, план, исполнение и goal check.

## Девять фаз

```text
Receive → Understand → Decompose → Plan → Review → Align → Execute → Verify → Goal Check
```

| Фаза | Контрольный вопрос |
| :--- | :--- |
| Receive | Весь ли доступный контекст прочитан до выводов? |
| Understand | Что должно получиться и какие есть ограничения? |
| Decompose | Какие блоки можно планировать и проверять отдельно? |
| Plan | Какие изменения и проверки нужны для каждого блока? |
| Review | Все ли части плана ведут к исходной цели? |
| Align | Нужно ли согласовать решение до широких изменений? |
| Execute | Выполняются ли блоки без лишнего расширения scope? |
| Verify | Что доказали tests, lint и сценарии? |
| Goal Check | Решена ли пользовательская задача, а не только технический подэтап? |

## Предохранители шаблона

- режимы Interactive, Autonomous и Just Chat;
- Fast Track для микрозадач;
- лимит повторных полных циклов;
- Direct Answer для вопросов без изменения файлов.

Строгий цикл полезен для миграции или крупного рефакторинга, но избыточен для локальной очевидной правки. Сначала сравни его с общим [[Рабочий цикл с coding-агентом|коротким циклом]].

## Установка

Исходник находится в [sidan93/claude-eng-loop](https://github.com/sidan93/claude-eng-loop). Перед заменой существующего `CLAUDE.md` скачай шаблон отдельно, просмотри diff и перенеси только подходящие правила.

```bash
curl -o CLAUDE.template.md https://raw.githubusercontent.com/sidan93/claude-eng-loop/main/CLAUDE.md
```

## Публикации

- [GitHub](https://github.com/sidan93/claude-eng-loop)
- [Reddit: Prompt Engineering](https://www.reddit.com/r/PromptEngineering/comments/1udjmaz/controlling_claude_code_a_9phase_system_prompt/)
- [Reddit: ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1udhbtr/claude_engineering_loop_9phase_workflow_in_one/)
- [Hacker News](https://news.ycombinator.com/item?id=48644504)

## Связанные заметки

- [[Быстрый старт Claude Code]]
- [[Рабочий цикл с coding-агентом]]
- [[_Coding Assistants Index]]
