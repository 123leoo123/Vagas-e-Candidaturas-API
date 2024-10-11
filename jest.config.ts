/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default{
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/(units|integration)/**/*.test.ts"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};