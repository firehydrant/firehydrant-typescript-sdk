# IncidentsRoleAssignmentEntity

Incidents_RoleAssignmentEntity model

## Example Usage

```typescript
import { IncidentsRoleAssignmentEntity } from "firehydrant-typescript-sdk/models/components";

let value: IncidentsRoleAssignmentEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.Status](../../models/components/status.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `incidentRole`                                                                                | [components.IncidentRoleEntity](../../models/components/incidentroleentity.md)                | :heavy_minus_sign:                                                                            | IncidentRoleEntity model                                                                      |
| `user`                                                                                        | [components.UserEntity](../../models/components/userentity.md)                                | :heavy_minus_sign:                                                                            | UserEntity model                                                                              |