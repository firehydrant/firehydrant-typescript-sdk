# CreateTeamCallRouteTarget

Target for the call route (required unless connect_mode is direct_dial)

## Example Usage

```typescript
import { CreateTeamCallRouteTarget } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamCallRouteTarget = {
  type: "<value>",
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *string*           | :heavy_check_mark: | Type of target     |
| `id`               | *string*           | :heavy_check_mark: | ID of the target   |