# UpdateIncidentImpactPut

Allows updating an incident's impacted infrastructure, with the option to
move the incident into a different milestone and provide a note to update
the incident timeline and any attached status pages. If this method is
requested with the PUT verb, impacts will be completely replaced with the
information in the request body, even if not provided (effectively clearing
all impacts). If this method is requested with the PATCH verb, the provided
impacts will be added or updated, but no impacts will be removed.


## Example Usage

```typescript
import { UpdateIncidentImpactPut } from "firehydrant-typescript-sdk/models/components";

let value: UpdateIncidentImpactPut = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `note`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `milestone`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `impact`                                                                                                       | [components.UpdateIncidentImpactPutImpact](../../models/components/updateincidentimpactputimpact.md)[]         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `statusPages`                                                                                                  | [components.UpdateIncidentImpactPutStatusPage](../../models/components/updateincidentimpactputstatuspage.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |