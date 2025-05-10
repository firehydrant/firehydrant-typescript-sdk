# PostMortemsReasonEntity

PostMortems_ReasonEntity model

## Example Usage

```typescript
import { PostMortemsReasonEntity } from "firehydrant/models/components";

let value: PostMortemsReasonEntity = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `summary`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `position`                                                                                                     | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `createdBy`                                                                                                    | [components.NullableAuthorEntity](../../models/components/nullableauthorentity.md)                             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `conversations`                                                                                                | [components.ConversationsAPIEntitiesReference](../../models/components/conversationsapientitiesreference.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |