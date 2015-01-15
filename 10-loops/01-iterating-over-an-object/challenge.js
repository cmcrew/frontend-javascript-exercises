module.exports.getKeys = function(obj) {
  var result = [];
  for (var k in obj ) {
    result.push(k);
  }
  return result;
};

module.exports.getValues = function(obj) {
  var result = [];
  for (var key in obj) {
    result.push(obj[key]);
  }
  return result;
};

module.exports.objectToArray = function(obj) {
  var result = [];
  for (key in obj) {
    result.push(key + " is " + obj[key]);
  }
  return result;
};