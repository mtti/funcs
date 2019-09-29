import { ensureNotEndsWith } from './ensureNotEndsWith';

describe(ensureNotEndsWith.name, () => {
  it('does nothing if suffix is not present', () => {
    expect(ensureNotEndsWith('subject', 'suffix')).toBe('subject');
  });

  it('removes suffix when one is present', () => {
    expect(ensureNotEndsWith('subjectsuffix', 'suffix')).toBe('subject');
  });
});
