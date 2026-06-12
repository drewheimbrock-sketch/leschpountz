exports.handler = async function(event, context) {
  const API_KEY = 'c707c9de4c5649ed8badd70462032e00';
  const url = 'https://api.football-data.org/v4/competitions/WC/matches';
  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': API_KEY }
    });
    if (!response.ok) {
      return { statusCode: response.status, body: JSON.stringify({ error: `API returned ${response.status}` }) };
    }
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=60' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
