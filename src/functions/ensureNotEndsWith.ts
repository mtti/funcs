/**
 * Returns a a copy of `subject` with `suffix` removed from the end if it's
 * present.
 *
 * @param subject
 * @param suffix
 */
export const ensureNotEndsWith = (subject: string, suffix: string): string => (
  subject.endsWith(suffix)
    ? subject.slice(0, subject.length - suffix.length) : subject
);
