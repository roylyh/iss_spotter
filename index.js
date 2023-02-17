const {nextISSTimesForMyLocation} = require("./iss");

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// }
// );

// fetchCoordsByIp("70.70.43.91", (error,coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates);
// });

// const exampleCoords = { latitude: 49.0743308, longitude: -122.5593218 };
// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // console.log(passTimes);
  for (let passTime of passTimes) {
    let date = new Date(passTime.risetime * 1000).toLocaleString();
    // let date = new Date();
    console.log(`Next pass at ${date} for ${passTime.duration} seconds!`);
  }
});