---
title: Generative search
sidebar_position: 80
image: og/docs/howto.jpg
# tags: ['how to', 'generative']
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FilteredTextBlock from '@site/src/components/Documentation/FilteredTextBlock';
import PythonCode from '!!raw-loader!/_includes/code/howto/search.generative.py';
import TSCode from '!!raw-loader!/_includes/code/howto/search.generative.ts';

## Overview

This page shows you how to perform `generative` searches using Weaviate.

:::info Related pages
- [API References: GraphQL: Generative search](../api/graphql/get.md)
:::

To use the generative search feature, you must:
- Specify a query to retrieve one or more objects, and
- Provide a [`single prompt`](#single-prompt) or a [`grouped task`](#grouped-task) to generate text from.

## Single prompt

A **single prompt** generative search returns a generated response for each object in the query results. For **single prompt** generative searches, you must specify which object *properties* to use in the prompt.

In the below example, the query:
1. Retrieves two `JeopardyQuestion` objects related to `World history`,
1. Prepares a prompt for each object, based on the prompt `"Convert the following into a question for twitter. Include emojis for fun, but do not include the answer: {question}."`, where `{question}` is an object property, and
1. Retrieves a generated text for each object (2 total), and
1. Returns the generated text as a part of each object, along with the `question` property.

<Tabs groupId="languages">
<TabItem value="py" label="Python">

<FilteredTextBlock
  text={PythonCode}
  startMarker="# SingleGenerativePython"
  endMarker="# END SingleGenerativePython"
  language="py"
/>

</TabItem>
<TabItem value="js" label="JavaScript/TypeScript">

<FilteredTextBlock
  text={TSCode}
  startMarker="// SingleGenerative TS"
  endMarker="// END SingleGenerative TS"
  language="js"
/>

</TabItem>
<TabItem value="graphql" label="GraphQL">

<FilteredTextBlock
  text={PythonCode}
  startMarker="# SingleGenerativeGraphQL"
  endMarker="# END SingleGenerativeGraphQL"
  language="graphql"
/>

</TabItem>
</Tabs>

<details>
  <summary>Example response</summary>

It should produce a response like the one below:

<FilteredTextBlock
  text={PythonCode}
  startMarker="# SingleGenerative Expected Results"
  endMarker="# END SingleGenerative Expected Results"
  language="json"
/>

</details>

### Single prompt property selection

When using generative search with single prompts, you must specify which object _properties_ to use in the prompt.

The properties to use as a part of the prompt do *not* need to be among the properties retrieved in the query.

In the below example, the query:
1. Retrieves two `JeopardyQuestion` objects related to `World history`,
1. Prepares a prompt for each object, based on the prompt `"Convert this quiz question: {question} and answer: {answer} into a trivia tweet.` where `{question}` and `{answer}` are object properties, and
1. Retrieves a generated text for each object (2 total), and
1. Returns the generated text as a part of each object.

Note that the `question` and `answer` properties are not retrieved in the query, but are used in the prompt.

<Tabs groupId="languages">
<TabItem value="py" label="Python">

<FilteredTextBlock
  text={PythonCode}
  startMarker="# SingleGenerativePropertiesPython"
  endMarker="# END SingleGenerativePropertiesPython"
  language="py"
/>

</TabItem>
<TabItem value="js" label="JavaScript/TypeScript">

<FilteredTextBlock
  text={TSCode}
  startMarker="// SingleGenerativeProperties TS"
  endMarker="// END SingleGenerativeProperties TS"
  language="js"
/>

</TabItem>
<TabItem value="graphql" label="GraphQL">

<FilteredTextBlock
  text={PythonCode}
  startMarker="# SingleGenerativePropertiesGraphQL"
  endMarker="# END SingleGenerativePropertiesGraphQL"
  language="graphql"
/>

</TabItem>
</Tabs>

<details>
  <summary>Example response</summary>

It should produce a response like the one below:

<FilteredTextBlock
  text={PythonCode}
  startMarker="# SingleGenerativeProperties Expected Results"
  endMarker="# END SingleGenerativeProperties Expected Results"
  language="json"
/>

</details>

## Grouped task

A **grouped task** works by generating a response for the entire query results set.

When using generative search with a **grouped task**, the required parameter is the user prompt. By default, the entire set of properties are included in the combined prompt unless [specified otherwise](#grouped-task-property-selection).

### Example

In the below example, the query:
1. Retrieves three `JeopardyQuestion` objects related to `cute animals`,
1. Combines the user prompt with the set of retrieved objects to build the grouped task,
1. Retrieves one generated text using the grouped task, and
1. Returns the generated text as a part of the first object returned, as well as the requested `points` property.

Note that the prompt includes information about the type of the animal (from the `answer` property), even though the `answer` property is not explicitly retrieved.

<Tabs groupId="languages">
<TabItem value="py" label="Python">

<FilteredTextBlock
  text={PythonCode}
  startMarker="# GroupedGenerativePython"
  endMarker="# END GroupedGenerativePython"
  language="py"
/>

</TabItem>
<TabItem value="js" label="JavaScript/TypeScript">

<FilteredTextBlock
  text={TSCode}
  startMarker="// GroupedGenerative TS"
  endMarker="// END GroupedGenerative TS"
  language="js"
/>

</TabItem>
<TabItem value="graphql" label="GraphQL">

<FilteredTextBlock
  text={PythonCode}
  startMarker="# GroupedGenerativeGraphQL"
  endMarker="# END GroupedGenerativeGraphQL"
  language="graphql"
/>

</TabItem>
</Tabs>

<details>
  <summary>Example response</summary>

It should produce a response like the one below:

<FilteredTextBlock
  text={PythonCode}
  startMarker="# GroupedGenerative Expected Results"
  endMarker="# END GroupedGenerative Expected Results"
  language="json"
/>

</details>

### Grouped task property selection

:::info Requires Weaviate `v1.18.3` or higher
:::

You can specify which properties will be included in the `grouped task` prompt. Use this to limit the information provided in the prompt, and to reduce the prompt length.

In the below example, the prompt will only include the `question` and `answer` properties. Note that the `answer` property is not explicitly retrieved in the query, but is used by the prompt.

<!-- TODO - add client code when made available -->

<Tabs groupId="languages">
  <TabItem value="python" label="Python">
  
  <FilteredTextBlock
    text={PythonCode}
    startMarker="# GroupedGenerativeProperties Python"
    endMarker="# END GroupedGenerativeProperties Python"
    language="py"
  />
  
  </TabItem>
  <TabItem value="js" label="JavaScript/TypeScript">
  
  <FilteredTextBlock
    text={TSCode}
    startMarker="// GroupedGenerativeProperties"
    endMarker="// END GroupedGenerativeProperties"
    language="ts"
  />
  
  </TabItem>

  <TabItem value="graphql" label="GraphQL">
  
  <FilteredTextBlock
    text={PythonCode}
    startMarker="# GroupedGenerativePropertiesGraphQL"
    endMarker="# END GroupedGenerativePropertiesGraphQL"
    language="graphql"
  />
  
  </TabItem>
</Tabs>

<details>
  <summary>Example response</summary>

It should produce a response like the one below:

<FilteredTextBlock
  text={PythonCode}
  startMarker="# GroupedGenerativeProperties Expected Results"
  endMarker="# END GroupedGenerativeProperties Expected Results"
  language="json"
/>

</details>

## More Resources

import DocsMoreResources from '/_includes/more-resources-docs.md';

<DocsMoreResources />
