<!-- Start SDK Example Usage [usage] -->
```typescript
import { Firehydrant } from "firehydrant-typescript-sdk";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.accountSettings.ping();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->