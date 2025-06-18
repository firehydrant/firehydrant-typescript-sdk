# IncidentsRelationshipsEntity

Incidents_RelationshipsEntity model

## Example Usage

```typescript
import { IncidentsRelationshipsEntity } from "firehydrant-typescript-sdk/models/components";

let value: IncidentsRelationshipsEntity = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `parent`                                                                                                                       | [components.NullablePublicApiv1IncidentsSuccinctEntity](../../models/components/nullablepublicapiv1incidentssuccinctentity.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `children`                                                                                                                     | [components.PublicApiv1IncidentsSuccinctEntity](../../models/components/publicapiv1incidentssuccinctentity.md)[]               | :heavy_minus_sign:                                                                                                             | The root incident's child incidents.                                                                                           |
| `siblings`                                                                                                                     | [components.PublicApiv1IncidentsSuccinctEntity](../../models/components/publicapiv1incidentssuccinctentity.md)[]               | :heavy_minus_sign:                                                                                                             | A list of incidents that share the root incident's parent.                                                                     |