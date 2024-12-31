# PutV1ScimV2UsersIdEmails

## Example Usage

```typescript
import { PutV1ScimV2UsersIdEmails } from "firehydrant-typescript-sdk/models/components";

let value: PutV1ScimV2UsersIdEmails = {
  value: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `value`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | String that represents an email address for the User                              |
| `primary`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Boolean which signifies if an email is intended as the primary email for the User |