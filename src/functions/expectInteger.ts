const integerPattern = /^-?[0-9]+$/i;

/**
 * Checks if a value of unknown type is an integer `number` or a string
 * representation of one and returns it as a `number` if it is, or throws an
 * error if it's not.
 *
 * @param value The value to check.
 */
export const expectInteger = (value: unknown): number => {
  if (typeof value === 'number') {
    if (!Number.isInteger(value)) {
      throw new Error(`Expected an integer, got ${value}`);
    }
    return value;
  }

  if (typeof value !== 'string') {
    throw new Error(`Expected an integer, got ${typeof value}`);
  }
  if (!integerPattern.test(value)) {
    throw new Error('Expected an integer, got string');
  }

  return parseInt(value, 10);
};
