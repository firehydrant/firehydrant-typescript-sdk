# ListRunbookAuditsRequest

## Example Usage

```typescript
import { ListRunbookAuditsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListRunbookAuditsRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `page`                                                                            | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `perPage`                                                                         | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `auditableType`                                                                   | [operations.AuditableType](../../models/operations/auditabletype.md)              | :heavy_minus_sign:                                                                | A query to filter audits by type                                                  |
| `sort`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | A query to sort audits by their created_at timestamp. Options are 'asc' or 'desc' |