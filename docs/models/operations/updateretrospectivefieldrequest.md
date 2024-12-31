# UpdateRetrospectiveFieldRequest

## Example Usage

```typescript
import { UpdateRetrospectiveFieldRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateRetrospectiveFieldRequest = {
  fieldId: "<id>",
  reportId: "<id>",
  patchV1PostMortemsReportsReportIdFieldsFieldId: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `fieldId`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `reportId`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `patchV1PostMortemsReportsReportIdFieldsFieldId`                                                                                       | [components.PatchV1PostMortemsReportsReportIdFieldsFieldId](../../models/components/patchv1postmortemsreportsreportidfieldsfieldid.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |