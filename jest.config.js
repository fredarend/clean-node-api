module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  coverageProvider: 'v8',
  roots: ['<rootDir>'],
}
