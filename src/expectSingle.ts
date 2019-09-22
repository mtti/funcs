/**
 * Given a single value, returns that value. Given an array with a single item,
 * returns that item. Otherwise throws an error.
 *
 * @param source An item or an array of items.
 */
export function expectSingle<T>(source: T|T[]): T {
  if (Array.isArray(source)) {
    if (source.length !== 1) {
      throw new Error(`Expected a single value, got ${source.length}`);
    }
    return source[0];
  }
  return source;
}
