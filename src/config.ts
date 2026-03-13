import dotenv from "dotenv";

// Load environment variables from .env files
dotenv.config();

// Helper to get and validate required vars (throws if missing and no fallback)
function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

/* eslint-disable n/no-process-env */
// Server-related vars have defaults so the CLI can run without them.
// The server and DB layer validate required vars when they are used.
export default {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: process.env.PORT ?? "8080",
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING ?? "",
  CONFORMANCE_API: process.env.CONFORMANCE_API ?? "http://cli.local/conformance",
  TESTCASE_TIMEOUT: Number(process.env.TESTCASE_TIMEOUT ?? 5000),
  LOG_OUTPUT: process.env.LOG_OUTPUT ?? "pino",
  LOG_LEVEL: process.env.LOG_LEVEL ?? "info",
  JWT_SECRET: process.env.JWT_SECRET ?? "",
  JWT_EXP: Number(process.env.JWT_EXP ?? 0),
};
