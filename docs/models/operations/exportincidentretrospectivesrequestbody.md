# ExportIncidentRetrospectivesRequestBody

## Example Usage

```typescript
import { ExportIncidentRetrospectivesRequestBody } from "firehydrant/models/operations";

let value: ExportIncidentRetrospectivesRequestBody = {
  integrationSlug: "google_docs",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `integrationSlug`                                                        | [operations.IntegrationSlug](../../models/operations/integrationslug.md) | :heavy_check_mark:                                                       | The name of the integration to export the retrospective to.              |
| `parentPageId`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The ID of the parent page to export the retrospective to.                |