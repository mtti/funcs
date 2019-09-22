/**
 * When given an array, returns that array. When given a single non-array value,
 * returns an array containing just that one value.
 *
 * @param value
 */
export function toArray<T>(value: T|T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}
