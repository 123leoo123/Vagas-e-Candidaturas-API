/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default{
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/units/**/*.test.ts"],
    setupFilesAfterEnv: ["./src/__tests__/__mocks__/prisma.ts"],
    transform: {
      "^.+.tsx?$": ["ts-jest",{}],
    },
  };

  