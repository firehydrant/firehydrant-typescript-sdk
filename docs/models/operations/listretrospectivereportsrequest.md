# ListRetrospectiveReportsRequest

## Example Usage

```typescript
import { ListRetrospectiveReportsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListRetrospectiveReportsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `perPage`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `incidentId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter the reports by an incident ID                                                          |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter for reports updated after the given ISO8601 timestamp                                  |