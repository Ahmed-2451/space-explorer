const { fetchISSLocation } = require('../services/issService');

test('fetchISSLocation should not throw', async () => {
  await expect(fetchISSLocation()).resolves.toBeUndefined();
});
