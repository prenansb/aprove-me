export default {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: './',
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/main.ts',
    '!src/app.module.ts',
    '!src/**/**/tracer.protocols.ts',
    '!src/**/**/logger.interceptor.ts',
    '!src/**/**/interceptors.module.ts',
  ],
  coveragePathIgnorePatterns: ['filter'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 70,
      functions: 90,
      lines: 90,
    },
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,
  globalSetup: './test/global-setup.ts',
  globalTeardown: './test/global-teardown.ts',
}
