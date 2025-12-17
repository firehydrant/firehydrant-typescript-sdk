# UpdateRetrospectiveTemplateRequest

## Example Usage

```typescript
import { UpdateRetrospectiveTemplateRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateRetrospectiveTemplateRequest = {
  retrospectiveTemplateId: "<id>",
  requestBody: {
    sectionsSlug: [
      "<value 1>",
      "<value 2>",
    ],
    sectionsElements: [
      "<value 1>",
    ],
    fieldsLabel: [
      "<value 1>",
      "<value 2>",
    ],
    fieldsType: [
      "single_select",
    ],
    reportElementsType: "prosemirror_content",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `retrospectiveTemplateId`                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.UpdateRetrospectiveTemplateRequestBody](../../models/operations/updateretrospectivetemplaterequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |