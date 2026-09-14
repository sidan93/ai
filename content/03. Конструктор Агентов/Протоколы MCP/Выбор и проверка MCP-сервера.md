---
tags:
  - mcp
  - security
  - checklist
  - supply_chain
aliases:
  - MCP Server Checklist
  - Проверка MCP-сервера
created: 2026-09-14
updated: 2026-09-14
status: evergreen
---

# Выбор и проверка MCP-сервера

Registry помогает обнаружить server, но публикация в каталоге не заменяет аудит. Проверять нужно всю цепочку: запись Registry → package → repository → издатель → запускаемый код → внешние API.

## 1. Сформулируй необходимость

- Какую конкретную задачу решает server?
- Достаточно ли встроенного инструмента host или прямого API?
- Нужны Tools, Resources, Prompts или только один read-only вызов?
- Какие данные и side effects окажутся в зоне доступа?

## 2. Проверь происхождение

- Найди запись в [Official MCP Registry](https://registry.modelcontextprotocol.io/).
- Сверь namespace, package identifier и repository URL.
- Перейди к документации с официального сайта поставщика, если server заявлен как официальный.
- Проверь владельца репозитория, лицензию, releases и историю поддержки.
- Не доверяй случайному пакету только из-за известного названия.

## 3. Изучи код и зависимости

- что запускает install/start command;
- выполняются ли lifecycle scripts;
- куда server пишет файлы и логи;
- какие процессы и сетевые адреса открывает;
- как хранит и передаёт секреты;
- есть ли lockfile, подписи, attestations или checksum;
- можно ли закрепить проверенную версию вместо `latest`.

## 4. Спроектируй права

- отдельный тестовый аккаунт или каталог;
- минимальные OAuth scopes и Roots;
- read-only по умолчанию;
- отдельное подтверждение записи и удаления;
- изолированный runtime и ограниченная сеть;
- короткоживущие credentials с простым отзывом.

## 5. Проверь поведение

1. Подключи server в тестовой среде.
2. Сверь объявленные capabilities и список tools.
3. Выполни один безопасный read-запрос.
4. Проверь отказ за пределами области доступа.
5. Перед write запроси preview и отклони подтверждение.
6. Смоделируй timeout, ошибку API и повтор вызова.
7. Передай prompt injection внутри данных и проверь изоляцию.
8. Убедись, что trace показывает фактический payload и результат.

Для диагностики протокола можно использовать MCP Inspector, но он не доказывает безопасность бизнес-логики.

## 6. Эксплуатация и удаление

- следи за changelog и breaking changes спецификации;
- обновляй осознанно и повторяй тесты;
- сохраняй дату проверки и используемую версию;
- умей отключить server, удалить конфигурацию и отозвать токен;
- проверь, какие локальные данные и логи остаются после удаления.

## Карточка установки

```yaml
server: canonical-name
publisher: verified-owner
repository: https://example.com/repo
package: exact-package-id
version: pinned-version
transport: stdio-or-http
capabilities: []
permissions: []
secrets: []
date_verified: YYYY-MM-DD
rollback: "Как отключить и отозвать доступ"
```

См. также: [[Безопасность MCP]], [[Чек-лист агентной системы]], [[Observability and Tracing]].
