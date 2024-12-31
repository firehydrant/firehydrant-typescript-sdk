# IncidentSettings
(*incidentSettings*)

## Overview

### Available Operations

* [listCustomFieldDefinitions](#listcustomfielddefinitions) - List custom field definitions
* [createCustomFieldDefinition](#createcustomfielddefinition) - Create a custom field definition
* [deleteCustomFieldDefinition](#deletecustomfielddefinition) - Delete a custom field definition
* [updateCustomFieldDefinition](#updatecustomfielddefinition) - Update a custom field definition
* [listSelectOptions](#listselectoptions) - List select options for a custom field
* [getFormConfiguration](#getformconfiguration) - Get a form configuration
* [listRoles](#listroles) - List incident roles
* [createIncidentRole](#createincidentrole) - Create an incident role
* [getIncidentRole](#getincidentrole) - Get an incident role
* [deleteRole](#deleterole) - Archive an incident role
* [updateIncidentRole](#updateincidentrole) - Update an incident role
* [listIncidentTags](#listincidenttags) - List incident tags
* [validateIncidentTags](#validateincidenttags) - Validate incident tags
* [listIncidentTypes](#listincidenttypes) - List incident types
* [createIncidentType](#createincidenttype) - Create an incident type
* [getIncidentType](#getincidenttype) - Get an incident type
* [archiveIncidentType](#archiveincidenttype) - Archive an incident type
* [updateType](#updatetype) - Update an incident type
* [createMilestone](#createmilestone) - Create a milestone for an incident lifecycle
* [deleteLifecycleMilestone](#deletelifecyclemilestone) - Delete a lifecycle milestone
* [updateLifecycleMilestone](#updatelifecyclemilestone) - Update a lifecycle milestone
* [listLifecyclePhases](#listlifecyclephases) - List lifecycle phases and milestones
* [listPriorities](#listpriorities) - List priorities
* [createPriority](#createpriority) - Create a priority
* [getPriority](#getpriority) - Get a priority
* [deletePriority](#deletepriority) - Delete a priority
* [updatePriority](#updatepriority) - Update a priority
* [listSeverities](#listseverities) - List severities
* [createSeverity](#createseverity) - Create a severity
* [getSeverity](#getseverity) - Get a severity
* [deleteSeverity](#deleteseverity) - Delete a severity
* [updateSeverity](#updateseverity) - Update a severity
* [getSeverityMatrix](#getseveritymatrix) - Get severity matrix
* [updateSeverityMatrix](#updateseveritymatrix) - Update severity matrix
* [listSeverityMatrixConditions](#listseveritymatrixconditions) - List severity matrix conditions
* [createSeverityMatrixCondition](#createseveritymatrixcondition) - Create a severity matrix condition
* [getSeverityMatrixCondition](#getseveritymatrixcondition) - Get a severity matrix condition
* [deleteSeverityMatrixCondition](#deleteseveritymatrixcondition) - Delete a severity matrix condition
* [updateCondition](#updatecondition) - Update a severity matrix condition
* [listSeverityMatrixImpacts](#listseveritymatriximpacts) - List severity matrix impacts
* [createImpact](#createimpact) - Create a severity matrix impact
* [deleteSeverityMatrixImpact](#deleteseveritymatriximpact) - Delete an impact from the severity matrix
* [updateImpact](#updateimpact) - Update an impact in the severity matrix
* [listTicketingPriorities](#listticketingpriorities) - List ticketing priorities
* [createTicketingPriority](#createticketingpriority) - Create a ticketing priority

## listCustomFieldDefinitions

List all custom field definitions

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listCustomFieldDefinitions();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListCustomFieldDefinitions } from "firehydrant-typescript-sdk/funcs/incidentSettingsListCustomFieldDefinitions.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListCustomFieldDefinitions(firehydrantTypescriptSDK);

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

**Promise\<[components.OrganizationsCustomFieldDefinitionEntity](../../models/components/organizationscustomfielddefinitionentity.md)\>**

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

## createCustomFieldDefinition

Create a new custom field definition

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createCustomFieldDefinition({
    displayName: "Juvenal_Herman70",
    fieldType: "<value>",
    required: true,
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
import { incidentSettingsCreateCustomFieldDefinition } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateCustomFieldDefinition.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateCustomFieldDefinition(firehydrantTypescriptSDK, {
    displayName: "Juvenal_Herman70",
    fieldType: "<value>",
    required: true,
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
| `request`                                                                                                                                                                      | [components.PostV1CustomFieldsDefinitions](../../models/components/postv1customfieldsdefinitions.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrganizationsCustomFieldDefinitionEntity](../../models/components/organizationscustomfielddefinitionentity.md)\>**

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

## deleteCustomFieldDefinition

Delete a custom field definition

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.deleteCustomFieldDefinition({
    fieldId: "<id>",
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
import { incidentSettingsDeleteCustomFieldDefinition } from "firehydrant-typescript-sdk/funcs/incidentSettingsDeleteCustomFieldDefinition.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsDeleteCustomFieldDefinition(firehydrantTypescriptSDK, {
    fieldId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteCustomFieldDefinitionRequest](../../models/operations/deletecustomfielddefinitionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrganizationsCustomFieldDefinitionEntity](../../models/components/organizationscustomfielddefinitionentity.md)\>**

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

## updateCustomFieldDefinition

Update a single custom field definition

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateCustomFieldDefinition({
    fieldId: "<id>",
    patchV1CustomFieldsDefinitionsFieldId: {},
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
import { incidentSettingsUpdateCustomFieldDefinition } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateCustomFieldDefinition.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateCustomFieldDefinition(firehydrantTypescriptSDK, {
    fieldId: "<id>",
    patchV1CustomFieldsDefinitionsFieldId: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateCustomFieldDefinitionRequest](../../models/operations/updatecustomfielddefinitionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrganizationsCustomFieldDefinitionEntity](../../models/components/organizationscustomfielddefinitionentity.md)\>**

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

## listSelectOptions

Get the permissible values for the a currently active custom select or multi-select field.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listSelectOptions({
    fieldId: "<id>",
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
import { incidentSettingsListSelectOptions } from "firehydrant-typescript-sdk/funcs/incidentSettingsListSelectOptions.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListSelectOptions(firehydrantTypescriptSDK, {
    fieldId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetCustomFieldSelectOptionsRequest](../../models/operations/getcustomfieldselectoptionsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrganizationsCustomFieldDefinitionEntity](../../models/components/organizationscustomfielddefinitionentity.md)\>**

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

## getFormConfiguration

Get a form configuration

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.incidentSettings.getFormConfiguration({
    slug: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsGetFormConfiguration } from "firehydrant-typescript-sdk/funcs/incidentSettingsGetFormConfiguration.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsGetFormConfiguration(firehydrantTypescriptSDK, {
    slug: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetFormConfigurationRequest](../../models/operations/getformconfigurationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## listRoles

List all of the incident roles in the organization

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listRoles({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListRoles } from "firehydrant-typescript-sdk/funcs/incidentSettingsListRoles.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListRoles(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListIncidentRolesRequest](../../models/operations/listincidentrolesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentRoleEntityPaginated](../../models/components/incidentroleentitypaginated.md)\>**

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

## createIncidentRole

Create a new incident role

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createIncidentRole({
    name: "<value>",
    summary: "<value>",
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
import { incidentSettingsCreateIncidentRole } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateIncidentRole.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateIncidentRole(firehydrantTypescriptSDK, {
    name: "<value>",
    summary: "<value>",
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
| `request`                                                                                                                                                                      | [components.PostV1IncidentRoles](../../models/components/postv1incidentroles.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentRoleEntity](../../models/components/incidentroleentity.md)\>**

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

## getIncidentRole

Retrieve a single incident role from its ID

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.getIncidentRole({
    incidentRoleId: "<id>",
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
import { incidentSettingsGetIncidentRole } from "firehydrant-typescript-sdk/funcs/incidentSettingsGetIncidentRole.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsGetIncidentRole(firehydrantTypescriptSDK, {
    incidentRoleId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetIncidentRoleRequest](../../models/operations/getincidentrolerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentRoleEntity](../../models/components/incidentroleentity.md)\>**

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

## deleteRole

Archives an incident role which will hide it from lists and metrics

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.deleteRole({
    incidentRoleId: "<id>",
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
import { incidentSettingsDeleteRole } from "firehydrant-typescript-sdk/funcs/incidentSettingsDeleteRole.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsDeleteRole(firehydrantTypescriptSDK, {
    incidentRoleId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteIncidentRoleRequest](../../models/operations/deleteincidentrolerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentRoleEntity](../../models/components/incidentroleentity.md)\>**

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

## updateIncidentRole

Update a single incident role from its ID

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateIncidentRole({
    incidentRoleId: "<id>",
    patchV1IncidentRolesIncidentRoleId: {},
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
import { incidentSettingsUpdateIncidentRole } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateIncidentRole.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateIncidentRole(firehydrantTypescriptSDK, {
    incidentRoleId: "<id>",
    patchV1IncidentRolesIncidentRoleId: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateIncidentRoleRequest](../../models/operations/updateincidentrolerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentRoleEntity](../../models/components/incidentroleentity.md)\>**

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

## listIncidentTags

List all of the incident tags in the organization

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listIncidentTags({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListIncidentTags } from "firehydrant-typescript-sdk/funcs/incidentSettingsListIncidentTags.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListIncidentTags(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListIncidentTagsRequest](../../models/operations/listincidenttagsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TagEntityPaginated](../../models/components/tagentitypaginated.md)\>**

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

## validateIncidentTags

Validate the format of a list of tags

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.validateIncidentTags([
    "<value>",
    "<value>",
    "<value>",
  ]);

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsValidateIncidentTags } from "firehydrant-typescript-sdk/funcs/incidentSettingsValidateIncidentTags.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsValidateIncidentTags(firehydrantTypescriptSDK, [
    "<value>",
    "<value>",
    "<value>",
  ]);

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
| `request`                                                                                                                                                                      | [string[]](../../models/.md)                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TagEntity](../../models/components/tagentity.md)\>**

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

## listIncidentTypes

List all of the incident types in the organization

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listIncidentTypes({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListIncidentTypes } from "firehydrant-typescript-sdk/funcs/incidentSettingsListIncidentTypes.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListIncidentTypes(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListIncidentTypesRequest](../../models/operations/listincidenttypesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentTypeEntityPaginated](../../models/components/incidenttypeentitypaginated.md)\>**

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

## createIncidentType

Create a new incident type

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createIncidentType({
    name: "<value>",
    template: {},
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
import { incidentSettingsCreateIncidentType } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateIncidentType.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateIncidentType(firehydrantTypescriptSDK, {
    name: "<value>",
    template: {},
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
| `request`                                                                                                                                                                      | [components.PostV1IncidentTypes](../../models/components/postv1incidenttypes.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentTypeEntity](../../models/components/incidenttypeentity.md)\>**

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

## getIncidentType

Retrieve a single incident type from its ID

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.getIncidentType({
    id: "<id>",
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
import { incidentSettingsGetIncidentType } from "firehydrant-typescript-sdk/funcs/incidentSettingsGetIncidentType.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsGetIncidentType(firehydrantTypescriptSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetIncidentTypeRequest](../../models/operations/getincidenttyperequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentTypeEntity](../../models/components/incidenttypeentity.md)\>**

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

## archiveIncidentType

Archives an incident type which will hide it from lists and metrics

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.archiveIncidentType({
    id: "<id>",
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
import { incidentSettingsArchiveIncidentType } from "firehydrant-typescript-sdk/funcs/incidentSettingsArchiveIncidentType.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsArchiveIncidentType(firehydrantTypescriptSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ArchiveIncidentTypeRequest](../../models/operations/archiveincidenttyperequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentTypeEntity](../../models/components/incidenttypeentity.md)\>**

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

## updateType

Update a single incident type from its ID

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateType({
    id: "<id>",
    patchV1IncidentTypesId: {
      name: "<value>",
      template: {},
    },
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
import { incidentSettingsUpdateType } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateType.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateType(firehydrantTypescriptSDK, {
    id: "<id>",
    patchV1IncidentTypesId: {
      name: "<value>",
      template: {},
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateIncidentTypeRequest](../../models/operations/updateincidenttyperequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentTypeEntity](../../models/components/incidenttypeentity.md)\>**

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

## createMilestone

Create a new milestone

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createMilestone({
    name: "<value>",
    description: "consequently scoff caring inhibit entice wherever",
    phaseId: "<id>",
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
import { incidentSettingsCreateMilestone } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateMilestone.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateMilestone(firehydrantTypescriptSDK, {
    name: "<value>",
    description: "consequently scoff caring inhibit entice wherever",
    phaseId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.CreateLifecycleMilestoneRequestBody](../../models/operations/createlifecyclemilestonerequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LifecyclesPhaseEntityList](../../models/components/lifecyclesphaseentitylist.md)\>**

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

## deleteLifecycleMilestone

Delete a milestone

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.deleteLifecycleMilestone({
    milestoneId: "<id>",
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
import { incidentSettingsDeleteLifecycleMilestone } from "firehydrant-typescript-sdk/funcs/incidentSettingsDeleteLifecycleMilestone.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsDeleteLifecycleMilestone(firehydrantTypescriptSDK, {
    milestoneId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteLifecycleMilestoneRequest](../../models/operations/deletelifecyclemilestonerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LifecyclesPhaseEntity](../../models/components/lifecyclesphaseentity.md)\>**

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

## updateLifecycleMilestone

Update a milestone

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateLifecycleMilestone({
    milestoneId: "<id>",
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
import { incidentSettingsUpdateLifecycleMilestone } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateLifecycleMilestone.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateLifecycleMilestone(firehydrantTypescriptSDK, {
    milestoneId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.UpdateLifecycleMilestoneRequest](../../models/operations/updatelifecyclemilestonerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LifecyclesPhaseEntity](../../models/components/lifecyclesphaseentity.md)\>**

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

## listLifecyclePhases

List all of the lifecycle phases and milestones in the organization

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listLifecyclePhases();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListLifecyclePhases } from "firehydrant-typescript-sdk/funcs/incidentSettingsListLifecyclePhases.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListLifecyclePhases(firehydrantTypescriptSDK);

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

**Promise\<[components.LifecyclesPhaseEntityList](../../models/components/lifecyclesphaseentitylist.md)\>**

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

## listPriorities

Lists priorities

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listPriorities({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListPriorities } from "firehydrant-typescript-sdk/funcs/incidentSettingsListPriorities.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListPriorities(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListPrioritiesRequest](../../models/operations/listprioritiesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PriorityEntity](../../models/components/priorityentity.md)\>**

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

## createPriority

Create a new priority

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createPriority({
    slug: "<value>",
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
import { incidentSettingsCreatePriority } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreatePriority.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreatePriority(firehydrantTypescriptSDK, {
    slug: "<value>",
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
| `request`                                                                                                                                                                      | [components.PostV1Priorities](../../models/components/postv1priorities.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PriorityEntity](../../models/components/priorityentity.md)\>**

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

## getPriority

Retrieve a specific priority

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.getPriority({
    prioritySlug: "<value>",
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
import { incidentSettingsGetPriority } from "firehydrant-typescript-sdk/funcs/incidentSettingsGetPriority.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsGetPriority(firehydrantTypescriptSDK, {
    prioritySlug: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetPriorityRequest](../../models/operations/getpriorityrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PriorityEntity](../../models/components/priorityentity.md)\>**

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

## deletePriority

Delete a specific priority

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.deletePriority({
    prioritySlug: "<value>",
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
import { incidentSettingsDeletePriority } from "firehydrant-typescript-sdk/funcs/incidentSettingsDeletePriority.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsDeletePriority(firehydrantTypescriptSDK, {
    prioritySlug: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeletePriorityRequest](../../models/operations/deletepriorityrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PriorityEntity](../../models/components/priorityentity.md)\>**

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

## updatePriority

Update a specific priority

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updatePriority({
    prioritySlug: "<value>",
    patchV1PrioritiesPrioritySlug: {},
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
import { incidentSettingsUpdatePriority } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdatePriority.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdatePriority(firehydrantTypescriptSDK, {
    prioritySlug: "<value>",
    patchV1PrioritiesPrioritySlug: {},
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
| `request`                                                                                                                                                                      | [operations.UpdatePriorityRequest](../../models/operations/updatepriorityrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PriorityEntity](../../models/components/priorityentity.md)\>**

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

## listSeverities

Lists severities

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listSeverities({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListSeverities } from "firehydrant-typescript-sdk/funcs/incidentSettingsListSeverities.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListSeverities(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListSeveritiesRequest](../../models/operations/listseveritiesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityEntityPaginated](../../models/components/severityentitypaginated.md)\>**

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

## createSeverity

Create a new severity

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createSeverity({
    slug: "<value>",
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
import { incidentSettingsCreateSeverity } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateSeverity.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateSeverity(firehydrantTypescriptSDK, {
    slug: "<value>",
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
| `request`                                                                                                                                                                      | [components.PostV1Severities](../../models/components/postv1severities.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityEntity](../../models/components/severityentity.md)\>**

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

## getSeverity

Retrieve a specific severity

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.getSeverity({
    severitySlug: "<value>",
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
import { incidentSettingsGetSeverity } from "firehydrant-typescript-sdk/funcs/incidentSettingsGetSeverity.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsGetSeverity(firehydrantTypescriptSDK, {
    severitySlug: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetSeverityRequest](../../models/operations/getseverityrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityEntity](../../models/components/severityentity.md)\>**

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

## deleteSeverity

Delete a specific severity

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.deleteSeverity({
    severitySlug: "<value>",
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
import { incidentSettingsDeleteSeverity } from "firehydrant-typescript-sdk/funcs/incidentSettingsDeleteSeverity.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsDeleteSeverity(firehydrantTypescriptSDK, {
    severitySlug: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteSeverityRequest](../../models/operations/deleteseverityrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityEntity](../../models/components/severityentity.md)\>**

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

## updateSeverity

Update a specific severity

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateSeverity({
    severitySlug: "<value>",
    patchV1SeveritiesSeveritySlug: {},
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
import { incidentSettingsUpdateSeverity } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateSeverity.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateSeverity(firehydrantTypescriptSDK, {
    severitySlug: "<value>",
    patchV1SeveritiesSeveritySlug: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateSeverityRequest](../../models/operations/updateseverityrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityEntity](../../models/components/severityentity.md)\>**

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

## getSeverityMatrix

Retrieve the Severity matrix for your organization and its components and configured severities.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.getSeverityMatrix();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsGetSeverityMatrix } from "firehydrant-typescript-sdk/funcs/incidentSettingsGetSeverityMatrix.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsGetSeverityMatrix(firehydrantTypescriptSDK);

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

**Promise\<[components.SeverityMatrixSeverityMatrixEntity](../../models/components/severitymatrixseveritymatrixentity.md)\>**

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

## updateSeverityMatrix

Update available severities and impacts in your organization's severity matrix.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateSeverityMatrix({
    data: [
      {
        severity: "<value>",
        impactId: "<id>",
        conditionId: "<id>",
      },
    ],
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
import { incidentSettingsUpdateSeverityMatrix } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateSeverityMatrix.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateSeverityMatrix(firehydrantTypescriptSDK, {
    data: [
      {
        severity: "<value>",
        impactId: "<id>",
        conditionId: "<id>",
      },
    ],
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
| `request`                                                                                                                                                                      | [components.PatchV1SeverityMatrix](../../models/components/patchv1severitymatrix.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixSeverityMatrixEntity](../../models/components/severitymatrixseveritymatrixentity.md)\>**

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

## listSeverityMatrixConditions

Lists conditions

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listSeverityMatrixConditions({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListSeverityMatrixConditions } from "firehydrant-typescript-sdk/funcs/incidentSettingsListSeverityMatrixConditions.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListSeverityMatrixConditions(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListSeverityMatrixConditionsRequest](../../models/operations/listseveritymatrixconditionsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixConditionEntity](../../models/components/severitymatrixconditionentity.md)\>**

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

## createSeverityMatrixCondition

Create a new condition

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createSeverityMatrixCondition({
    name: "<value>",
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
import { incidentSettingsCreateSeverityMatrixCondition } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateSeverityMatrixCondition.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateSeverityMatrixCondition(firehydrantTypescriptSDK, {
    name: "<value>",
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
| `request`                                                                                                                                                                      | [components.PostV1SeverityMatrixConditions](../../models/components/postv1severitymatrixconditions.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixConditionEntity](../../models/components/severitymatrixconditionentity.md)\>**

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

## getSeverityMatrixCondition

Get a severity matrix condition

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.incidentSettings.getSeverityMatrixCondition({
    conditionId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsGetSeverityMatrixCondition } from "firehydrant-typescript-sdk/funcs/incidentSettingsGetSeverityMatrixCondition.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsGetSeverityMatrixCondition(firehydrantTypescriptSDK, {
    conditionId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetSeverityMatrixConditionRequest](../../models/operations/getseveritymatrixconditionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteSeverityMatrixCondition

Delete a specific condition

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.deleteSeverityMatrixCondition({
    conditionId: "<id>",
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
import { incidentSettingsDeleteSeverityMatrixCondition } from "firehydrant-typescript-sdk/funcs/incidentSettingsDeleteSeverityMatrixCondition.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsDeleteSeverityMatrixCondition(firehydrantTypescriptSDK, {
    conditionId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteSeverityMatrixConditionRequest](../../models/operations/deleteseveritymatrixconditionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixConditionEntity](../../models/components/severitymatrixconditionentity.md)\>**

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

## updateCondition

Update a specific condition

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateCondition({
    conditionId: "<id>",
    patchV1SeverityMatrixConditionsConditionId: {},
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
import { incidentSettingsUpdateCondition } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateCondition.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateCondition(firehydrantTypescriptSDK, {
    conditionId: "<id>",
    patchV1SeverityMatrixConditionsConditionId: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateSeverityMatrixConditionRequest](../../models/operations/updateseveritymatrixconditionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixConditionEntity](../../models/components/severitymatrixconditionentity.md)\>**

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

## listSeverityMatrixImpacts

Lists impacts

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listSeverityMatrixImpacts({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListSeverityMatrixImpacts } from "firehydrant-typescript-sdk/funcs/incidentSettingsListSeverityMatrixImpacts.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListSeverityMatrixImpacts(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.ListSeverityMatrixImpactsRequest](../../models/operations/listseveritymatriximpactsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixImpactEntity](../../models/components/severitymatriximpactentity.md)\>**

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

## createImpact

Create a new impact

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createImpact({
    affectsType: "<value>",
    affectsId: "<id>",
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
import { incidentSettingsCreateImpact } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateImpact.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateImpact(firehydrantTypescriptSDK, {
    affectsType: "<value>",
    affectsId: "<id>",
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
| `request`                                                                                                                                                                      | [components.PostV1SeverityMatrixImpacts](../../models/components/postv1severitymatriximpacts.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixImpactEntity](../../models/components/severitymatriximpactentity.md)\>**

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

## deleteSeverityMatrixImpact

Delete a specific impact

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.deleteSeverityMatrixImpact({
    impactId: "<id>",
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
import { incidentSettingsDeleteSeverityMatrixImpact } from "firehydrant-typescript-sdk/funcs/incidentSettingsDeleteSeverityMatrixImpact.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsDeleteSeverityMatrixImpact(firehydrantTypescriptSDK, {
    impactId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteSeverityMatrixImpactRequest](../../models/operations/deleteseveritymatriximpactrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixImpactEntity](../../models/components/severitymatriximpactentity.md)\>**

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

## updateImpact

Update a specific impact

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.updateImpact({
    impactId: "<id>",
    patchV1SeverityMatrixImpactsImpactId: {},
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
import { incidentSettingsUpdateImpact } from "firehydrant-typescript-sdk/funcs/incidentSettingsUpdateImpact.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsUpdateImpact(firehydrantTypescriptSDK, {
    impactId: "<id>",
    patchV1SeverityMatrixImpactsImpactId: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateSeverityMatrixImpactRequest](../../models/operations/updateseveritymatriximpactrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SeverityMatrixImpactEntity](../../models/components/severitymatriximpactentity.md)\>**

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

## listTicketingPriorities

List all ticketing priorities available to the organization

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.listTicketingPriorities();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { incidentSettingsListTicketingPriorities } from "firehydrant-typescript-sdk/funcs/incidentSettingsListTicketingPriorities.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsListTicketingPriorities(firehydrantTypescriptSDK);

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

**Promise\<[components.TicketingPriorityEntity](../../models/components/ticketingpriorityentity.md)\>**

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

## createTicketingPriority

Create a single ticketing priority

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.incidentSettings.createTicketingPriority({
    name: "<value>",
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
import { incidentSettingsCreateTicketingPriority } from "firehydrant-typescript-sdk/funcs/incidentSettingsCreateTicketingPriority.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentSettingsCreateTicketingPriority(firehydrantTypescriptSDK, {
    name: "<value>",
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
| `request`                                                                                                                                                                      | [components.PostV1TicketingPriorities](../../models/components/postv1ticketingpriorities.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TicketingPriorityEntity](../../models/components/ticketingpriorityentity.md)\>**

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