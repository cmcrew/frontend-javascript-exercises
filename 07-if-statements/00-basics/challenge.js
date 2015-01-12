module.exports.favoriteNumber = function(fav, guess) {
  if(guess > fav) {
    return "Too high";
  }
  else if (guess < fav) {
    return "Too low";
  }
  else {
    return "You got it!";
  }
};

module.exports.checkLock = function(w,x,y,z) {
  if ((w == 3 || w == 5 || w == 7) && (x == 2) && (5 <= y && y <= 100) && (z < 9 || z > 20)) {
    return "correct";
  }
  else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money) {
  if ((item == "MacBook Air" && money >= 999) || (item == "MacBook Pro" && money >= 1299) || (item == "Mac Pro" && money >= 2499) || (item == "Apple Sticker" && money >= 1)){
    return true;
  }
  
  else if (item != "MacBook Air" || item != "MacBook Pro" || item != "Mac Pro" || item != "Apple Sticker") {
    return false;
  }
  else {
    return false;
  }
};