# ChecklistTemplateEntity

ChecklistTemplateEntity model

## Example Usage

```typescript
import { ChecklistTemplateEntity } from "firehydrant-typescript-sdk/models/components";

let value: ChecklistTemplateEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `checks`                                                                                      | [components.ChecklistCheckEntity](../../models/components/checklistcheckentity.md)[]          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `owner`                                                                                       | [components.TeamEntityLite](../../models/components/teamentitylite.md)                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `connectedServices`                                                                           | [components.ServiceEntityChecklist](../../models/components/serviceentitychecklist.md)[]      | :heavy_minus_sign:                                                                            | List of services that use this checklist                                                      |