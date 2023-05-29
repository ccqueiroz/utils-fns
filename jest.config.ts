import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/packages/**/src/**/*.ts', '!<rootDir>/packages/**/contracts/*.ts'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  projects: [
    {
      displayName: "Packages",
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      testPathIgnorePatterns: ['/lib/', '/node_modules/'],
      testEnvironment: 'node',
    }
  ]
};

export default config;
