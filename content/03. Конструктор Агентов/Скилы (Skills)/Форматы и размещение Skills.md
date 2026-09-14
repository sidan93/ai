---
tags:
  - skills
  - codex
  - api
  - deployment
aliases:
  - Skill formats
  - Размещение навыков
created: 2026-09-14
updated: 2026-09-14
status: evergreen
---

# Форматы и размещение Skills

> [!abstract]
> Один и тот же навык можно хранить локально, вместе с проектом, внутри plugin или как hosted API resource. Способ доставки определяет обнаружение, обновление и область доверия.

## Основные варианты

| Вариант | Когда подходит | Версионирование | Главный вопрос |
| :--- | :--- | :--- | :--- |
| Личный файловый skill | повторяемая работа одного пользователя | Git или копия каталога | кто может менять локальные инструкции |
| Проектный skill | workflow относится к repository | вместе с проектом | доверяет ли команда scripts и зависимостям |
| Plugin | нужно распространять связку skills, MCP и UI | версия plugin | какие возможности устанавливаются пакетом |
| Hosted/API skill | skill должен подключаться к hosted environment | immutable versions + default version | какая версия реально активна |

## Локальный Codex skill

Распространённая структура — `$CODEX_HOME/skills/<name>/SKILL.md`. В конкретной установке skills также могут поставляться системой или plugin. Проверяй список доступных навыков в текущей среде: наличие папки само по себе не гарантирует загрузку.

Локальный вариант удобен для личных процедур, но обновляется отдельно на каждом устройстве. Если навык должен жить рядом с проектом, проверь, поддерживает ли текущий клиент проектное обнаружение и какой каталог он ожидает.

## Hosted Skills в OpenAI API

OpenAI API предоставляет отдельный ресурс Skills:

- загрузка directory files или ZIP;
- получение метаданных и содержимого;
- создание неизменяемой версии;
- переключение default version;
- удаление и просмотр списка версий.

Agent environment template может получить skill по ID и версии либо inline ZIP. Для воспроизводимости production-конфигурации фиксируй конкретную версию; default удобен для управляемого rollout, но меняется независимо от кода клиента.

> [!warning]
> API resource Skills и локальная папка Codex — не одна и та же установка. Не делай вывод о доступности hosted skill по наличию локального каталога и наоборот.

## Что хранить в Git

Храни:

- `SKILL.md`, references, templates и scripts;
- lockfiles или точные версии зависимостей;
- тестовые inputs и ожидаемые свойства результата;
- changelog для поведенческих изменений.

Не храни:

- API keys, OAuth tokens и cookies;
- реальные персональные данные в fixtures;
- сессионные cache и browser profiles;
- генерируемые артефакты, если они не нужны как golden files.

## Обновление

1. Измени исходный пакет.
2. Прогони [[Тестирование Skills|регрессионные сценарии]].
3. Проверь diff инструкций и scripts как код.
4. Выпусти версию или commit.
5. Обнови выбранную версию в среде.
6. Убедись на чистой сессии, что обнаруживается нужный skill.
7. Сохрани путь отката.

## Источники

- [OpenAI API — Skills](https://developers.openai.com/api/reference/go/resources/skills)
- [OpenAI API — agent environment templates](https://developers.openai.com/api/reference/typescript/resources/beta/subresources/agents/subresources/environments/subresources/templates/methods/create)

## Связанные заметки

- [[Архитектура Навыка]]
- [[Безопасность Skills]]
- [[_Skills Index]]
