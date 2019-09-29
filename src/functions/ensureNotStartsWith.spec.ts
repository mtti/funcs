import { ensureNotStartsWith } from './ensureNotStartsWith';

describe(ensureNotStartsWith.name, () => {
  it('does nothing to an unprefixed string', () => {
    expect(ensureNotStartsWith('subject', 'prefix')).toBe('subject');
  });

  it('removes prefix when one is present', () => {
    expect(ensureNotStartsWith('prefixsubject', 'prefix')).toBe('subject');
  });
});
