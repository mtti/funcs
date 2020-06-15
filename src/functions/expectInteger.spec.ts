import { expectInteger } from './expectInteger';

describe('expectInteger', () => {
  let result: number|null = null;
  let error: any = null;

  beforeEach(() => {
    result = null;
    error = null;
  });

  describe('called with an integer number', () => {
    beforeEach(() => {
      result = expectInteger(1337);
    });

    it('returns the same number', () => {
      expect(result).toBe(1337);
    });
  });

  describe('called with a string representation of an integer', () => {
    beforeEach(() => {
      result = expectInteger('1337');
    });

    it('returns the same number', () => {
      expect(result).toBe(1337);
    });
  });

  describe('called with a non-integer number', () => {
    beforeEach(() => {
      try {
        result = expectInteger(13.37);
      } catch (err) {
        error = err;
      }
    });

    it('throws', () => {
      expect(error.message).toBe('Expected an integer, got 13.37');
    });
  });

  describe('called with a string of a non-integer number', () => {
    beforeEach(() => {
      try {
        result = expectInteger('13.37');
      } catch (err) {
        error = err;
      }
    });

    it('throws', () => {
      expect(error.message).toBe('Expected an integer, got string');
    });
  });

  describe('called with an object', () => {
    beforeEach(() => {
      try {
        result = expectInteger({});
      } catch (err) {
        error = err;
      }
    });

    it('throws', () => {
      expect(error.message).toBe('Expected an integer, got object');
    });
  });
});
