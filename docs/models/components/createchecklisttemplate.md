# CreateChecklistTemplate

Creates a checklist template for the organization

## Example Usage

```typescript
import { CreateChecklistTemplate } from "firehydrant/models/components";

let value: CreateChecklistTemplate = {
  name: "<value>",
  checks: [
    {
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `checks`                                                                                                                   | [components.CreateChecklistTemplateCheck](../../models/components/createchecklisttemplatecheck.md)[]                       | :heavy_check_mark:                                                                                                         | An array of checks for the checklist template                                                                              |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `teamId`                                                                                                                   | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The ID of the Team that owns the checklist template                                                                        |
| `connectedServices`                                                                                                        | [components.CreateChecklistTemplateConnectedService](../../models/components/createchecklisttemplateconnectedservice.md)[] | :heavy_minus_sign:                                                                                                         | Array of service IDs to attach checklist template to                                                                       |