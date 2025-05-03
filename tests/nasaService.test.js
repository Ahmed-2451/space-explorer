const { fetchAPOD } = require('../services/nasaService');

test('fetchAPOD should not throw', async () => {
  await expect(fetchAPOD()).resolves.toBeUndefined();
});
