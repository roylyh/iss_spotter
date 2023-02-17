/**
 * Makes a single API request to retrieve the user's IP address
 * @param {*} callback to pass back an error or the IP string
 * return (via callback)
 * - an error, if any(nullable)
 * - The IP address as a string(null is error)
 */
const request = require("request");

const fetchMyIp = function(callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org/?format=json",(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, JSON.parse(body).ip);
  }
  );
};

const fetchCoordsByIp = function(ip, callback) {
  request(`http://ipwho.is/${ip}`,(error, response, body)=>{
    if (error) {
      callback(error, null);
      return;
    }
    // if (response.statusCode !== 200) {
    //   const msg = `Status Code ${response.statusCode} when fetching Coords. Response: ${body}`;
    //   callback(Error(msg), null);
    //   return;
    // }
    const parsedBody = JSON.parse(body);
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message),null);
      return;
    }
    const {latitude,longitude} = parsedBody;
    callback(null,{latitude,longitude});
  });
};
// 70.70.43.91
module.exports = { fetchMyIp, fetchCoordsByIp, };