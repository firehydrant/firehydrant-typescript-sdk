# IncidentsImpactEntity

## Example Usage

```typescript
import { IncidentsImpactEntity } from "firehydrant-typescript-sdk/models/components";

let value: IncidentsImpactEntity = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [components.IncidentsImpactEntityType](../../models/components/incidentsimpactentitytype.md)                   | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `impact`                                                                                                       | [components.SuccinctEntity](../../models/components/succinctentity.md)                                         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `condition`                                                                                                    | [components.SeverityMatrixConditionEntity](../../models/components/severitymatrixconditionentity.md)           | :heavy_minus_sign:                                                                                             | SeverityMatrix_ConditionEntity model                                                                           |
| `conversations`                                                                                                | [components.ConversationsAPIEntitiesReference](../../models/components/conversationsapientitiesreference.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |