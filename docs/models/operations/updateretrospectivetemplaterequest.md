# UpdateRetrospectiveTemplateRequest

## Example Usage

```typescript
import { UpdateRetrospectiveTemplateRequest } from "firehydrant/models/operations";

let value: UpdateRetrospectiveTemplateRequest = {
  retrospectiveTemplateId: "<id>",
  requestBody: {
    sectionsSlug: [
      "<value>",
    ],
    sectionsElements: [
      "<value>",
    ],
    fieldsLabel: [
      "<value>",
    ],
    fieldsType: [
      "dynamic_input_group",
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `retrospectiveTemplateId`                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.UpdateRetrospectiveTemplateRequestBody](../../models/operations/updateretrospectivetemplaterequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |