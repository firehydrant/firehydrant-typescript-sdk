# PostV1ChecklistTemplates

Creates a checklist template for the organization

## Example Usage

```typescript
import { PostV1ChecklistTemplates } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ChecklistTemplates = {
  name: "<value>",
  checks: [
    {
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `checks`                                                                       | [components.Checks](../../models/components/checks.md)[]                       | :heavy_check_mark:                                                             | An array of checks for the checklist template                                  |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the Team that owns the checklist template                            |
| `connectedServices`                                                            | [components.ConnectedServices](../../models/components/connectedservices.md)[] | :heavy_minus_sign:                                                             | Array of service IDs to attach checklist template to                           |