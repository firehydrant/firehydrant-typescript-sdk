# IncidentsAlertEntityPaginated

Incidents_AlertEntityPaginated model

## Example Usage

```typescript
import { IncidentsAlertEntityPaginated } from "firehydrant-typescript-sdk/models/components";

let value: IncidentsAlertEntityPaginated = {
  data: [
    {
      alert: {
        signalRule: null,
        parentAlerts: [
          {
            signalRule: {
              deduplicationExpiry: "PT1H",
            },
          },
        ],
        childAlerts: [
          {
            signalRule: null,
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.IncidentsAlertEntity](../../models/components/incidentsalertentity.md)[]       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [components.NullablePaginationEntity](../../models/components/nullablepaginationentity.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |