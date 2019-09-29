import { ensureStartsWith } from './ensureStartsWith';

describe(ensureStartsWith.name, () => {
  it('adds prefix when subject is not already prefixed', () => {
    expect(ensureStartsWith('subject', 'prefix')).toBe('prefixsubject');
  });

  it('returns subject when it\'s already prefixed', () => {
    expect(ensureStartsWith('prefixsubject', 'prefix')).toBe('prefixsubject');
  });
});
