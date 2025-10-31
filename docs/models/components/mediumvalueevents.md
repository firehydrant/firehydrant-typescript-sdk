# MediumValueEvents

## Example Usage

```typescript
import { MediumValueEvents } from "firehydrant-typescript-sdk/models/components";

let value: MediumValueEvents = {
  parentChanged: true,
  childChanged: false,
  newRelatedChangeEvent: false,
  runbookStepExecutionUpdate: true,
  changeType: true,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `parentChanged`                                                         | *boolean*                                                               | :heavy_check_mark:                                                      | Include any events where the incident's parent changes in the timeline  |
| `childChanged`                                                          | *boolean*                                                               | :heavy_check_mark:                                                      | Include any events where the incident's children change in the timeline |
| `newRelatedChangeEvent`                                                 | *boolean*                                                               | :heavy_check_mark:                                                      | Include any related change events in the timeline                       |
| `runbookStepExecutionUpdate`                                            | *boolean*                                                               | :heavy_check_mark:                                                      | Include any runbook step updates in the timeline                        |
| `changeType`                                                            | *boolean*                                                               | :heavy_check_mark:                                                      | Include any incident type change events in the timeline                 |