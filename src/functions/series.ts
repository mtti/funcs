/**
 * Executes an array of asynchronous tasks in a series returning an array
 * containing the results of each task.
 *
 * @param tasks Asynchronous tasks
 * @returns Task results
 */

export async function series<T = unknown>(
  tasks: Array<() => Promise<T>>,
): Promise<T[]> {
  const result: T[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const task of tasks) {
    // eslint-disable-next-line no-await-in-loop
    result.push(await task());
  }

  return result;
}
