function randomRangeNumber(minNumber, maxNumber) {

   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
   
}
randomRangeNumber();

module.exports = randomRangeNumber;