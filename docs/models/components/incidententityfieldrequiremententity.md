# IncidentEntityFieldRequirementEntity

## Example Usage

```typescript
import { IncidentEntityFieldRequirementEntity } from "firehydrant-typescript-sdk/models/components";

let value: IncidentEntityFieldRequirementEntity = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `fieldId`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | A unique identifier for the field.                                                     |
| `requiredAtMilestoneId`                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | The milestone at which this field is required. If null, this field is always required. |