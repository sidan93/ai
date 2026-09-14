---
tags:
  - MOC
  - mcp
  - connectivity
  - architecture
aliases:
  - MCP Index
  - Список серверов
created: 2026-04-16
updated: 2026-09-14
status: time-sensitive
---

# Model Context Protocol (MCP)

MCP — открытый протокол взаимодействия AI-приложений с внешними данными, действиями и интерфейсами. Он стандартизирует обмен сообщениями, но не решает автоматически вопросы доверия, полномочий, качества сервера и безопасности конкретного tool call.

## С чего начать

1. [[Архитектура MCP]] — участники, примитивы, transports и версии протокола.
2. [[Безопасность MCP]] — границы доверия, авторизация и side effects.
3. [[Выбор и проверка MCP-сервера]] — установка без доверия одному названию пакета.
4. [[MCP (Model Context Protocol)]] — короткое определение в глоссарии.

## Каталог интеграций

### Reference servers

Эти реализации из репозитория MCP предназначены прежде всего для демонстрации протокола и SDK. Статус reference server не равен аудиту для production.

- [[Filesystem MCP]] — ограниченные операции с файлами и Roots.
- [[Memory MCP]] — простая долговременная knowledge graph memory.
- [[Sequential Thinking MCP]] — внешний структурированный scratchpad.

### Серверы поставщиков

- [[Brave Search MCP]] — официальный сервер Brave Search.
- [[Playwright MCP]] — официальный browser automation server Microsoft.
- [[GitHub MCP]] — официальный remote или local сервер GitHub.

### Сценарии без канонического сервера

- [[Google Calendar MCP]] — модель безопасного подключения календаря; конкретного издателя нужно выбирать отдельно.

## Что изменилось в MCP 2026-07-28

- ядро протокола стало stateless;
- прежние обязательные initialization/session-механизмы ядра заменены запросами с версией и метаданными клиента;
- capability discovery доступен отдельно и не обязан предшествовать каждому запросу;
- появились формальная система extensions и multi-round-trip requests;
- Tasks вынесены в расширение для долгих операций;
- усилены правила authorization и совместимость с обычной HTTP-инфраструктурой.

Поддержка версии зависит от host, SDK и сервера. Нельзя считать, что установленный клиент уже реализует все возможности последней спецификации.

## MCP не гарантирует

- что найденный сервер принадлежит ожидаемому издателю;
- что tool безопасен или его описание правдиво;
- что модель выберет правильный инструмент и аргументы;
- что OAuth scope минимален;
- что внешний текст не содержит prompt injection;
- что действие можно отменить или повторить без последствий.

## Практический порядок подключения

```text
сценарий → минимальные capabilities → проверка издателя и кода
→ выбор local/remote transport → минимальные права → sandbox
→ тест чтения → тест отказа → preview записи → журналирование
```

## Связанные разделы

- [[_Agentic Systems Index|Агентные системы]]
- [[Протоколы Автономности]]
- [[Indirect Prompt Injection]]
- [[Tool Use Function Calling]]
- [[_Skills Index|AI Skills]]

## Актуальные источники

- [MCP specification](https://modelcontextprotocol.io/specification/2026-07-28)
- [MCP 2026-07-28 release](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [Official MCP Registry](https://registry.modelcontextprotocol.io/)
- [Reference servers](https://github.com/modelcontextprotocol/servers)
