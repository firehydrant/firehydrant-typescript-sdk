# CreateIncidentLinkRequest

## Example Usage

```typescript
import { CreateIncidentLinkRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentLinkRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdLinks: {
    href: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `incidentId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `postV1IncidentsIncidentIdLinks`                                                                       | [components.PostV1IncidentsIncidentIdLinks](../../models/components/postv1incidentsincidentidlinks.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |