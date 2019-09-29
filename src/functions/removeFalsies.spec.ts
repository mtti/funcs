import { removeFalsies } from './removeFalsies';

describe(removeFalsies.name, () => {
  it('removes falsy values', () => {
    expect(removeFalsies(['foo', 'bar', 0, null, 'hello', undefined, '']))
      .toEqual(['foo', 'bar', 'hello']);
  });
});
