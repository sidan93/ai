---
tags:
  - mcp
  - security
  - authorization
  - prompt_injection
aliases:
  - MCP Security
created: 2026-09-14
updated: 2026-09-14
status: evergreen
---

# Безопасность MCP

MCP расширяет возможности AI-приложения и одновременно увеличивает поверхность атаки. Главная граница доверия проходит не между «моделью и MCP», а между пользователем, host, каждым server, его источниками данных и внешними системами.

## Основные угрозы

### Подмена сервера или пакета

Похожее имя в Registry/npm/PyPI не доказывает связь с поставщиком. Проверяй identity издателя, repository URL, подпись или provenance пакета и документацию владельца сервиса.

### Excessive permissions

Слишком широкий OAuth scope, токен или filesystem root превращает ошибочный tool call в реальный ущерб. Начинай с read-only и минимальной области.

### Prompt injection

Resources и tool outputs могут содержать инструкции злоумышленника. Данные из страницы, issue, документа или памяти не должны менять системную политику или самостоятельно расширять права.

### Confused deputy

Server или host может использовать авторизацию пользователя не для того ресурса или действия, на которое тот рассчитывал. Токены должны быть ограничены аудиторией и целевым resource.

### Token passthrough

Server не должен принимать произвольный входящий токен и без проверки пересылать его дальше. Это ломает границы аудитории, аудит и контроль доступа.

### DNS rebinding и открытый localhost

Локальный HTTP server, привязанный ко всем интерфейсам или не проверяющий Origin, может стать доступен вредоносной странице. Предпочитай loopback, проверку Origin и аутентификацию.

## Авторизация

Для защищённых HTTP-based серверов спецификация определяет OAuth-совместимый flow с discovery authorization server и привязкой токена к MCP resource. STDIO-серверы обычно получают credentials из окружения процесса, но это не делает их автоматически безопасными.

## Подтверждение side effects

Перед отправкой письма, изменением календаря, публикацией, оплатой или удалением host должен показать точный payload и последствия. Tool annotation или описание server помогает интерфейсу, но не является достаточной защитой.

## Defense in depth

- минимальные scopes, tool allowlist и Roots;
- отдельные read/write credentials;
- sandbox и ограниченная сеть;
- schema и semantic validation аргументов;
- preview, approval, idempotency и checkpoint;
- лимиты времени, стоимости и количества вызовов;
- журнал tool calls без секретов;
- тесты с вредоносными resources и outputs;
- простое отключение и отзыв доступа server.

## Проверка remote server

- используется HTTPS;
- токен предназначен именно этому resource;
- redirect URI и authorization server ожидаемые;
- server не логирует credentials и лишние данные;
- Origin и локальные endpoints обрабатываются безопасно;
- задачи и результаты изолированы между пользователями;
- есть rate limits, TTL и процедура отзыва доступа.

## Связанные заметки

- [[Indirect Prompt Injection]]
- [[Протоколы Автономности]]
- [[Выбор и проверка MCP-сервера]]
- [[Архитектура MCP]]

## Источники

- [MCP specification — Security and Trust & Safety](https://modelcontextprotocol.io/specification/2026-07-28)
- [MCP Authorization](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization)
