# IncidentsImpactEntity

## Example Usage

```typescript
import { IncidentsImpactEntity } from "firehydrant/models/components";

let value: IncidentsImpactEntity = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [components.IncidentsImpactEntityType](../../models/components/incidentsimpactentitytype.md)                         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `impact`                                                                                                             | [components.NullableSuccinctEntity](../../models/components/nullablesuccinctentity.md)                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `condition`                                                                                                          | [components.NullableSeverityMatrixConditionEntity](../../models/components/nullableseveritymatrixconditionentity.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `conversations`                                                                                                      | [components.ConversationsAPIEntitiesReference](../../models/components/conversationsapientitiesreference.md)[]       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |