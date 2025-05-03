const { fetchUpcomingLaunches } = require('../services/launchService');

test('fetchUpcomingLaunches should not throw with default filter', async () => {
  await expect(fetchUpcomingLaunches()).resolves.toBeUndefined();
});

test('fetchUpcomingLaunches should not throw with filter "Go"', async () => {
  await expect(fetchUpcomingLaunches("Go")).resolves.toBeUndefined();
});
