# ListProcessingLogEntriesRequest

## Example Usage

```typescript
import { ListProcessingLogEntriesRequest } from "firehydrant/models/operations";

let value: ListProcessingLogEntriesRequest = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `page`                                                          | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `perPage`                                                       | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `integrationSlug`                                               | *string*                                                        | :heavy_minus_sign:                                              | Scopes returned log entries to a specific integration ID        |
| `connectionId`                                                  | *string*                                                        | :heavy_minus_sign:                                              | Scopes returned log entries to a specific connection ID         |
| `ofLevel`                                                       | [operations.OfLevel](../../models/operations/oflevel.md)        | :heavy_minus_sign:                                              | Returns logs of all levels equal to or above the provided level |
| `exactLevel`                                                    | [operations.ExactLevel](../../models/operations/exactlevel.md)  | :heavy_minus_sign:                                              | Returns log entries of all levels equal to the provided level   |