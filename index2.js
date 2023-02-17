const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function(passTimes) {
  for (let passTime of passTimes) {
    let date = new Date(passTime.risetime * 1000).toLocaleString();
    console.log(`Next pass at ${date} for ${passTime.duration} seconds!`);
  }
};

// fetchMyIP()
//   .then((body)=>fetchCoordsByIP(body))
//   .then((body)=>fetchISSFlyOverTimes(body))
//   .then((body)=> console.log(body));

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

// nextISSTimesForMyLocation()
//   .then((passTimes) => {
//     console.log(passTimes);
//   })
//   .catch((error) => {
//     console.log("It didn't work: ", error.message);
//   });

nextISSTimesForMyLocation((data)=>{
  const { response } = JSON.parse(data);
  printPassTimes(response);
},(error)=>{
  console.log("It didn't work: ", error.message);
});


