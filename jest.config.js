module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/__tests__/**/*.test.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
  moduleDirectories: ["node_modules"],
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/{index,App}.tsx"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/jest/__mocks__/svg-mock.js",
    "\\.(png|jpg|jpeg)": "<rootDir>/jest/__mocks__/image-mock.js",
    "src/(.*)": "<rootDir>/src/$1",
  },
};
