---
tags:
  - mcp_server
  - github
  - development
  - security
aliases:
  - GitHub MCP Server
created: 2026-09-14
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# GitHub MCP

GitHub поддерживает официальный MCP server для работы с репозиториями, issues, pull requests, Actions и другими GitHub API. Доступны hosted remote server и local server.

## Режимы

- **Remote:** GitHub-hosted endpoint; способ OAuth/PAT зависит от поддержки host-приложения и политики аккаунта.
- **Local:** официальный binary или container `ghcr.io/github/github-mcp-server`; полезен для локального контроля и GitHub Enterprise Server.

Актуальные URL, способы входа и совместимость нужно брать из официального repository, а не копировать из случайного примера.

## Сужение возможностей

Server позволяет включать отдельные toolsets или tools. Для знакомства начинай с:

- только нужных репозиториев;
- `--read-only` или эквивалентного remote-режима;
- минимальных toolsets, например чтения repos/issues/pull requests;
- credential с минимальными repository permissions.

Read-only server не расширяет и не сужает доступ самого credential к GitHub вне MCP, поэтому токен всё равно должен быть минимальным.

## Side effects

Создание issue, комментария, ветки, pull request, запуск workflow и изменение repository state являются внешними действиями. Перед вызовом показывай owner/repo, branch, title, body и остальные существенные аргументы.

## Недоверенный контент

README, issues, PR comments, code и commit messages могут содержать prompt injection. Lockdown mode помогает фильтровать часть публичного контента, но сам GitHub описывает его как best-effort, а не authorization boundary.

## Проверка

1. Подключить один тестовый repository в read-only.
2. Прочитать известный файл и issue.
3. Убедиться, что недоступный repository остаётся недоступен.
4. Ограничить toolsets и проверить фактический список tools.
5. Подготовить write payload, но отклонить подтверждение.
6. Отозвать OAuth/PAT и проверить прекращение доступа.

## Источник

- [GitHub official MCP Server](https://github.com/github/github-mcp-server)

См. также: [[Протоколы Автономности]], [[Безопасность MCP]], [[Indirect Prompt Injection]].
