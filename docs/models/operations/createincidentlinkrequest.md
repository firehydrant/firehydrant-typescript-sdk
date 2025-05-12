# CreateIncidentLinkRequest

## Example Usage

```typescript
import { CreateIncidentLinkRequest } from "firehydrant/models/operations";

let value: CreateIncidentLinkRequest = {
  incidentId: "<id>",
  createIncidentLink: {
    href: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `incidentId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createIncidentLink`                                                           | [components.CreateIncidentLink](../../models/components/createincidentlink.md) | :heavy_check_mark:                                                             | N/A                                                                            |