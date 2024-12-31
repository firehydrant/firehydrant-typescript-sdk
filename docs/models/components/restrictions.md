# Restrictions

## Example Usage

```typescript
import { Restrictions } from "firehydrant-typescript-sdk/models/components";

let value: Restrictions = {
  startDay: "thursday",
  startTime: "<value>",
  endDay: "monday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `startDay`                                                                                                        | [components.StartDay](../../models/components/startday.md)                                                        | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc). |
| `startTime`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should start.                                              |
| `endDay`                                                                                                          | [components.EndDay](../../models/components/endday.md)                                                            | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).   |
| `endTime`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should end.                                                |