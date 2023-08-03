import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/dist/cjs/'
  ],
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/**/*.ts',
    '!<rootDir>/packages/**/contracts/*.ts',
    '!<rootDir>/packages/**/src/dist/**',
    '!<rootDir>/packages/utils-fns/src/index.ts',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/utils-fns/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  projects: [
    {
      displayName: "Packages",
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      transformIgnorePatterns: [
        '/node_modules/',
        '/dist/cjs/'
      ],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      testPathIgnorePatterns: ['/node_modules/', '/dist/'],
      testEnvironment: 'node',
    }
  ]
};

export default config;
