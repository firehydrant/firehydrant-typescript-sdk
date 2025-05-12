# UpdateOnCallShift

Update a Signals on-call shift by ID

## Example Usage

```typescript
import { UpdateOnCallShift } from "firehydrant/models/components";

let value: UpdateOnCallShift = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `startTime`                                                                                                                                    | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The start time of the shift in ISO8601 format.                                                                                                 |
| `endTime`                                                                                                                                      | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The end time of the shift in ISO8601 format.                                                                                                   |
| `userId`                                                                                                                                       | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | The ID of the user who is on-call for the shift. If not provided, the shift will be unassigned.                                                |
| `coverageRequest`                                                                                                                              | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | A description of why coverage is needed for this shift. If the shift is re-assigned, this will automatically be cleared unless provided again. |