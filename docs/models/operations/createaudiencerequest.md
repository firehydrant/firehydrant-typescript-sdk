# CreateAudienceRequest

## Example Usage

```typescript
import { CreateAudienceRequest } from "firehydrant/models/operations";

let value: CreateAudienceRequest = {
  name: "<value>",
  description: "abaft fleck thigh",
  detailsQuestion: [
    "<value>",
  ],
  detailsPrompt: [
    "<value>",
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `name`                                            | *string*                                          | :heavy_check_mark:                                | Name of the audience (max 255 characters)         |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | Description of the audience (max 4000 characters) |
| `default`                                         | *boolean*                                         | :heavy_minus_sign:                                | Whether this is the default audience              |
| `detailsQuestion`                                 | *string*[]                                        | :heavy_check_mark:                                | The incident detail question (max 255 characters) |
| `detailsPrompt`                                   | *string*[]                                        | :heavy_check_mark:                                | The prompt to display when collecting this detail |
| `detailsSlug`                                     | *string*[]                                        | :heavy_minus_sign:                                | Optional unique identifier for this detail        |