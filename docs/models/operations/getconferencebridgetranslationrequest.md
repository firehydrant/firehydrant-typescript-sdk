# GetConferenceBridgeTranslationRequest

## Example Usage

```typescript
import { GetConferenceBridgeTranslationRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetConferenceBridgeTranslationRequest = {
  id: "<id>",
  languageCode: "<value>",
  incidentId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | The ID of the conference bridge      |
| `languageCode`                       | *string*                             | :heavy_check_mark:                   | The language code of the translation |
| `incidentId`                         | *string*                             | :heavy_check_mark:                   | N/A                                  |