/**
 * Checks if a value of unknown type is a string and returns it as such  if it
 * is, otherwise throws an error.
 *
 * @param value The value to check.
 */
export const expectString = (value: unknown): string => {
  if (typeof value !== 'string') {
    throw new Error(`Expected string, got ${typeof value}`);
  }
  return value;
};
