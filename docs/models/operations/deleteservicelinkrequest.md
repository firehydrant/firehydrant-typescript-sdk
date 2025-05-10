# DeleteServiceLinkRequest

## Example Usage

```typescript
import { DeleteServiceLinkRequest } from "firehydrant/models/operations";

let value: DeleteServiceLinkRequest = {
  serviceId: "<id>",
  remoteId: "<id>",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                           | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `remoteId`                                                                                                                                            | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The external service ID which can be found in the JSON<br/>from GET services/:service_id endpoint under<br/>functionalities > external_resources > remote_id<br/> |