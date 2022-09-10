async function getAllStations() {
  return await query("select stationID,stationName from station");
}

module.exports = { getAllStations };
