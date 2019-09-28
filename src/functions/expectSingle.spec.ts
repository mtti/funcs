import { expectSingle } from './expectSingle';

describe(expectSingle.name, () => {
  describe('when given an item', () => {
    it('return the item', () => {
      const item = Symbol('item') as symbol;
      const result = expectSingle(item);

      expect(result).toBe(item);
    });
  });

  describe('when given an array with one item', () => {
    it('returns the same array', () => {
      const arr = [Symbol('test')];
      const result = expectSingle(arr);

      expect(result).toBe(arr[0]);
    });
  });

  describe('when given an array with more than one item', () => {
    it('returns the same array', () => {
      const arr = [Symbol('a'), Symbol('b')];
      expect(() => expectSingle(arr)).toThrowError();
    });
  });
});
