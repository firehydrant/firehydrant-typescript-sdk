# PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary

Setting an alert as primary will overwrite milestone times in the FireHydrant incident with times included in the primary alert. Services attached to the primary alert will also be automatically added to the incident.

## Example Usage

```typescript
import { PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary = {
  primary: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `primary`          | *boolean*          | :heavy_check_mark: | N/A                |