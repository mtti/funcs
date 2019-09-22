/**
 * Construct an object from an array of key-value pairs.
 *
 * @param entries An array of key-value pairs.
 * @returns An object constructed from `entries`.
 */
export function fromEntries<K extends string | number | symbol, V>(
  entries: [string, V][],
): Record<K, V> {
  return entries
    .reduce((
      result,
      [key, value],
    ) => ({ ...result, [key]: value }),
    ({} as Record<K, V>));
}
