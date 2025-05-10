# CreateSavedSearchRequest

## Example Usage

```typescript
import { CreateSavedSearchRequest } from "firehydrant/models/operations";

let value: CreateSavedSearchRequest = {
  resourceType: "ticket_tasks",
  createSavedSearch: {
    name: "<value>",
    filterValues: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                       | [operations.CreateSavedSearchResourceType](../../models/operations/createsavedsearchresourcetype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createSavedSearch`                                                                                  | [components.CreateSavedSearch](../../models/components/createsavedsearch.md)                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |