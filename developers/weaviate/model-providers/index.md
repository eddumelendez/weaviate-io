---
title: Model provider integrations
sidebar_position: 50
image: og/docs/model-provider-integrations.jpg
# tags: ['getting started', 'model providers', 'integrations']
---

import BetaPageNote from './_includes/beta_pages.md';

<BetaPageNote />

Weaviate integrates with a variety of [self-hosted](#self-hosted) and [API-based](#api-based) models from a range of providers.

This enables an enhanced developed experience, such as the ability to:
- Import objects directly into Weaviate without having to manually specify embeddings, and
- Build an integrated retrieval augmented generation (RAG) pipeline with generative AI models.

## Model provider integrations

### API-based

| Model provider | Embeddings | Generative AI | Others |
| --- | --- | --- | --- |
| [Anthropic](./anthropic/index.md) | - | [Text](./anthropic/generative.md) | - |
| [Anyscale](./anyscale/index.md) | - | [Text](./anyscale/generative.md) | - |
| [AWS](./aws/index.md) | [Text](./aws/embeddings.md) | [Text](./aws/generative.md) |
| [Cohere](./cohere/index.md) | [Text](./cohere/embeddings.md) | [Text](./cohere/generative.md) | [Reranker](./cohere/reranker.md) |
| [Google](./google/index.md) | [Text](./google/embeddings.md), [Multimodal](./google/embeddings-multimodal.md) | [Text](./google/generative.md) | - |
| [Hugging Face](./huggingface/index.md) | [Text](./huggingface/embeddings.md) | - | - |
| [Jina AI](./jinaai/index.md) | [Text](./jinaai/embeddings.md) | - | - |
| [Mistral](./mistral/index.md) | - | [Text](./mistral/generative.md) | - |
| [OctoAI](./octoai/index.md) | [Text](./octoai/embeddings.md) | [Text](./octoai/generative.md) | - |
| [OpenAI](./openai/index.md) | [Text](./openai/embeddings.md) | [Text](./openai/generative.md) | - |
| [Azure OpenAI](./openai-azure/index.md) | [Text](./openai-azure/embeddings.md) | [Text](./openai-azure/generative.md) | - |
| [Voyage AI](./voyageai/index.md) | [Text](./voyageai/embeddings.md) | - | [Reranker](./voyageai/reranker.md) |

#### Enable all API-based modules

:::caution Experimental feature
Available starting in `v1.26.0`. This is an experimental feature. Use with caution.
:::

You can enable all API-based integrations at once by [by setting the `ENABLE_API_BASED_MODULES` environment variable to `true`](../configuration/modules.md#enable-all-api-based-modules).

This make all API-based model integrations available for use, such as those for Anthropic, Cohere, OpenAI, and so on. These modules are lightweight, so enabling them all will not significantly increase resource usage.

Read more about [enabling all API-based modules](../configuration/modules.md#enable-all-api-based-modules).

### Locally hosted

| Model provider | Embeddings | Generative AI | Others |
| --- | --- | --- | --- |
| [GPT4All](./gpt4all/index.md) | [Text](./gpt4all/embeddings.md) | - | - |
| [Hugging Face](./huggingface/index.md) | [Text](./huggingface/embeddings.md), [Multimodal (CLIP)](./transformers/embeddings-multimodal.md) | - | - |
| [Meta ImageBind](./imagebind/index.md) | [Multimodal](./imagebind/embeddings-multimodal.md) | - | - |
| [Ollama](./ollama/index.md) | [Text](./ollama/embeddings.md) | [Text](./ollama/generative.md) | - |
