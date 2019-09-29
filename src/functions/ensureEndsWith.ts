/**
 * Returns a copy of string `subject` suffixed with `suffix` if it isn't
 * already.
 *
 * @param subject
 * @param suffix
 */
export const ensureEndsWith = (subject: string, suffix: string): string => (
  subject.endsWith(suffix) ? subject : `${subject}${suffix}`
);
