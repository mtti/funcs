import { toArray } from './toArray';

describe('toArray', () => {
  describe('when given an array', () => {
    it('returns the same array', () => {
      const arr = [Symbol('test')];
      const result = toArray(arr);

      expect(result).toBe(arr);
    });
  });

  describe('when given an item', () => {
    it('returns an array containing just the item', () => {
      const item = Symbol('item') as symbol;
      const result = toArray(item);

      expect(result.length).toBe(1);
      expect(result[0]).toBe(item);
    });
  });
});
