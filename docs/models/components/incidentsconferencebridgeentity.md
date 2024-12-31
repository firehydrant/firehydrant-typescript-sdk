# IncidentsConferenceBridgeEntity

## Example Usage

```typescript
import { IncidentsConferenceBridgeEntity } from "firehydrant-typescript-sdk/models/components";

let value: IncidentsConferenceBridgeEntity = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `attachments`                                                                                                                    | [components.IncidentsConferenceBridgeEntityAttachments](../../models/components/incidentsconferencebridgeentityattachments.md)[] | :heavy_minus_sign:                                                                                                               | A list of objects attached to this item. Can be one of: LinkEntity, CustomerSupportIssueEntity, or GenericAttachmentEntity       |