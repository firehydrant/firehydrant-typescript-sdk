<!-- Start SDK Example Usage [usage] -->
```typescript
import { FirehydrantTypescriptSDK } from "firehydrant-typescript-sdk";

const firehydrantTypescriptSDK = new FirehydrantTypescriptSDK({
  apiKey: process.env["FIREHYDRANTTYPESCRIPTSDK_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrantTypescriptSDK.accountSettings
    .getAiPreferences();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->