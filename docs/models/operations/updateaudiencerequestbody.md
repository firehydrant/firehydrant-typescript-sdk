# UpdateAudienceRequestBody

## Example Usage

```typescript
import { UpdateAudienceRequestBody } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateAudienceRequestBody = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | Name of the audience (max 255 characters)               |
| `description`                                           | *string*                                                | :heavy_minus_sign:                                      | Description of the audience (max 4000 characters)       |
| `default`                                               | *boolean*                                               | :heavy_minus_sign:                                      | Whether this is the default audience                    |
| `active`                                                | *boolean*                                               | :heavy_minus_sign:                                      | Whether the audience is active or discarded             |
| `detailsQuestion`                                       | *string*[]                                              | :heavy_minus_sign:                                      | The incident detail question (max 255 characters)       |
| `detailsPrompt`                                         | *string*[]                                              | :heavy_minus_sign:                                      | The prompt to display when collecting this detail       |
| `detailsSlug`                                           | *string*[]                                              | :heavy_minus_sign:                                      | Optional unique identifier for this detail              |
| `detailsPosition`                                       | *number*[]                                              | :heavy_minus_sign:                                      | Position of the question in the list (1-based indexing) |