# UpdateScimUserPhoneNumber

## Example Usage

```typescript
import { UpdateScimUserPhoneNumber } from "firehydrant-typescript-sdk/models/components";

let value: UpdateScimUserPhoneNumber = {
  value: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `value`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | String that represents a phone number for the User                                      |
| `type`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | Type of phone number (mobile, work, home, etc.)                                         |
| `primary`                                                                               | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Boolean which signifies if a phone number is intended as the primary phone for the User |