# PostV1SavedSearchesResourceType

Create a new saved search for a particular resource type

## Example Usage

```typescript
import { PostV1SavedSearchesResourceType } from "firehydrant-typescript-sdk/models/components";

let value: PostV1SavedSearchesResourceType = {
  name: "<value>",
  filterValues: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `isPrivate`           | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `filterValues`        | Record<string, *any*> | :heavy_check_mark:    | N/A                   |