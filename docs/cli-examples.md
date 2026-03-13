# CLI Testing Examples

## Running via npx (CI/CD)

Once the package is published as `@wbcsd/pact-conformance-service`, you can run the conformance suite without cloning the repo:

```bash
npx @wbcsd/pact-conformance-service \
  --baseUrl https://api.example.com \
  --clientId your-client-id \
  --clientSecret your-client-secret \
  --version V3.0 \
  --organizationName "Your Organization"
```

Or install first and run the binary:

```bash
npm install @wbcsd/pact-conformance-service
npx pact-conformance-service --baseUrl ... --clientId ... --clientSecret ... --version V3.0 --organizationName "Your Org"
```

No database or server env vars are required; only the CLI arguments above (and optional flags) are needed.

## Basic Usage (from repo)

Run V3.0 conformance tests from a clone of the repository:

```bash
npm run cli -- \
  --baseUrl https://api.example.com \
  --clientId your-client-id \
  --clientSecret your-client-secret \
  --version V3.0 \
  --organizationName "Your Organization"
```

During initial development, it's helpful to be able to assert that certain test
cases are covered with the `--testCases` command line option:

```bash
npm run cli -- \
  --baseUrl https://api.example.com \
  --clientId your-client-id \
  --clientSecret your-client-secret \
  --version V3.0 \
  --organizationName "Your Organization" \
  --testCases 1-2,9                          # only test authentication flow
```

## V2.2 Tests with Custom Auth

```bash
npm run cli -- \
  --baseUrl https://api.example.com \
  --customAuthBaseUrl https://auth.example.com \
  --clientId your-client-id \
  --clientSecret your-client-secret \
  --version V2.2 \
  --organizationName "Your Organization"
```

## With OAuth Parameters

```bash
npm run cli -- \
  --baseUrl https://api.example.com \
  --clientId your-client-id \
  --clientSecret your-client-secret \
  --version V3.0 \
  --organizationName "Your Organization" \
  --scope "read:footprints write:footprints" \
  --audience "https://api.example.com" \
  --adminEmail admin@example.com \
  --adminName "John Doe"
```

## Direct Execution (without npm)

```bash
npx ts-node src/scripts/run-tests-cli.ts \
  --baseUrl https://api.example.com \
  --clientId your-client-id \
  --clientSecret your-client-secret \
  --version V3.0 \
  --organizationName "Your Organization"
```

## Help

```bash
npm run cli -- --help
# or when using the published package:
npx @wbcsd/pact-conformance-service --help
```

## Notes

- **No database required**: The CLI bypasses the database and displays results directly in the console
- **Exit codes**: Returns 0 if all mandatory tests pass, 1 if any fail
- **Callback tests**: Tests requiring callbacks (async tests) will show as PENDING when run from CLI
- **Colored output**: Success (green), failure (red), and pending (yellow) are color-coded
- **Timeouts**: Each test has a timeout configured in the application settings
