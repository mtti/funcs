import { lastOf } from './lastOf';

describe(lastOf.name, () => {
  it('throws when given a non-array', () => {
    expect(() => lastOf('derp' as any)).toThrow('Expected an array');
  });

  it('throws when given an empty array', () => {
    expect(() => lastOf([])).toThrow('Unexpected empty array');
  });

  it('returns last element when given an array', () => {
    expect(lastOf([1, 2, 3])).toBe(3);
  });
});
