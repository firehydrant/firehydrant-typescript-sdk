# Conversations

## Overview

Operations related to Conversations

### Available Operations

* [getVoteStatus](#getvotestatus) - Get votes
* [updateVote](#updatevote) - Update votes
* [deleteCommentReaction](#deletecommentreaction) - Delete a reaction from a conversation comment
* [listCommentReactions](#listcommentreactions) - List reactions for a conversation comment
* [createCommentReaction](#createcommentreaction) - Create a reaction for a conversation comment
* [getComment](#getcomment) - Get a conversation comment
* [deleteComment](#deletecomment) - Archive a conversation comment
* [updateComment](#updatecomment) - Update a conversation comment
* [listComments](#listcomments) - List comments for a conversation
* [createComment](#createcomment) - Create a conversation comment

## getVoteStatus

Get an object's current vote counts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_vote_status" method="get" path="/v1/incidents/{incident_id}/events/{event_id}/votes/status" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.conversations.getVoteStatus({
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
import { conversationsGetVoteStatus } from "firehydrant-typescript-sdk/funcs/conversationsGetVoteStatus.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsGetVoteStatus(firehydrant, {
    incidentId: "<id>",
    eventId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsGetVoteStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVoteStatusRequest](../../models/operations/getvotestatusrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.VotesEntity](../../models/components/votesentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateVote

Upvote or downvote an object

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_vote" method="patch" path="/v1/incidents/{incident_id}/events/{event_id}/votes" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.conversations.updateVote({
    incidentId: "<id>",
    eventId: "<id>",
    updateVote: {
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
import { conversationsUpdateVote } from "firehydrant-typescript-sdk/funcs/conversationsUpdateVote.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsUpdateVote(firehydrant, {
    incidentId: "<id>",
    eventId: "<id>",
    updateVote: {
      direction: "up",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("conversationsUpdateVote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateVoteRequest](../../models/operations/updatevoterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.VotesEntity](../../models/components/votesentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteCommentReaction

Archive a reaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_comment_reaction" method="delete" path="/v1/conversations/{conversation_id}/comments/{comment_id}/reactions/{reaction_id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.deleteCommentReaction({
    reactionId: "<id>",
    conversationId: "<id>",
    commentId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsDeleteCommentReaction } from "firehydrant-typescript-sdk/funcs/conversationsDeleteCommentReaction.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsDeleteCommentReaction(firehydrant, {
    reactionId: "<id>",
    conversationId: "<id>",
    commentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsDeleteCommentReaction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCommentReactionRequest](../../models/operations/deletecommentreactionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listCommentReactions

List all of the reactions that have been added to a comment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_comment_reactions" method="get" path="/v1/conversations/{conversation_id}/comments/{comment_id}/reactions" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.listCommentReactions({
    conversationId: "<id>",
    commentId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsListCommentReactions } from "firehydrant-typescript-sdk/funcs/conversationsListCommentReactions.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsListCommentReactions(firehydrant, {
    conversationId: "<id>",
    commentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsListCommentReactions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommentReactionsRequest](../../models/operations/listcommentreactionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCommentReaction

Create a reaction on a comment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_comment_reaction" method="post" path="/v1/conversations/{conversation_id}/comments/{comment_id}/reactions" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.createCommentReaction({
    conversationId: "<id>",
    commentId: "<id>",
    createCommentReaction: {
      reaction: "<value>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsCreateCommentReaction } from "firehydrant-typescript-sdk/funcs/conversationsCreateCommentReaction.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsCreateCommentReaction(firehydrant, {
    conversationId: "<id>",
    commentId: "<id>",
    createCommentReaction: {
      reaction: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsCreateCommentReaction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommentReactionRequest](../../models/operations/createcommentreactionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getComment

Retrieves a single comment by ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_comment" method="get" path="/v1/conversations/{conversation_id}/comments/{comment_id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.getComment({
    commentId: "<id>",
    conversationId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsGetComment } from "firehydrant-typescript-sdk/funcs/conversationsGetComment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsGetComment(firehydrant, {
    commentId: "<id>",
    conversationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsGetComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommentRequest](../../models/operations/getcommentrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteComment

Archive a comment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_comment" method="delete" path="/v1/conversations/{conversation_id}/comments/{comment_id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.deleteComment({
    commentId: "<id>",
    conversationId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsDeleteComment } from "firehydrant-typescript-sdk/funcs/conversationsDeleteComment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsDeleteComment(firehydrant, {
    commentId: "<id>",
    conversationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsDeleteComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCommentRequest](../../models/operations/deletecommentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateComment

Update a comment's attributes

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_comment" method="patch" path="/v1/conversations/{conversation_id}/comments/{comment_id}" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.updateComment({
    commentId: "<id>",
    conversationId: "<id>",
    updateComment: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsUpdateComment } from "firehydrant-typescript-sdk/funcs/conversationsUpdateComment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsUpdateComment(firehydrant, {
    commentId: "<id>",
    conversationId: "<id>",
    updateComment: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsUpdateComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommentRequest](../../models/operations/updatecommentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listComments

List all of the comments that have been added to the organization

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_comments" method="get" path="/v1/conversations/{conversation_id}/comments" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.listComments({
    conversationId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsListComments } from "firehydrant-typescript-sdk/funcs/conversationsListComments.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsListComments(firehydrant, {
    conversationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsListComments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommentsRequest](../../models/operations/listcommentsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createComment

Creates a comment for a project

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_comment" method="post" path="/v1/conversations/{conversation_id}/comments" -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  await firehydrant.conversations.createComment({
    conversationId: "<id>",
    createComment: {
      body: "<value>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FirehydrantCore } from "firehydrant-typescript-sdk/core.js";
import { conversationsCreateComment } from "firehydrant-typescript-sdk/funcs/conversationsCreateComment.js";

// Use `FirehydrantCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const firehydrant = new FirehydrantCore({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const res = await conversationsCreateComment(firehydrant, {
    conversationId: "<id>",
    createComment: {
      body: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("conversationsCreateComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommentRequest](../../models/operations/createcommentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |