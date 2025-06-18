# AlertsProcessingLogEntryEntity

## Example Usage

```typescript
import { AlertsProcessingLogEntryEntity } from "firehydrant-typescript-sdk/models/components";

let value: AlertsProcessingLogEntryEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `context`                                                                                     | [components.Context](../../models/components/context.md)                                      | :heavy_minus_sign:                                                                            | An unstructured representation of this log entry's context.                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `level`                                                                                       | [components.Level](../../models/components/level.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `messageType`                                                                                 | [components.MessageType](../../models/components/messagetype.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |