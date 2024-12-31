# AccountSettings
(*accountSettings*)

## Overview

### Available Operations

* [getAiPreferences](#getaipreferences) - Get AI preferences
* [updateAiPreferences](#updateaipreferences) - Update AI preferences
* [voteOnIncidentSummary](#voteonincidentsummary) - Vote on an AI-generated incident summary
* [getBootstrap](#getbootstrap) - Get initial application configuration and settings
* [listEntitlements](#listentitlements) - List entitlements
* [ping](#ping) - Check API connectivity
* [getSavedSearch](#getsavedsearch) - Get a saved search
* [deleteSavedSearch](#deletesavedsearch) - Delete a saved search
* [updateSavedSearch](#updatesavedsearch) - Update a saved search

## getAiPreferences

Retrieves the current AI preferences

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings.getAiPreferences();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsGetAiPreferences } from "firehydrant-typescript-sdk/funcs/accountSettingsGetAiPreferences.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsGetAiPreferences(firehydrantTypescriptSDK);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIEntitiesPreferencesEntity](../../models/components/aientitiespreferencesentity.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## updateAiPreferences

Updates the AI preferences

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings.updateAiPreferences();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsUpdateAiPreferences } from "firehydrant-typescript-sdk/funcs/accountSettingsUpdateAiPreferences.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsUpdateAiPreferences(firehydrantTypescriptSDK);

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
| `request`                                                                                                                                                                      | [operations.UpdateAiPreferencesRequestBody](../../models/operations/updateaipreferencesrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIEntitiesPreferencesEntity](../../models/components/aientitiespreferencesentity.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## voteOnIncidentSummary

Vote on an AI-generated incident summary

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.accountSettings.voteOnIncidentSummary({
    incidentId: "<id>",
    generatedSummaryId: "<id>",
    requestBody: {
      direction: "down",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsVoteOnIncidentSummary } from "firehydrant-typescript-sdk/funcs/accountSettingsVoteOnIncidentSummary.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsVoteOnIncidentSummary(firehydrantTypescriptSDK, {
    incidentId: "<id>",
    generatedSummaryId: "<id>",
    requestBody: {
      direction: "down",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VoteOnIncidentSummaryRequest](../../models/operations/voteonincidentsummaryrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## getBootstrap

Get initial application configuration and settings

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.accountSettings.getBootstrap();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsGetBootstrap } from "firehydrant-typescript-sdk/funcs/accountSettingsGetBootstrap.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsGetBootstrap(firehydrantTypescriptSDK);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## listEntitlements

Retrieve all entitlements

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings.listEntitlements({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsListEntitlements } from "firehydrant-typescript-sdk/funcs/accountSettingsListEntitlements.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsListEntitlements(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListEntitlementsRequest](../../models/operations/listentitlementsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EntitlementEntityPaginated](../../models/components/entitlemententitypaginated.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## ping

Simple endpoint to verify your API connection is working

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings.ping();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsPing } from "firehydrant-typescript-sdk/funcs/accountSettingsPing.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsPing(firehydrantTypescriptSDK);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PongEntity](../../models/components/pongentity.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## getSavedSearch

Retrieve a specific save search

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings.getSavedSearch({
    resourceType: "impact_analytics",
    savedSearchId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsGetSavedSearch } from "firehydrant-typescript-sdk/funcs/accountSettingsGetSavedSearch.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsGetSavedSearch(firehydrantTypescriptSDK, {
    resourceType: "impact_analytics",
    savedSearchId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetSavedSearchRequest](../../models/operations/getsavedsearchrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SavedSearchEntity](../../models/components/savedsearchentity.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## deleteSavedSearch

Delete a specific saved search

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.accountSettings.deleteSavedSearch({
    resourceType: "scheduled_maintenances",
    savedSearchId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsDeleteSavedSearch } from "firehydrant-typescript-sdk/funcs/accountSettingsDeleteSavedSearch.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsDeleteSavedSearch(firehydrantTypescriptSDK, {
    resourceType: "scheduled_maintenances",
    savedSearchId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSavedSearchRequest](../../models/operations/deletesavedsearchrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## updateSavedSearch

Update a specific saved search

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings.updateSavedSearch({
    resourceType: "ticket_tasks",
    savedSearchId: "<id>",
    patchV1SavedSearchesResourceTypeSavedSearchId: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { accountSettingsUpdateSavedSearch } from "firehydrant-typescript-sdk/funcs/accountSettingsUpdateSavedSearch.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountSettingsUpdateSavedSearch(firehydrantTypescriptSDK, {
    resourceType: "ticket_tasks",
    savedSearchId: "<id>",
    patchV1SavedSearchesResourceTypeSavedSearchId: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateSavedSearchRequest](../../models/operations/updatesavedsearchrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SavedSearchEntity](../../models/components/savedsearchentity.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |