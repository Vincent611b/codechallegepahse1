const readline = require('readline');

const vin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

vin.question('Enter the speed of the car: ', (speed) => {
  speed = parseFloat(speed);

  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let demeritPoints = 0;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log(`Demerit points: ${demeritPoints}`);
  } 
if (demeritPoints >= 12)
  console.log('license suspended')

if (demeritPoints >= 20)
  console.log('You are under arrest')

  vin.close();
});
