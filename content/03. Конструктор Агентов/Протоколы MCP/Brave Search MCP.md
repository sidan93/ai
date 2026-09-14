---
tags:
  - mcp_server
  - search
  - web
aliases:
  - Brave Search
  - Web Search MCP
created: 2026-04-15
updated: 2026-09-14
status: time-sensitive
review_after: 2026-12-14
---

# Brave Search MCP

Официальный server Brave подключает Brave Search API к MCP-host. Прежний `@modelcontextprotocol/server-brave-search` архивирован; актуальный package принадлежит Brave — `@brave/brave-search-mcp-server`.

## Возможности

В зависимости от версии и тарифа доступны web, news, image, video, local/place search, подготовленный LLM context и summarization. Список tools и схемы нужно сверять с текущим repository, а не копировать из старой конфигурации.

Server 2.x по умолчанию использует STDIO; HTTP включается отдельно. Способ подключения зависит от host.

## Граница доверия

- Search result и snippet не равны прочитанному первоисточнику.
- Сводка Brave или модели не заменяет проверку утверждений.
- Найденные страницы могут содержать [[Indirect Prompt Injection]].
- Локальные результаты способны раскрывать приблизительное местоположение.
- Параметры свежести и языка влияют на полноту выдачи.

## Безопасная настройка

- брать package только из официального repository Brave;
- после проверки закрепить версию, а не полагаться на `latest`;
- хранить `BRAVE_API_KEY` в secret storage или окружении;
- ограничить число результатов, токены и частоту запросов;
- не отправлять в поисковый API приватный текст без необходимости;
- журналировать запрос, выбранные URL и дату обращения.

## Проверка

1. Выполнить однозначный тестовый поиск.
2. Сверить URL, заголовок, дату и фактическое содержимое страницы.
3. Проверить язык, регион и freshness filter.
4. Смоделировать неверный ключ и исчерпание квоты.
5. Убедиться, что ответ не выдаёт snippet за доказанный факт.

## Источник

- [Brave Search MCP Server](https://github.com/brave/brave-search-mcp-server)

См. также: [[Оракул Истины]], [[Безопасность MCP]], [[Выбор и проверка MCP-сервера]].
