import { ensureEndsWith } from './ensureEndsWith';

describe(ensureEndsWith.name, () => {
  it('adds prefix when subject is not already prefixed', () => {
    expect(ensureEndsWith('subject', 'suffix')).toBe('subjectsuffix');
  });

  it('returns subject when it\'s already prefixed', () => {
    expect(ensureEndsWith('subjectsuffix', 'suffix')).toBe('subjectsuffix');
  });
});
