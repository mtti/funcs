/**
 * Returns the last element of an array. Throws an error if the input is
 * not an array or is empty.
 *
 * @param arr An array
 */
export function firstOf<T>(arr: readonly T[]): T {
  if (!Array.isArray(arr)) {
    throw new Error('Expected an array');
  }
  if (arr.length === 0) {
    throw new Error('Unexpected empty array');
  }
  return arr[0];
}
