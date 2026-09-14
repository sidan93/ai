---
tags: [claude_code, coding_agent, guide, anthropic]
aliases: [Claude Code Quickstart]
created: 2026-04-21
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# Быстрый старт Claude Code

> [!abstract] Суть
> Claude Code — coding-agent Anthropic, доступный через CLI, IDE, desktop и web. CLI читает проект, меняет файлы и запускает команды в пределах выбранного permission mode.

## Установка и вход

Для macOS/Linux/WSL официальный native installer:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Native install — текущий рекомендуемый путь и обновляется автоматически. Также документированы Homebrew, WinGet и системные пакеты; старый глобальный npm-вариант больше не стоит показывать как основной.

Запуск:

```bash
cd /path/to/project
claude
```

Войти можно через подходящий план Claude, Anthropic Console либо поддерживаемого enterprise provider. Не сохраняй credentials в проекте.

## Первый сеанс

1. Проверь рабочую папку и `git status`.
2. Сначала попроси объяснить проект без правок.
3. Дай небольшую задачу и критерий готовности.
4. Проверь proposed changes, diff и запущенные команды.
5. Подтверди только понятные действия и самостоятельно оцени тесты.

## Команды и продолжение работы

`/help` внутри установленной версии — источник истины. Для повседневной работы особенно полезны `/resume`, `/clear`, permission modes и просмотр diff; их точный набор меняется.

## `CLAUDE.md`

Храни в нём назначение проекта, ключевые директории, команды проверки, соглашения и границы. Claude Code также поддерживает skills, hooks, MCP и subagents; добавляй их под повторяемую потребность, а не «на всякий случай».

## Права

- permission mode определяет, когда инструмент спрашивает подтверждение;
- deny rules помогают закрыть секреты и защищённые пути;
- дополнительные директории расширяют доступ к файлам, но не обязательно становятся корнями всей конфигурации;
- право выполнить shell-команду требует той же осторожности, что ручной терминал.

## Официальные источники

- [Claude Code quickstart](https://code.claude.com/docs/en/quickstart)
- [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)
- [Permissions](https://code.claude.com/docs/en/permissions)
- [Configuration](https://code.claude.com/docs/en/configuration)

## Связанные заметки

- [[_Coding Assistants Index]]
- [[Рабочий цикл с coding-агентом]]
- [[Engineering Loop]]
- [[Протоколы Автономности]]
