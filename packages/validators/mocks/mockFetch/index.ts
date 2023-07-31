import { MockResponseInterface } from './mockFetchInterfaces';

export const mockFetch = (
  mockResponse: MockResponseInterface,
  signal?: AbortSignal | null,
  msgError?: string,
) => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => {
        if (signal?.aborted)
          return Promise.reject(new DOMException(undefined, 'AbortError'));
        return Promise.resolve(
          msgError ? Promise.reject(new Error(msgError)) : mockResponse,
        );
      },
    }),
  );
};
