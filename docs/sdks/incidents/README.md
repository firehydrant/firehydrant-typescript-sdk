# Incidents
(*incidents*)

## Overview

Operations related to Incidents

### Available Operations

* [listIncidents](#listincidents) - List incidents
* [createIncident](#createincident) - Create an incident
* [getIncidentChannel](#getincidentchannel) - Get chat channel information for an incident
* [closeIncident](#closeincident) - Close an incident
* [resolveIncident](#resolveincident) - Resolve an incident
* [getIncident](#getincident) - Get an incident
* [deleteIncident](#deleteincident) - Archive an incident
* [updateIncident](#updateincident) - Update an incident
* [unarchiveIncident](#unarchiveincident) - Unarchive an incident
* [bulkUpdateIncidentMilestones](#bulkupdateincidentmilestones) - Update milestone times
* [listIncidentMilestones](#listincidentmilestones) - List incident milestones
* [listIncidentChangeEvents](#listincidentchangeevents) - List related changes on an incident
* [createIncidentChangeEvent](#createincidentchangeevent) - Add a related change to an incident
* [updateIncidentChangeEvent](#updateincidentchangeevent) - Update a change attached to an incident
* [listIncidentStatusPages](#listincidentstatuspages) - List status pages for an incident
* [createIncidentStatusPage](#createincidentstatuspage) - Add a status page to an incident
* [listIncidentLinks](#listincidentlinks) - List links on an incident
* [createIncidentLink](#createincidentlink) - Add a link to an incident
* [updateIncidentLink](#updateincidentlink) - Update the external incident link
* [deleteIncidentLink](#deleteincidentlink) - Remove a link from an incident
* [updateTranscriptAttribution](#updatetranscriptattribution) - Update the attribution of a transcript
* [listTranscriptEntries](#listtranscriptentries) - Lists all of the messages in the incident's transcript
* [deleteTranscriptEntry](#deletetranscriptentry) - Delete a transcript from an incident
* [listIncidentConferenceBridges](#listincidentconferencebridges) - Retrieve all conference bridges for an incident
* [getConferenceBridgeTranslation](#getconferencebridgetranslation) - Retrieve the translations for a specific conference bridge
* [listSimilarIncidents](#listsimilarincidents) - List similar incidents
* [listIncidentAttachments](#listincidentattachments) - List attachments for an incident
* [createIncidentAttachment](#createincidentattachment) - Add an attachment to the incident timeline
* [listIncidentEvents](#listincidentevents) - List events for an incident
* [getIncidentEvent](#getincidentevent) - Get an incident event
* [deleteIncidentEvent](#deleteincidentevent) - Delete an incident event
* [updateIncidentEvent](#updateincidentevent) - Update an incident event
* [updateIncidentImpactPut](#updateincidentimpactput) - Update impacts for an incident
* [updateIncidentImpactPatch](#updateincidentimpactpatch) - Update impacts for an incident
* [listIncidentImpacts](#listincidentimpacts) - List impacted infrastructure for an incident
* [createIncidentImpact](#createincidentimpact) - Add impacted infrastructure to an incident
* [deleteIncidentImpact](#deleteincidentimpact) - Remove impacted infrastructure from an incident
* [createIncidentNote](#createincidentnote) - Add a note to an incident
* [updateIncidentNote](#updateincidentnote) - Update a note
* [createIncidentChatMessage](#createincidentchatmessage) - Add a chat message to an incident
* [deleteIncidentChatMessage](#deleteincidentchatmessage) - Delete a chat message from an incident
* [updateIncidentChatMessage](#updateincidentchatmessage) - Update a chat message on an incident
* [listIncidentRoleAssignments](#listincidentroleassignments) - List incident assignees
* [createIncidentRoleAssignment](#createincidentroleassignment) - Assign a user to an incident
* [deleteIncidentRoleAssignment](#deleteincidentroleassignment) - Unassign a user from an incident
* [createIncidentTeamAssignment](#createincidentteamassignment) - Assign a team to an incident
* [deleteIncidentTeamAssignment](#deleteincidentteamassignment) - Unassign a team from an incident
* [getIncidentUser](#getincidentuser) - Get the current user's incident role
* [getIncidentRelationships](#getincidentrelationships) - List incident relationships
* [listScheduledMaintenances](#listscheduledmaintenances) - List scheduled maintenance events
* [createScheduledMaintenance](#createscheduledmaintenance) - Create a scheduled maintenance event
* [getScheduledMaintenance](#getscheduledmaintenance) - Get a scheduled maintenance event
* [deleteScheduledMaintenance](#deletescheduledmaintenance) - Delete a scheduled maintenance event
* [updateScheduledMaintenance](#updatescheduledmaintenance) - Update a scheduled maintenance event
* [getAiIncidentSummaryVoteStatus](#getaiincidentsummaryvotestatus) - Get the current user's vote status for an AI-generated incident summary
* [voteAiIncidentSummary](#voteaiincidentsummary) - Vote on an AI-generated incident summary

## listIncidents

List all of the incidents in the organization

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidents({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidents } from "firehydrant-typescript-sdk/funcs/incidentsListIncidents.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidents(firehydrant, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentsRequest](../../models/operations/listincidentsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntityPaginated](../../models/components/incidententitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncident

Create a new incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncident({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncident } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncident.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncident(firehydrant, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncident failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateIncident](../../models/components/createincident.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getIncidentChannel

Gives chat channel information for the specified incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.getIncidentChannel({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetIncidentChannel } from "firehydrant-typescript-sdk/funcs/incidentsGetIncidentChannel.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetIncidentChannel(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetIncidentChannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIncidentChannelRequest](../../models/operations/getincidentchannelrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsChannelEntity](../../models/components/incidentschannelentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## closeIncident

Closes an incident and optionally close all children

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.closeIncident({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCloseIncident } from "firehydrant-typescript-sdk/funcs/incidentsCloseIncident.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCloseIncident(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCloseIncident failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CloseIncidentRequest](../../models/operations/closeincidentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## resolveIncident

Resolves a currently active incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.resolveIncident({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsResolveIncident } from "firehydrant-typescript-sdk/funcs/incidentsResolveIncident.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsResolveIncident(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsResolveIncident failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ResolveIncidentRequest](../../models/operations/resolveincidentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getIncident

Retrieve a single incident from its ID

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.getIncident({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetIncident } from "firehydrant-typescript-sdk/funcs/incidentsGetIncident.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetIncident(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetIncident failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIncidentRequest](../../models/operations/getincidentrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteIncident

Archives an incident which will hide it from lists and metrics

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.deleteIncident({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteIncident } from "firehydrant-typescript-sdk/funcs/incidentsDeleteIncident.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteIncident(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsDeleteIncident failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIncidentRequest](../../models/operations/deleteincidentrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIncident

Updates an incident with provided parameters

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateIncident({
    incidentId: "<id>",
    updateIncident: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncident } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncident.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncident(firehydrant, {
    incidentId: "<id>",
    updateIncident: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateIncident failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentRequest](../../models/operations/updateincidentrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## unarchiveIncident

Unarchive an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.unarchiveIncident({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUnarchiveIncident } from "firehydrant-typescript-sdk/funcs/incidentsUnarchiveIncident.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUnarchiveIncident(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUnarchiveIncident failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnarchiveIncidentRequest](../../models/operations/unarchiveincidentrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## bulkUpdateIncidentMilestones

Update milestone times in bulk for a given incident. All milestone
times for an incident must occur in chronological order
corresponding to the configured order of milestones. If the result
of this request would cause any milestone(s) to appear out of place,
a 422 response will instead be returned. This includes milestones
not explicitly submitted or updated in this request.


### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.bulkUpdateIncidentMilestones({
    incidentId: "<id>",
    bulkUpdateIncidentMilestones: {
      milestones: [
        {
          type: "<value>",
          occurredAt: new Date("2025-04-19T10:45:27.739Z"),
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsBulkUpdateIncidentMilestones } from "firehydrant-typescript-sdk/funcs/incidentsBulkUpdateIncidentMilestones.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsBulkUpdateIncidentMilestones(firehydrant, {
    incidentId: "<id>",
    bulkUpdateIncidentMilestones: {
      milestones: [
        {
          type: "<value>",
          occurredAt: new Date("2025-04-19T10:45:27.739Z"),
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsBulkUpdateIncidentMilestones failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BulkUpdateIncidentMilestonesRequest](../../models/operations/bulkupdateincidentmilestonesrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsMilestoneEntityPaginated](../../models/components/incidentsmilestoneentitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentMilestones

List times and durations for each milestone on an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentMilestones({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentMilestones } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentMilestones.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentMilestones(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentMilestones failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentMilestonesRequest](../../models/operations/listincidentmilestonesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsMilestoneEntityPaginated](../../models/components/incidentsmilestoneentitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentChangeEvents

List related changes that have been attached to an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentChangeEvents({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentChangeEvents } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentChangeEvents.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentChangeEvents(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentChangeEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentChangeEventsRequest](../../models/operations/listincidentchangeeventsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRelatedChangeEventEntityPaginated](../../models/components/incidentsrelatedchangeevententitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentChangeEvent

Add a related change to an incident. Changes added to an incident can be causes, fixes, or suspects. To remove a change from an incident, the type field should be set to dismissed.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentChangeEvent({
    incidentId: "<id>",
    createIncidentChangeEvent: {
      changeEventId: "<id>",
      type: "suspect",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentChangeEvent } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentChangeEvent.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentChangeEvent(firehydrant, {
    incidentId: "<id>",
    createIncidentChangeEvent: {
      changeEventId: "<id>",
      type: "suspect",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentChangeEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentChangeEventRequest](../../models/operations/createincidentchangeeventrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRelatedChangeEventEntity](../../models/components/incidentsrelatedchangeevententity.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorEntity | 400, 409           | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## updateIncidentChangeEvent

Update a change attached to an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateIncidentChangeEvent({
    relatedChangeEventId: "<id>",
    incidentId: "<id>",
    updateIncidentChangeEvent: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncidentChangeEvent } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncidentChangeEvent.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncidentChangeEvent(firehydrant, {
    relatedChangeEventId: "<id>",
    incidentId: "<id>",
    updateIncidentChangeEvent: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateIncidentChangeEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentChangeEventRequest](../../models/operations/updateincidentchangeeventrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRelatedChangeEventEntity](../../models/components/incidentsrelatedchangeevententity.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorEntity | 400, 409           | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## listIncidentStatusPages

List status pages that are attached to an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentStatusPages({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentStatusPages } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentStatusPages.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentStatusPages(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentStatusPages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentStatusPagesRequest](../../models/operations/listincidentstatuspagesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsStatusPageEntityPaginated](../../models/components/incidentsstatuspageentitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentStatusPage

Add a status page to an incident.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentStatusPage({
    incidentId: "<id>",
    createIncidentStatusPage: {
      integrationSlug: "<value>",
      integrationId: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentStatusPage } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentStatusPage.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentStatusPage(firehydrant, {
    incidentId: "<id>",
    createIncidentStatusPage: {
      integrationSlug: "<value>",
      integrationId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentStatusPage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentStatusPageRequest](../../models/operations/createincidentstatuspagerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsStatusPageEntity](../../models/components/incidentsstatuspageentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentLinks

List all the editable, external incident links attached to an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentLinks({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentLinks } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentLinks.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentLinks(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentLinks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentLinksRequest](../../models/operations/listincidentlinksrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AttachmentsLinkEntityPaginated](../../models/components/attachmentslinkentitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentLink

Allows adding adhoc links to an incident as an attachment

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentLink({
    incidentId: "<id>",
    createIncidentLink: {
      href: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentLink } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentLink.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentLink(firehydrant, {
    incidentId: "<id>",
    createIncidentLink: {
      href: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentLinkRequest](../../models/operations/createincidentlinkrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AttachmentsLinkEntity](../../models/components/attachmentslinkentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIncidentLink

Update the external incident link attributes

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.updateIncidentLink({
    linkId: "<id>",
    incidentId: "<id>",
    updateIncidentLink: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncidentLink } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncidentLink.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncidentLink(firehydrant, {
    linkId: "<id>",
    incidentId: "<id>",
    updateIncidentLink: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsUpdateIncidentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentLinkRequest](../../models/operations/updateincidentlinkrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteIncidentLink

Remove a link from an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.deleteIncidentLink({
    linkId: "<id>",
    incidentId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteIncidentLink } from "firehydrant-typescript-sdk/funcs/incidentsDeleteIncidentLink.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteIncidentLink(firehydrant, {
    linkId: "<id>",
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsDeleteIncidentLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIncidentLinkRequest](../../models/operations/deleteincidentlinkrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateTranscriptAttribution

Update the attribution of a transcript

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.updateTranscriptAttribution({
    incidentId: "<id>",
    requestBody: {
      toUserId: "<id>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateTranscriptAttribution } from "firehydrant-typescript-sdk/funcs/incidentsUpdateTranscriptAttribution.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateTranscriptAttribution(firehydrant, {
    incidentId: "<id>",
    requestBody: {
      toUserId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsUpdateTranscriptAttribution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTranscriptAttributionRequest](../../models/operations/updatetranscriptattributionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listTranscriptEntries

Retrieve the transcript for a specific incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listTranscriptEntries({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListTranscriptEntries } from "firehydrant-typescript-sdk/funcs/incidentsListTranscriptEntries.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListTranscriptEntries(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListTranscriptEntries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTranscriptEntriesRequest](../../models/operations/listtranscriptentriesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PublicApiv1IncidentsTranscriptEntity](../../models/components/publicapiv1incidentstranscriptentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteTranscriptEntry

Delete a transcript from an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.deleteTranscriptEntry({
    transcriptId: "<id>",
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteTranscriptEntry } from "firehydrant-typescript-sdk/funcs/incidentsDeleteTranscriptEntry.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteTranscriptEntry(firehydrant, {
    transcriptId: "<id>",
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsDeleteTranscriptEntry failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTranscriptEntryRequest](../../models/operations/deletetranscriptentryrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PublicApiv1IncidentsTranscriptEntity](../../models/components/publicapiv1incidentstranscriptentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentConferenceBridges

Retrieve all conference bridges for an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentConferenceBridges({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentConferenceBridges } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentConferenceBridges.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentConferenceBridges(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentConferenceBridges failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentConferenceBridgesRequest](../../models/operations/listincidentconferencebridgesrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsConferenceBridgeEntity](../../models/components/incidentsconferencebridgeentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getConferenceBridgeTranslation

Retrieve the translations for a specific conference bridge

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.getConferenceBridgeTranslation({
    id: "<id>",
    languageCode: "<value>",
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetConferenceBridgeTranslation } from "firehydrant-typescript-sdk/funcs/incidentsGetConferenceBridgeTranslation.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetConferenceBridgeTranslation(firehydrant, {
    id: "<id>",
    languageCode: "<value>",
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetConferenceBridgeTranslation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConferenceBridgeTranslationRequest](../../models/operations/getconferencebridgetranslationrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsConferenceBridgeEntity](../../models/components/incidentsconferencebridgeentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listSimilarIncidents

Retrieve a list of similar incidents

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listSimilarIncidents({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListSimilarIncidents } from "firehydrant-typescript-sdk/funcs/incidentsListSimilarIncidents.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListSimilarIncidents(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListSimilarIncidents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSimilarIncidentsRequest](../../models/operations/listsimilarincidentsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SimilarIncidentEntityPaginated](../../models/components/similarincidententitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentAttachments

List attachments for an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentAttachments({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentAttachments } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentAttachments.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentAttachments(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentAttachments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentAttachmentsRequest](../../models/operations/listincidentattachmentsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AttachmentsTypedAttachmentEntityPaginated](../../models/components/attachmentstypedattachmententitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentAttachment

Allows adding image attachments to an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";
import { openAsBlob } from "node:fs";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentAttachment({
    incidentId: "<id>",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentAttachment } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentAttachment.js";
import { openAsBlob } from "node:fs";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentAttachment(firehydrant, {
    incidentId: "<id>",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentAttachment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentAttachmentRequest](../../models/operations/createincidentattachmentrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentAttachmentEntity](../../models/components/incidentattachmententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentEvents

List all events for an incident. An event is a timeline entry. This can be filtered with params to retrieve events of a certain type.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentEvents({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentEvents } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentEvents.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentEvents(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentEventsRequest](../../models/operations/listincidenteventsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEventEntityPaginated](../../models/components/incidentevententitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getIncidentEvent

Retrieve a single event for an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.getIncidentEvent({
    incidentId: "<id>",
    eventId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetIncidentEvent } from "firehydrant-typescript-sdk/funcs/incidentsGetIncidentEvent.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetIncidentEvent(firehydrant, {
    incidentId: "<id>",
    eventId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetIncidentEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIncidentEventRequest](../../models/operations/getincidenteventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEventEntity](../../models/components/incidentevententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteIncidentEvent

Delete an event for an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.deleteIncidentEvent({
    incidentId: "<id>",
    eventId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteIncidentEvent } from "firehydrant-typescript-sdk/funcs/incidentsDeleteIncidentEvent.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteIncidentEvent(firehydrant, {
    incidentId: "<id>",
    eventId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsDeleteIncidentEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIncidentEventRequest](../../models/operations/deleteincidenteventrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEventEntity](../../models/components/incidentevententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIncidentEvent

Update a single event for an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateIncidentEvent({
    incidentId: "<id>",
    eventId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncidentEvent } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncidentEvent.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncidentEvent(firehydrant, {
    incidentId: "<id>",
    eventId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateIncidentEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentEventRequest](../../models/operations/updateincidenteventrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEventEntity](../../models/components/incidentevententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIncidentImpactPut

Allows updating an incident's impacted infrastructure, with the option to
move the incident into a different milestone and provide a note to update
the incident timeline and any attached status pages. If this method is
requested with the PUT verb, impacts will be completely replaced with the
information in the request body, even if not provided (effectively clearing
all impacts). If this method is requested with the PATCH verb, the provided
impacts will be added or updated, but no impacts will be removed.


### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateIncidentImpactPut({
    incidentId: "<id>",
    updateIncidentImpactPut: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncidentImpactPut } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncidentImpactPut.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncidentImpactPut(firehydrant, {
    incidentId: "<id>",
    updateIncidentImpactPut: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateIncidentImpactPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentImpactPutRequest](../../models/operations/updateincidentimpactputrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIncidentImpactPatch

Allows updating an incident's impacted infrastructure, with the option to
move the incident into a different milestone and provide a note to update
the incident timeline and any attached status pages. If this method is
requested with the PUT verb, impacts will be completely replaced with the
information in the request body, even if not provided (effectively clearing
all impacts). If this method is requested with the PATCH verb, the provided
impacts will be added or updated, but no impacts will be removed.


### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateIncidentImpactPatch({
    incidentId: "<id>",
    updateIncidentImpactPatch: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncidentImpactPatch } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncidentImpactPatch.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncidentImpactPatch(firehydrant, {
    incidentId: "<id>",
    updateIncidentImpactPatch: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateIncidentImpactPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentImpactPatchRequest](../../models/operations/updateincidentimpactpatchrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentEntity](../../models/components/incidententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentImpacts

List impacted infrastructure on an incident by specifying type

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentImpacts({
    incidentId: "<id>",
    type: "customers",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentImpacts } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentImpacts.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentImpacts(firehydrant, {
    incidentId: "<id>",
    type: "customers",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentImpacts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentImpactsRequest](../../models/operations/listincidentimpactsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentImpactEntityPaginated](../../models/components/incidentimpactentitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentImpact

Add impacted infrastructure to an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentImpact({
    incidentId: "<id>",
    type: "customers",
    createIncidentImpact: {
      id: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentImpact } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentImpact.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentImpact(firehydrant, {
    incidentId: "<id>",
    type: "customers",
    createIncidentImpact: {
      id: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentImpact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentImpactRequest](../../models/operations/createincidentimpactrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentImpactEntity](../../models/components/incidentimpactentity.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorEntity | 400                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## deleteIncidentImpact

Remove impacted infrastructure from an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.deleteIncidentImpact({
    incidentId: "<id>",
    type: "services",
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteIncidentImpact } from "firehydrant-typescript-sdk/funcs/incidentsDeleteIncidentImpact.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteIncidentImpact(firehydrant, {
    incidentId: "<id>",
    type: "services",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsDeleteIncidentImpact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIncidentImpactRequest](../../models/operations/deleteincidentimpactrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorEntity | 400                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## createIncidentNote

Create a new note on for an incident. The visibility field on a note determines where it gets posted.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentNote({
    incidentId: "<id>",
    createIncidentNote: {
      body: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentNote } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentNote.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentNote(firehydrant, {
    incidentId: "<id>",
    createIncidentNote: {
      body: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentNote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentNoteRequest](../../models/operations/createincidentnoterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EventNoteEntity](../../models/components/eventnoteentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIncidentNote

Updates the body of a note

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateIncidentNote({
    noteId: "<id>",
    incidentId: "<id>",
    updateIncidentNote: {
      body: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncidentNote } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncidentNote.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncidentNote(firehydrant, {
    noteId: "<id>",
    incidentId: "<id>",
    updateIncidentNote: {
      body: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateIncidentNote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentNoteRequest](../../models/operations/updateincidentnoterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EventNoteEntity](../../models/components/eventnoteentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentChatMessage

Create a new generic chat message on an incident timeline. These are independent of any specific chat provider.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentChatMessage({
    incidentId: "<id>",
    createIncidentChatMessage: {
      body: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentChatMessage } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentChatMessage.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentChatMessage(firehydrant, {
    incidentId: "<id>",
    createIncidentChatMessage: {
      body: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentChatMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentChatMessageRequest](../../models/operations/createincidentchatmessagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EventGenericChatMessageEntity](../../models/components/eventgenericchatmessageentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteIncidentChatMessage

Delete an existing generic chat message on an incident.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.deleteIncidentChatMessage({
    messageId: "<id>",
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteIncidentChatMessage } from "firehydrant-typescript-sdk/funcs/incidentsDeleteIncidentChatMessage.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteIncidentChatMessage(firehydrant, {
    messageId: "<id>",
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsDeleteIncidentChatMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIncidentChatMessageRequest](../../models/operations/deleteincidentchatmessagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EventGenericChatMessageEntity](../../models/components/eventgenericchatmessageentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateIncidentChatMessage

Update an existing generic chat message on an incident.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateIncidentChatMessage({
    messageId: "<id>",
    incidentId: "<id>",
    updateIncidentChatMessage: {
      body: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateIncidentChatMessage } from "firehydrant-typescript-sdk/funcs/incidentsUpdateIncidentChatMessage.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateIncidentChatMessage(firehydrant, {
    messageId: "<id>",
    incidentId: "<id>",
    updateIncidentChatMessage: {
      body: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateIncidentChatMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIncidentChatMessageRequest](../../models/operations/updateincidentchatmessagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EventGenericChatMessageEntity](../../models/components/eventgenericchatmessageentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIncidentRoleAssignments

Retrieve a list of all of the current role assignments for the incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listIncidentRoleAssignments({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListIncidentRoleAssignments } from "firehydrant-typescript-sdk/funcs/incidentsListIncidentRoleAssignments.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListIncidentRoleAssignments(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListIncidentRoleAssignments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncidentRoleAssignmentsRequest](../../models/operations/listincidentroleassignmentsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRoleAssignmentEntityPaginated](../../models/components/incidentsroleassignmententitypaginated.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentRoleAssignment

Assign a role to a user for this incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createIncidentRoleAssignment({
    incidentId: "<id>",
    createIncidentRoleAssignment: {
      userId: "<id>",
      incidentRoleId: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentRoleAssignment } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentRoleAssignment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentRoleAssignment(firehydrant, {
    incidentId: "<id>",
    createIncidentRoleAssignment: {
      userId: "<id>",
      incidentRoleId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateIncidentRoleAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentRoleAssignmentRequest](../../models/operations/createincidentroleassignmentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRoleAssignmentEntity](../../models/components/incidentsroleassignmententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteIncidentRoleAssignment

Unassign a role from a user

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.deleteIncidentRoleAssignment({
    incidentId: "<id>",
    roleAssignmentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteIncidentRoleAssignment } from "firehydrant-typescript-sdk/funcs/incidentsDeleteIncidentRoleAssignment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteIncidentRoleAssignment(firehydrant, {
    incidentId: "<id>",
    roleAssignmentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsDeleteIncidentRoleAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIncidentRoleAssignmentRequest](../../models/operations/deleteincidentroleassignmentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRoleAssignmentEntity](../../models/components/incidentsroleassignmententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createIncidentTeamAssignment

Assign a team for this incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.createIncidentTeamAssignment({
    incidentId: "<id>",
    createIncidentTeamAssignment: {
      teamId: "<id>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateIncidentTeamAssignment } from "firehydrant-typescript-sdk/funcs/incidentsCreateIncidentTeamAssignment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateIncidentTeamAssignment(firehydrant, {
    incidentId: "<id>",
    createIncidentTeamAssignment: {
      teamId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsCreateIncidentTeamAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateIncidentTeamAssignmentRequest](../../models/operations/createincidentteamassignmentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteIncidentTeamAssignment

Unassign a team from an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.deleteIncidentTeamAssignment({
    incidentId: "<id>",
    teamAssignmentId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteIncidentTeamAssignment } from "firehydrant-typescript-sdk/funcs/incidentsDeleteIncidentTeamAssignment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteIncidentTeamAssignment(firehydrant, {
    incidentId: "<id>",
    teamAssignmentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsDeleteIncidentTeamAssignment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIncidentTeamAssignmentRequest](../../models/operations/deleteincidentteamassignmentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getIncidentUser

Retrieve a user with current roles for an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.getIncidentUser({
    incidentId: "<id>",
    userId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetIncidentUser } from "firehydrant-typescript-sdk/funcs/incidentsGetIncidentUser.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetIncidentUser(firehydrant, {
    incidentId: "<id>",
    userId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetIncidentUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIncidentUserRequest](../../models/operations/getincidentuserrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRoleAssignmentEntity](../../models/components/incidentsroleassignmententity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getIncidentRelationships

List any parent/child relationships for an incident

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.getIncidentRelationships({
    incidentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetIncidentRelationships } from "firehydrant-typescript-sdk/funcs/incidentsGetIncidentRelationships.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetIncidentRelationships(firehydrant, {
    incidentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetIncidentRelationships failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIncidentRelationshipsRequest](../../models/operations/getincidentrelationshipsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IncidentsRelationshipsEntity](../../models/components/incidentsrelationshipsentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listScheduledMaintenances

Lists all scheduled maintenance events

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.listScheduledMaintenances({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsListScheduledMaintenances } from "firehydrant-typescript-sdk/funcs/incidentsListScheduledMaintenances.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsListScheduledMaintenances(firehydrant, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsListScheduledMaintenances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListScheduledMaintenancesRequest](../../models/operations/listscheduledmaintenancesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduledMaintenanceEntity](../../models/components/scheduledmaintenanceentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createScheduledMaintenance

Create a new scheduled maintenance event

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.createScheduledMaintenance({
    name: "<value>",
    startsAt: new Date("2023-07-05T09:49:56.220Z"),
    endsAt: new Date("2025-04-17T19:51:25.891Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsCreateScheduledMaintenance } from "firehydrant-typescript-sdk/funcs/incidentsCreateScheduledMaintenance.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsCreateScheduledMaintenance(firehydrant, {
    name: "<value>",
    startsAt: new Date("2023-07-05T09:49:56.220Z"),
    endsAt: new Date("2025-04-17T19:51:25.891Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsCreateScheduledMaintenance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateScheduledMaintenance](../../models/components/createscheduledmaintenance.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduledMaintenanceEntity](../../models/components/scheduledmaintenanceentity.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorEntity | 400                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## getScheduledMaintenance

Fetch the details of a scheduled maintenance event.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.getScheduledMaintenance({
    scheduledMaintenanceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetScheduledMaintenance } from "firehydrant-typescript-sdk/funcs/incidentsGetScheduledMaintenance.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetScheduledMaintenance(firehydrant, {
    scheduledMaintenanceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsGetScheduledMaintenance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScheduledMaintenanceRequest](../../models/operations/getscheduledmaintenancerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduledMaintenanceEntity](../../models/components/scheduledmaintenanceentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteScheduledMaintenance

Delete a scheduled maintenance event, preventing it from taking place.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.deleteScheduledMaintenance({
    scheduledMaintenanceId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsDeleteScheduledMaintenance } from "firehydrant-typescript-sdk/funcs/incidentsDeleteScheduledMaintenance.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsDeleteScheduledMaintenance(firehydrant, {
    scheduledMaintenanceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsDeleteScheduledMaintenance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteScheduledMaintenanceRequest](../../models/operations/deletescheduledmaintenancerequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateScheduledMaintenance

Change the conditions of a scheduled maintenance event, including updating any status page announcements of changes.

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.updateScheduledMaintenance({
    scheduledMaintenanceId: "<id>",
    updateScheduledMaintenance: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsUpdateScheduledMaintenance } from "firehydrant-typescript-sdk/funcs/incidentsUpdateScheduledMaintenance.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsUpdateScheduledMaintenance(firehydrant, {
    scheduledMaintenanceId: "<id>",
    updateScheduledMaintenance: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsUpdateScheduledMaintenance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScheduledMaintenanceRequest](../../models/operations/updatescheduledmaintenancerequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduledMaintenanceEntity](../../models/components/scheduledmaintenanceentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAiIncidentSummaryVoteStatus

Get the current user's vote status for an AI-generated incident summary

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.incidents.getAiIncidentSummaryVoteStatus({
    incidentId: "<id>",
    generatedSummaryId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsGetAiIncidentSummaryVoteStatus } from "firehydrant-typescript-sdk/funcs/incidentsGetAiIncidentSummaryVoteStatus.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsGetAiIncidentSummaryVoteStatus(firehydrant, {
    incidentId: "<id>",
    generatedSummaryId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("incidentsGetAiIncidentSummaryVoteStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAiIncidentSummaryVoteStatusRequest](../../models/operations/getaiincidentsummaryvotestatusrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## voteAiIncidentSummary

Vote on an AI-generated incident summary for the current user

### Example Usage

```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.incidents.voteAiIncidentSummary({
    incidentId: "<id>",
    generatedSummaryId: "<id>",
    requestBody: {
      direction: "up",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { incidentsVoteAiIncidentSummary } from "firehydrant-typescript-sdk/funcs/incidentsVoteAiIncidentSummary.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await incidentsVoteAiIncidentSummary(firehydrant, {
    incidentId: "<id>",
    generatedSummaryId: "<id>",
    requestBody: {
      direction: "up",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incidentsVoteAiIncidentSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VoteAiIncidentSummaryRequest](../../models/operations/voteaiincidentsummaryrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIEntitiesIncidentSummaryEntity](../../models/components/aientitiesincidentsummaryentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |