# Scim
(*scim*)

## Overview

### Available Operations

* [listGroups](#listgroups) - List teams via SCIM
* [create](#create) - Create a team via SCIM
* [getGroup](#getgroup) - Get a SCIM group
* [updateGroup](#updategroup) - Update a SCIM group
* [deleteGroup](#deletegroup) - Delete a SCIM group
* [listUsers](#listusers) - List users via SCIM
* [createUser](#createuser) - Create a user via SCIM
* [getUser](#getuser) - Get a SCIM user
* [replaceUser](#replaceuser) - Replace a SCIM user
* [deleteUser](#deleteuser) - Delete a SCIM user
* [updateUser](#updateuser) - Update a SCIM user

## listGroups

SCIM endpoint that lists all Teams (Colloquial for Group in the SCIM protocol)

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.listGroups({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimListGroups } from "firehydrant-typescript-sdk/funcs/scimListGroups.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimListGroups(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.GetScimGroupsRequest](../../models/operations/getscimgroupsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## create

SCIM endpoint to create a new Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.create({
    displayName: "Jed6",
    members: [
      {
        value: "<value>",
      },
      {
        value: "<value>",
      },
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
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimCreate } from "firehydrant-typescript-sdk/funcs/scimCreate.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimCreate(firehydrantTypescriptSDK, {
    displayName: "Jed6",
    members: [
      {
        value: "<value>",
      },
      {
        value: "<value>",
      },
      {
        value: "<value>",
      },
    ],
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
| `request`                                                                                                                                                                      | [components.PostV1ScimV2Groups](../../models/components/postv1scimv2groups.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getGroup

SCIM endpoint that lists a Team (Colloquial for Group in the SCIM protocol)

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.getGroup({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimGetGroup } from "firehydrant-typescript-sdk/funcs/scimGetGroup.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimGetGroup(firehydrantTypescriptSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetScimGroupRequest](../../models/operations/getscimgrouprequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateGroup

SCIM endpoint to update a Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role, any missing members will be removed from the team.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.updateGroup({
    id: "<id>",
    putV1ScimV2GroupsId: {
      displayName: "Ibrahim.Kuhic40",
      members: [
        {
          value: "<value>",
        },
        {
          value: "<value>",
        },
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
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimUpdateGroup } from "firehydrant-typescript-sdk/funcs/scimUpdateGroup.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimUpdateGroup(firehydrantTypescriptSDK, {
    id: "<id>",
    putV1ScimV2GroupsId: {
      displayName: "Ibrahim.Kuhic40",
      members: [
        {
          value: "<value>",
        },
        {
          value: "<value>",
        },
        {
          value: "<value>",
        },
      ],
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
| `request`                                                                                                                                                                      | [operations.UpdateScimGroupRequest](../../models/operations/updatescimgrouprequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteGroup

SCIM endpoint to delete a Team (Colloquial for Group in the SCIM protocol).

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.deleteGroup({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimDeleteGroup } from "firehydrant-typescript-sdk/funcs/scimDeleteGroup.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimDeleteGroup(firehydrantTypescriptSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteScimGroupRequest](../../models/operations/deletescimgrouprequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## listUsers

SCIM endpoint that lists users. This endpoint will display a list of Users currently in the system.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.listUsers({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimListUsers } from "firehydrant-typescript-sdk/funcs/scimListUsers.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimListUsers(firehydrantTypescriptSDK, {});

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
| `request`                                                                                                                                                                      | [operations.GetScimUsersRequest](../../models/operations/getscimusersrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## createUser

SCIM endpoint to create and provision a new User. This endpoint will provision the User, which allows them to accept their account throught their IDP or via the Forgot Password flow.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.createUser({
    userName: "Jimmy12",
    name: {
      familyName: "<value>",
      givenName: "<value>",
    },
    emails: [
      {
        value: "<value>",
        primary: false,
      },
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimCreateUser } from "firehydrant-typescript-sdk/funcs/scimCreateUser.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimCreateUser(firehydrantTypescriptSDK, {
    userName: "Jimmy12",
    name: {
      familyName: "<value>",
      givenName: "<value>",
    },
    emails: [
      {
        value: "<value>",
        primary: false,
      },
    ],
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
| `request`                                                                                                                                                                      | [components.PostV1ScimV2Users](../../models/components/postv1scimv2users.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getUser

SCIM endpoint that lists a User

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.getUser({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimGetUser } from "firehydrant-typescript-sdk/funcs/scimGetUser.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimGetUser(firehydrantTypescriptSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetScimUserRequest](../../models/operations/getscimuserrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## replaceUser

PUT SCIM endpoint to update a User. This endpoint is used to replace a resource's attributes.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.replaceUser({
    id: "<id>",
    putV1ScimV2UsersId: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimReplaceUser } from "firehydrant-typescript-sdk/funcs/scimReplaceUser.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimReplaceUser(firehydrantTypescriptSDK, {
    id: "<id>",
    putV1ScimV2UsersId: {},
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
| `request`                                                                                                                                                                      | [operations.ReplaceScimUserRequest](../../models/operations/replacescimuserrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteUser

SCIM endpoint to delete a User. This endpoint will deactivate a confirmed User record in our system.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.deleteUser({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimDeleteUser } from "firehydrant-typescript-sdk/funcs/scimDeleteUser.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimDeleteUser(firehydrantTypescriptSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteScimUserRequest](../../models/operations/deletescimuserrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateUser

PATCH SCIM endpoint to update a User. This endpoint is used to update a resource's attributes.

### Example Usage

```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  await firehydrantTypescriptSDK.scim.updateUser({
    id: "<id>",
    patchV1ScimV2UsersId: {
      operations: [
        {
          op: "<value>",
          path: "/home/user/dir",
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
import { FirehydrantTypescriptSDKCore } from "firehydrant-typescript-sdk/core.js";
import { scimUpdateUser } from "firehydrant-typescript-sdk/funcs/scimUpdateUser.js";

// Use `FirehydrantTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrantTypescriptSDK = new FirehydrantTypescriptSDKCore({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const res = await scimUpdateUser(firehydrantTypescriptSDK, {
    id: "<id>",
    patchV1ScimV2UsersId: {
      operations: [
        {
          op: "<value>",
          path: "/net",
        },
      ],
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
| `request`                                                                                                                                                                      | [operations.UpdateScimUserRequest](../../models/operations/updatescimuserrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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