module.exports.stream = function(conditionalFn, actionFn) {
  while(conditionalFn() == true) {
    actionFn();
  }
};

module.exports.sumNumbers = function(arr) {
  var result = 0;
  if (arr.length > 0) {
    var i = 0;
    while(i < arr.length) {
      result += arr[i];
      i++;
    }
  }
  return result;
};

