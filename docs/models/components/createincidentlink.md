# CreateIncidentLink

Allows adding adhoc links to an incident as an attachment

## Example Usage

```typescript
import { CreateIncidentLink } from "firehydrant/models/components";

let value: CreateIncidentLink = {
  href: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `displayText`      | *string*           | :heavy_minus_sign: | N/A                |
| `iconUrl`          | *string*           | :heavy_minus_sign: | N/A                |
| `href`             | *string*           | :heavy_check_mark: | N/A                |