/**
 * If `subject` starts with `prefix` returns a copy of `subject` with `prefix``
 * removed from the beginning.
 *
 * @param subject
 * @param prefix
 */
export const ensureNotStartsWith = (
  subject: string,
  prefix: string,
): string => (
  subject.startsWith(prefix) ? subject.slice(prefix.length) : subject
);
