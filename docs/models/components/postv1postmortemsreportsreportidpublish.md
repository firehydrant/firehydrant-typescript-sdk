# PostV1PostMortemsReportsReportIdPublish

Marks an incident retrospective as published and emails all of the participants in the report the summary

## Example Usage

```typescript
import { PostV1PostMortemsReportsReportIdPublish } from "firehydrant-typescript-sdk/models/components";

let value: PostV1PostMortemsReportsReportIdPublish = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `userIds`                                          | *string*[]                                         | :heavy_minus_sign:                                 | An array of user IDs with whom to share the report |
| `teamIds`                                          | *string*[]                                         | :heavy_minus_sign:                                 | An array of team IDs with whom to share the report |