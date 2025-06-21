# NullableRunbooksActionConfigEntity

## Example Usage

```typescript
import { NullableRunbooksActionConfigEntity } from "firehydrant-typescript-sdk/models/components";

let value: NullableRunbooksActionConfigEntity = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `elements`                                                                             | [components.RunbooksElementEntity](../../models/components/runbookselemententity.md)[] | :heavy_minus_sign:                                                                     | A list of elements that can be used in this action configuration                       |
| `documentationUrl`                                                                     | *string*                                                                               | :heavy_minus_sign:                                                                     | Location of documentation for this action                                              |