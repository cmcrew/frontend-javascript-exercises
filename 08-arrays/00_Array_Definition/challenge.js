module.exports.newArray = function(w,x,y,z) {
  return [w,x,y,z];
};

module.exports.firstAndLast = function(arr) {
  var first = arr[0];
  var last = arr[arr.length - 1];
  return [first,last];
};