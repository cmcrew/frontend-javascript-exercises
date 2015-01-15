module.exports.sumNumbers = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length ; i++) {
    sum += arr[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  var s = inputString.toLowerCase();
  s = s.split(',');
  return s;
};

module.exports.addIndex = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(i + " is " + arr[i]);
  }
  return result;
};
