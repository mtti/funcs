/**
 * Returns a copy of string `subject` prefixed with `prefix` if it isn't
 * already.
 *
 * @param subject
 * @param prefix
 */
export const ensureStartsWith = (subject: string, prefix: string): string => (
  subject.startsWith(prefix) ? subject : `${prefix}${subject}`
);
