const client = require('../utils/apiClient');

async function fetchISSLocation() {
  try {
    const res = await client.get("http://api.open-notify.org/iss-now.json");
    const { latitude, longitude } = res.data.iss_position;
    const timestamp = new Date(res.data.timestamp * 1000);
    console.log(`[${timestamp.toLocaleTimeString()}] ISS Position -> Lat: ${latitude}, Lon: ${longitude}`);
  } catch (error) {
    console.error("Error fetching ISS location:", error.message);
  }
}

module.exports = { fetchISSLocation };
