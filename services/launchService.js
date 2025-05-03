const client = require('../utils/apiClient');

async function fetchUpcomingLaunches(filter = '') {
  try {
    const res = await client.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/');
    const launches = res.data.results;

    const filtered = filter
      ? launches.filter(launch => launch.status.name.toLowerCase().includes(filter.toLowerCase()))
      : launches;

    if (filtered.length === 0) {
      console.log("No upcoming launches found for this filter.");
      return;
    }

    filtered.forEach(launch => {
      console.log(`\nMission: ${launch.name}\nVehicle: ${launch.rocket.configuration.name}\nLaunch Date: ${launch.window_start}\n`);
    });
  } catch (error) {
    console.error("Error fetching launches:", error.message);
  }
}

module.exports = { fetchUpcomingLaunches };
