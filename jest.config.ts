import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "node",
  preset: "ts-jest",
  verbose: true,
  bail: 1,
  rootDir: "./src/tests",
  cache: false,
  clearMocks: true,
  // detectLeaks: true,
};

export default jestConfig;
