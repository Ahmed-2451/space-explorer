const client = require('../utils/apiClient');

async function fetchAPOD() {
  try {
    const apiKey = process.env.NASA_API_KEY || 'DEMO_KEY';
    const res = await client.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const { title, explanation, date, url } = res.data;
    console.log(`\n${date} - ${title}\n${explanation}\nImage URL: ${url}`);
  } catch (error) {
    console.error("Error fetching APOD:", error.message);
  }
}

module.exports = { fetchAPOD };
