# PublicApiv1IncidentsTranscriptEntity

PublicAPI_V1_Incidents_TranscriptEntity model

## Example Usage

```typescript
import { PublicApiv1IncidentsTranscriptEntity } from "firehydrant-typescript-sdk/models/components";

let value: PublicApiv1IncidentsTranscriptEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier for the transcript entry                                                |
| `speaker`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The speaker for the transcript entry                                                          |
| `start`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The start time for the transcript entry                                                       |
| `until`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The end time for the transcript entry                                                         |
| `words`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The words spoken for the transcript entry                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the transcript entry was created                                                     |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the transcript entry was last updated                                                |
| `author`                                                                                      | [components.NullableAuthorEntity](../../models/components/nullableauthorentity.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |