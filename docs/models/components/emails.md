# Emails

## Example Usage

```typescript
import { Emails } from "firehydrant-typescript-sdk/models/components";

let value: Emails = {
  value: "<value>",
  primary: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `value`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | String that represents an email address for the User                              |
| `primary`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | Boolean which signifies if an email is intended as the primary email for the User |