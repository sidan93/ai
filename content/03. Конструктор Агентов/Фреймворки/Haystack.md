---
tags:
  - framework
  - haystack
  - rag
  - pipelines
created: 2026-04-16
updated: 2026-09-10
status: time-sensitive
---

# Haystack

> [!abstract]
> Haystack — open-source Python-фреймворк для RAG, поиска, LLM-пайплайнов и инструментальных агентов. Базовые абстракции — компоненты, pipeline, document stores, generators и tools.

## Как устроен

- **Components** выполняют отдельные операции: преобразование, embedding, retrieval, reranking или генерацию.
- **Pipelines** соединяют совместимые входы и выходы компонентов в направленный мультиграф; возможны ветвления, параллельные потоки и циклы.
- **Document Stores** предоставляют хранилище для документов и retrieval-компонентов.
- **Agent** запускает цикл вызова модели и инструментов до заданного условия выхода.
- **Tools** могут оборачивать функцию, компонент или другой pipeline.

Совместимость входов и выходов помогает обнаруживать ошибки соединения компонентов, но не гарантирует корректность данных или ответа модели.

## Когда рассматривать

- RAG-пайплайн с явными этапами indexing и query.
- Гибридный поиск, reranking и маршрутизация.
- Система, где важны заменяемые компоненты и наблюдаемая схема потока данных.
- Агент, которому удобно предоставлять существующие pipelines как инструменты.

## Что проверить перед выбором

- Есть ли готовая интеграция с нужной моделью и хранилищем.
- Подходит ли модель выполнения pipeline для нужных циклов и состояния.
- Как будут устроены evals, трассировка, секреты, retries и лимиты инструментов.
- Нужен ли фреймворк вообще: небольшой последовательный RAG иногда проще реализовать напрямую.

## Минимальный эскиз

```python
from haystack import Pipeline
from haystack.components.builders import PromptBuilder
from haystack.components.generators import OpenAIGenerator

pipe = Pipeline()
pipe.add_component("prompt", PromptBuilder(template="Ответь кратко: {{ question }}"))
pipe.add_component("llm", OpenAIGenerator())
pipe.connect("prompt", "llm")

result = pipe.run({"prompt": {"question": "Что такое RAG?"}})
```

Пример требует установленного пакета, действующих учётных данных провайдера и может измениться между версиями. Для production добавь обработку ошибок, ограничения и evals.

## Официальные источники

- [Haystack documentation](https://docs.haystack.deepset.ai/docs)
- [Components](https://docs.haystack.deepset.ai/docs/components)
- [Pipelines](https://docs.haystack.deepset.ai/docs/pipelines)
- [Agents](https://docs.haystack.deepset.ai/docs/agents)

## Связи

- [[RAG (Retrieval-Augmented Generation)]]
- [[LlamaIndex]]
- [[LangChain]]
- [[_Frameworks Index]]
