# Scim
(*scim*)

## Overview

Operations related to SCIM

### Available Operations

* [getScimGroup](#getscimgroup) - Get a SCIM group
* [updateScimGroup](#updatescimgroup) - Update a SCIM group and assign members
* [deleteScimGroup](#deletescimgroup) - Delete a SCIM group
* [patchScimGroup](#patchscimgroup) - Partially update a SCIM group
* [listScimGroups](#listscimgroups) - List SCIM groups
* [createScimGroup](#createscimgroup) - Create a SCIM group and assign members
* [getScimUser](#getscimuser) - Get a SCIM user
* [updateScimUser](#updatescimuser) - Update a User from SCIM data
* [deleteScimUser](#deletescimuser) - Delete a User matching SCIM data
* [patchScimUser](#patchscimuser) - Update a User from SCIM data
* [listScimUsers](#listscimusers) - List SCIM users
* [createScimUser](#createscimuser) - Create a User from SCIM data

## getScimGroup

SCIM endpoint that lists a Team (Colloquial for Group in the SCIM protocol)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_scim_group" method="get" path="/v1/scim/v2/Groups/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.getScimGroup({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimGetSCIMGroup } from "firehydrant-typescript-sdk/funcs/scimGetSCIMGroup.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimGetSCIMGroup(firehydrant, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimGetSCIMGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScimGroupRequest](../../models/operations/getscimgrouprequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateScimGroup

SCIM endpoint to update a Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role, any missing members will be removed from the team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_scim_group" method="put" path="/v1/scim/v2/Groups/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.updateScimGroup({
    id: "<id>",
    updateScimGroup: {
      displayName: "Dejon_Prosacco5",
      members: [
        {
          value: "<value>",
        },
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimUpdateSCIMGroup } from "firehydrant-typescript-sdk/funcs/scimUpdateSCIMGroup.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimUpdateSCIMGroup(firehydrant, {
    id: "<id>",
    updateScimGroup: {
      displayName: "Dejon_Prosacco5",
      members: [
        {
          value: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimUpdateSCIMGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScimGroupRequest](../../models/operations/updatescimgrouprequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteScimGroup

SCIM endpoint to delete a Team (Colloquial for Group in the SCIM protocol).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_scim_group" method="delete" path="/v1/scim/v2/Groups/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.deleteScimGroup({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimDeleteSCIMGroup } from "firehydrant-typescript-sdk/funcs/scimDeleteSCIMGroup.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimDeleteSCIMGroup(firehydrant, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimDeleteSCIMGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteScimGroupRequest](../../models/operations/deletescimgrouprequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## patchScimGroup

SCIM endpoint to partially update a Team (Colloquial for Group in the SCIM protocol). Supports adding, removing, or replacing members using SCIM PATCH operations.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_scim_group" method="patch" path="/v1/scim/v2/Groups/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.patchScimGroup({
    id: "<id>",
    patchScimGroup: {
      operations: [
        {
          op: "<value>",
          path: "/var/tmp",
        },
      ],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimPatchSCIMGroup } from "firehydrant-typescript-sdk/funcs/scimPatchSCIMGroup.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimPatchSCIMGroup(firehydrant, {
    id: "<id>",
    patchScimGroup: {
      operations: [
        {
          op: "<value>",
          path: "/var/tmp",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimPatchSCIMGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchScimGroupRequest](../../models/operations/patchscimgrouprequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listScimGroups

SCIM endpoint that lists all Teams (Colloquial for Group in the SCIM protocol)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_scim_groups" method="get" path="/v1/scim/v2/Groups" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.listScimGroups({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimListSCIMGroups } from "firehydrant-typescript-sdk/funcs/scimListSCIMGroups.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimListSCIMGroups(firehydrant, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimListSCIMGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListScimGroupsRequest](../../models/operations/listscimgroupsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createScimGroup

SCIM endpoint to create a new Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_scim_group" method="post" path="/v1/scim/v2/Groups" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.createScimGroup({
    displayName: "Odessa.Schulist",
    members: [
      {
        value: "<value>",
      },
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimCreateSCIMGroup } from "firehydrant-typescript-sdk/funcs/scimCreateSCIMGroup.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimCreateSCIMGroup(firehydrant, {
    displayName: "Odessa.Schulist",
    members: [
      {
        value: "<value>",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimCreateSCIMGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateScimGroup](../../models/components/createscimgroup.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getScimUser

SCIM endpoint that lists a User

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_scim_user" method="get" path="/v1/scim/v2/Users/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.getScimUser({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimGetSCIMUser } from "firehydrant-typescript-sdk/funcs/scimGetSCIMUser.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimGetSCIMUser(firehydrant, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimGetSCIMUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScimUserRequest](../../models/operations/getscimuserrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateScimUser

PUT SCIM endpoint to update a User. This endpoint is used to replace a resource's attributes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_scim_user" method="put" path="/v1/scim/v2/Users/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.updateScimUser({
    id: "<id>",
    updateScimUser: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimUpdateSCIMUser } from "firehydrant-typescript-sdk/funcs/scimUpdateSCIMUser.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimUpdateSCIMUser(firehydrant, {
    id: "<id>",
    updateScimUser: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimUpdateSCIMUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScimUserRequest](../../models/operations/updatescimuserrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteScimUser

SCIM endpoint to delete a User. This endpoint will deactivate a confirmed User record in our system.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_scim_user" method="delete" path="/v1/scim/v2/Users/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.deleteScimUser({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimDeleteSCIMUser } from "firehydrant-typescript-sdk/funcs/scimDeleteSCIMUser.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimDeleteSCIMUser(firehydrant, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimDeleteSCIMUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteScimUserRequest](../../models/operations/deletescimuserrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## patchScimUser

PATCH SCIM endpoint to update a User. This endpoint is used to update a resource's attributes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_scim_user" method="patch" path="/v1/scim/v2/Users/{id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.patchScimUser({
    id: "<id>",
    patchScimUser: {
      operations: [],
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimPatchSCIMUser } from "firehydrant-typescript-sdk/funcs/scimPatchSCIMUser.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimPatchSCIMUser(firehydrant, {
    id: "<id>",
    patchScimUser: {
      operations: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimPatchSCIMUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchScimUserRequest](../../models/operations/patchscimuserrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listScimUsers

SCIM endpoint that lists users. This endpoint will display a list of Users currently in the system.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_scim_users" method="get" path="/v1/scim/v2/Users" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.listScimUsers({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimListSCIMUsers } from "firehydrant-typescript-sdk/funcs/scimListSCIMUsers.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimListSCIMUsers(firehydrant, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimListSCIMUsers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListScimUsersRequest](../../models/operations/listscimusersrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createScimUser

SCIM endpoint to create and provision a new User. This endpoint will provision the User, which allows them to accept their account throught their IDP or via the Forgot Password flow.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_scim_user" method="post" path="/v1/scim/v2/Users" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.scim.createScimUser({
    userName: "Vinnie.Crooks27",
    name: {
      familyName: "<value>",
      givenName: "<value>",
    },
    emails: [],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { scimCreateSCIMUser } from "firehydrant-typescript-sdk/funcs/scimCreateSCIMUser.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await scimCreateSCIMUser(firehydrant, {
    userName: "Vinnie.Crooks27",
    name: {
      familyName: "<value>",
      givenName: "<value>",
    },
    emails: [],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("scimCreateSCIMUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateScimUser](../../models/components/createscimuser.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |