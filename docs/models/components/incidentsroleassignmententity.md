# IncidentsRoleAssignmentEntity

Incidents_RoleAssignmentEntity model

## Example Usage

```typescript
import { IncidentsRoleAssignmentEntity } from "firehydrant/models/components";

let value: IncidentsRoleAssignmentEntity = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [components.IncidentsRoleAssignmentEntityStatus](../../models/components/incidentsroleassignmententitystatus.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `incidentRole`                                                                                                   | [components.NullableIncidentRoleEntity](../../models/components/nullableincidentroleentity.md)                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `user`                                                                                                           | [components.NullableUserEntity](../../models/components/nullableuserentity.md)                                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |