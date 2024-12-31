# PutV1ScimV2UsersIdName

The components of the user's name

## Example Usage

```typescript
import { PutV1ScimV2UsersIdName } from "firehydrant-typescript-sdk/models/components";

let value: PutV1ScimV2UsersIdName = {
  givenName: "<value>",
  familyName: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `givenName`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The family name of the User, or last name in most Western languages |
| `familyName`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The given name of the User, or first name in most Western languages |