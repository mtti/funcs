import { fromEntries } from './fromEntries';

describe(fromEntries.name, () => {
  const entries: [string, number][] = [
    ['first', 1],
    ['second', 2],
    ['third', 3],
  ];

  const expected: Record<string, number> = {
    first: 1,
    second: 2,
    third: 3,
  };

  it('constructs the expected object', () => {
    const result = fromEntries(entries);
    expect(result).toMatchObject(expected);
  });
});
