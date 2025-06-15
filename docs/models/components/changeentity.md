# ChangeEntity

ChangeEntity model

## Example Usage

```typescript
import { ChangeEntity } from "firehydrant-typescript-sdk/models/components";

let value: ChangeEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | UUID of the Change                                                                            |
| `summary`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the Change                                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the change entry was created                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `labels`                                                                                      | [components.ChangeEntityLabels](../../models/components/changeentitylabels.md)                | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs of labels.                                                          |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the Change                                                                     |