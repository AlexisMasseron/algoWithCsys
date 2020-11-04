/*
  Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

  For example:

  nextVersion("1.2.3") === "1.2.4";
  nextVersion("0.9.9") === "1.0.0";
  nextVersion("1") === "2";
  nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
  nextVersion("9.9") === "10.0";

  Rules:
  All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in sequence.
*/

function nextVersion(version){
  // code here...
}

module.exports = nextVersion;