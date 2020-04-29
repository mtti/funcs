import { sleep } from './sleep';

describe('sleep', () => {
  describe('when called with a timeout of 500 ms', () => {
    it('resolves within 100 ms of timeout', async () => {
      const start = process.hrtime();

      await sleep(500);

      const end = process.hrtime(start);
      const duration = (end[0] * 1000) + (end[1] / 1000000);
      const diff = Math.abs(500 - duration);

      expect(diff).toBeLessThan(100);
    });
  });
});
