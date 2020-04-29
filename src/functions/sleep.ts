/**
 * Returns a promise which will resolve after the set number of milliseconds.
 *
 * @param ms Duration in milliseconds after which the returned promise
 *  will be resolved.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
