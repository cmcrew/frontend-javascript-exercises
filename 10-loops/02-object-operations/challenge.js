module.exports.copy = function(obj) {
  var result = {};
  for (i in obj ) {
    result[i] = obj[i];
  }
  return result;
};

module.exports.extend = function(dest, src) {
  for (i in src) {
    dest[i] = src[i]
  }
  return dest;
};

module.exports.hasElems = function(obj, arr) {
  var keys = [];
  for (i in obj) {
    keys.push(i);
  }
  for (var i = 0; i < arr.length; i++) {
    if (keys.indexOf(arr[i]) == -1) {
      return false;
    }
  } 
  return true;
};