# PublishPostMortemReport

Marks an incident retrospective as published and emails all of the participants in the report the summary

## Example Usage

```typescript
import { PublishPostMortemReport } from "firehydrant-typescript-sdk/models/components";

let value: PublishPostMortemReport = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `publish`                                                | [components.Publish](../../models/components/publish.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `userIds`                                                | *string*[]                                               | :heavy_minus_sign:                                       | An array of user IDs with whom to share the report       |
| `teamIds`                                                | *string*[]                                               | :heavy_minus_sign:                                       | An array of team IDs with whom to share the report       |