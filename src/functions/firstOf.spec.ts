import { firstOf } from './firstOf';

describe(firstOf.name, () => {
  it('throws when given a non-array', () => {
    expect(() => firstOf('derp' as any)).toThrow('Expected an array');
  });

  it('throws when given an empty array', () => {
    expect(() => firstOf([])).toThrow('Unexpected empty array');
  });

  it('returns the first element when given an array', () => {
    expect(firstOf([1, 2, 3])).toBe(1);
  });
});
