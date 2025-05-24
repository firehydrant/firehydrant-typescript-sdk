# UpdateChangeEvent

Update a change event

## Example Usage

```typescript
import { UpdateChangeEvent } from "firehydrant-typescript-sdk/models/components";

let value: UpdateChangeEvent = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `summary`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `labels`                                                                                           | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `startsAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `endsAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `environments`                                                                                     | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | An array of environment IDs (setting this will overwrite the current environments)                 |
| `services`                                                                                         | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | An array of service IDs (setting this will overwrite the current services)                         |
| `attachments`                                                                                      | [components.UpdateChangeEventAttachment](../../models/components/updatechangeeventattachment.md)[] | :heavy_minus_sign:                                                                                 | JSON objects representing attachments, see attachments documentation for the schema                |