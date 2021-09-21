function convertToInt(str) {

    return parseInt(str, 16);   
}

convertToInt("BA");
convertToInt("JeffBezos");

module.exports = convertToInt;