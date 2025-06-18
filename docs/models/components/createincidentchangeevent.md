# CreateIncidentChangeEvent

Add a related change to an incident. Changes added to an incident can be causes, fixes, or suspects. To remove a change from an incident, the type field should be set to dismissed.

## Example Usage

```typescript
import { CreateIncidentChangeEvent } from "firehydrant-typescript-sdk/models/components";

let value: CreateIncidentChangeEvent = {
  changeEventId: "<id>",
  type: "suspect",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `changeEventId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the change event to associate                                                              |
| `type`                                                                                               | [components.CreateIncidentChangeEventType](../../models/components/createincidentchangeeventtype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `why`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A short description about why this change event is related                                           |