# Communication
(*communication*)

## Overview

Operations related to Communication

### Available Operations

* [listStatusUpdateTemplates](#liststatusupdatetemplates) - List status update templates
* [createStatusUpdateTemplate](#createstatusupdatetemplate) - Create a status update template
* [getStatusUpdateTemplate](#getstatusupdatetemplate) - Get a status update template
* [deleteStatusUpdateTemplate](#deletestatusupdatetemplate) - Delete a status update template
* [updateStatusUpdateTemplate](#updatestatusupdatetemplate) - Update a status update template

## listStatusUpdateTemplates

List all status update templates for your organization

### Example Usage

```typescript
import { Firehydrant } from "firehydrant";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.communication.listStatusUpdateTemplates({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant/core.js";
import { communicationListStatusUpdateTemplates } from "firehydrant/funcs/communicationListStatusUpdateTemplates.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await communicationListStatusUpdateTemplates(firehydrant, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListStatusUpdateTemplatesRequest](../../models/operations/liststatusupdatetemplatesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.StatusUpdateTemplateEntity](../../models/components/statusupdatetemplateentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createStatusUpdateTemplate

Create a status update template for your organization

### Example Usage

```typescript
import { Firehydrant } from "firehydrant";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.communication.createStatusUpdateTemplate({
    name: "<value>",
    body: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant/core.js";
import { communicationCreateStatusUpdateTemplate } from "firehydrant/funcs/communicationCreateStatusUpdateTemplate.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await communicationCreateStatusUpdateTemplate(firehydrant, {
    name: "<value>",
    body: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateStatusUpdateTemplate](../../models/components/createstatusupdatetemplate.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.StatusUpdateTemplateEntity](../../models/components/statusupdatetemplateentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getStatusUpdateTemplate

Get a single status update template by ID

### Example Usage

```typescript
import { Firehydrant } from "firehydrant";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.communication.getStatusUpdateTemplate({
    statusUpdateTemplateId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant/core.js";
import { communicationGetStatusUpdateTemplate } from "firehydrant/funcs/communicationGetStatusUpdateTemplate.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await communicationGetStatusUpdateTemplate(firehydrant, {
    statusUpdateTemplateId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStatusUpdateTemplateRequest](../../models/operations/getstatusupdatetemplaterequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.StatusUpdateTemplateEntity](../../models/components/statusupdatetemplateentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteStatusUpdateTemplate

Delete a single status update template

### Example Usage

```typescript
import { Firehydrant } from "firehydrant";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.communication.deleteStatusUpdateTemplate({
    statusUpdateTemplateId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant/core.js";
import { communicationDeleteStatusUpdateTemplate } from "firehydrant/funcs/communicationDeleteStatusUpdateTemplate.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await communicationDeleteStatusUpdateTemplate(firehydrant, {
    statusUpdateTemplateId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteStatusUpdateTemplateRequest](../../models/operations/deletestatusupdatetemplaterequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.StatusUpdateTemplateEntity](../../models/components/statusupdatetemplateentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateStatusUpdateTemplate

Update a single status update template

### Example Usage

```typescript
import { Firehydrant } from "firehydrant";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.communication.updateStatusUpdateTemplate({
    statusUpdateTemplateId: "<id>",
    updateStatusUpdateTemplate: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant/core.js";
import { communicationUpdateStatusUpdateTemplate } from "firehydrant/funcs/communicationUpdateStatusUpdateTemplate.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await communicationUpdateStatusUpdateTemplate(firehydrant, {
    statusUpdateTemplateId: "<id>",
    updateStatusUpdateTemplate: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateStatusUpdateTemplateRequest](../../models/operations/updatestatusupdatetemplaterequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.StatusUpdateTemplateEntity](../../models/components/statusupdatetemplateentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |