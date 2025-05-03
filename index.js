const { fetchAPOD } = require('./services/nasaService');
const { fetchISSLocation } = require('./services/issService');
const { fetchUpcomingLaunches } = require('./services/launchService');

const [,, command, ...args] = process.argv;

switch (command) {
  case 'apod':
    fetchAPOD();
    break;
  case 'iss':
    setInterval(fetchISSLocation, 10000);
    break;
  case 'launches':
    const filter = args[0] || '';
    fetchUpcomingLaunches(filter);
    break;
  default:
    console.log("Usage: node index.js [apod | iss | launches <filter>]");
}
