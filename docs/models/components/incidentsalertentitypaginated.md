# IncidentsAlertEntityPaginated

Incidents_AlertEntityPaginated model

## Example Usage

```typescript
import { IncidentsAlertEntityPaginated } from "firehydrant/models/components";

let value: IncidentsAlertEntityPaginated = {
  data: [
    {
      alert: {
        signalRule: {
          deduplicationExpiry: "PT1H",
        },
        parentAlerts: [
          {
            signalRule: {
              deduplicationExpiry: "PT1H",
            },
          },
        ],
        childAlerts: [
          {
            signalRule: {
              deduplicationExpiry: "PT1H",
            },
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