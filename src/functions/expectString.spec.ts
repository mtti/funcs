import { expectString } from './expectString';

describe('expectString', () => {
  let result: string|null = null;
  let error: any = null;

  beforeEach(() => {
    result = null;
    error = null;
  });

  describe('called with a string', () => {
    beforeEach(() => {
      result = expectString('a string');
    });

    it('returns the same string', () => {
      expect(result).toBe('a string');
    });
  });

  describe('called with a non-string', () => {
    beforeEach(() => {
      try {
        result = expectString({});
      } catch (err) {
        error = err;
      }
    });

    it('returns the same string', () => {
      expect(error.message).toBe('Expected string, got object');
    });
  });
});
