module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  return course;
};

module.exports.addProperty = function(object, newProp, newValue) {
  if (!object[newProp]) {
    object[newProp] = newValue;
  }
  return object;
};

module.exports.formLetter = function(letter) {

  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money) {
  var macBookAir = {price: "999"};
  var macBookPro = {price: "1299"};
  var macPro = {price: "2499"};
  var appleSticker = {price: "1"};

  var buyingOptions = {
    "MacBook Air": macBookAir,
    "MacBook Pro": macBookPro,
    "Mac Pro": macPro,
    "Apple Sticker": appleSticker
  };

  return (buyingOptions[item] != null && money >= buyingOptions[item].price);

};