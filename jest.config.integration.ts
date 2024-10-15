/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default{
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/(integration)/**/*.test.ts"],
  setupFilesAfterEnv: ["./src/__tests__/__mocks__/prisma.ts", "./src/__tests__/utils/reflectMetadata.ts"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};

