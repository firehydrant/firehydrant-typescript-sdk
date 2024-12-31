# PostV1IncidentsIncidentIdRelatedChangeEvents

Add a related change to an incident. Changes added to an incident can be causes, fixes, or suspects. To remove a change from an incident, the type field should be set to dismissed.

## Example Usage

```typescript
import { PostV1IncidentsIncidentIdRelatedChangeEvents } from "firehydrant-typescript-sdk/models/components";

let value: PostV1IncidentsIncidentIdRelatedChangeEvents = {
  changeEventId: "<id>",
  type: "dismissed",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `changeEventId`                                                                                                                            | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The ID of the change event to associate                                                                                                    |
| `type`                                                                                                                                     | [components.PostV1IncidentsIncidentIdRelatedChangeEventsType](../../models/components/postv1incidentsincidentidrelatedchangeeventstype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `why`                                                                                                                                      | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | A short description about why this change event is related                                                                                 |