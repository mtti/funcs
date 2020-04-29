import { series } from './series';

describe('series', () => {
  describe('when called with tasks', () => {
    let previous = 0;

    const createTask = (result: number) => async (): Promise<number> => {
      if (previous !== result - 1) {
        throw new Error(`${result} was run after {previous}`);
      }
      previous = result;
      return result;
    };

    beforeEach(() => {
      previous = 0;
    });

    it('executes tasks in order', async () => {
      await series([1, 2, 3, 4, 5].map(createTask));
    });
  });
});
