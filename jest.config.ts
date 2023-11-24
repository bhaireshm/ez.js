import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "node",
  preset: "ts-jest",
  verbose: true,
  bail: 1,
  rootDir: "./src/tests",
  // testMatch: ["./src/**/*.test.ts"]
};

export default jestConfig;
