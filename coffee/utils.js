var utils;

utils = (function() {
  var dateDigitToString;

  function utils() {}

  dateDigitToString = function(num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  };

  utils.prototype.getDate = function() {
    var currentDate, date, hour, minute, month, second, year;
    currentDate = new Date();
    year = dateDigitToString(currentDate.getFullYear());
    month = dateDigitToString(currentDate.getMonth() + 1);
    date = dateDigitToString(currentDate.getDate());
    hour = dateDigitToString(currentDate.getHours());
    minute = dateDigitToString(currentDate.getMinutes());
    second = dateDigitToString(currentDate.getSeconds());
    return year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  };

  return utils;

})();

Array.prototype.saveInLocal = function(key) {
  if (typeof key === 'string') {
    localStorage[key] = angular.toJson(this);
  }
};

Array.prototype.getFromLocal = function(key) {
  var index, item, list;
  if (typeof key === 'string' && (localStorage[key] != null)) {
    list = JSON.parse(localStorage[key]);
    if (list instanceof Array) {
      for (index in list) {
        item = list[index];
        this.push(item);
      }
    }
  }
};

Array.prototype.getElementByKey = function(value, key) {
  if (typeof key === 'string') {
    return _.find(this, (function(item) {
      return item[key] === value;
    }));
  }
};

Object.defineProperties(Array.prototype, {
  'saveInLocal': {
    enumerable: false
  },
  'getFromLocal': {
    enumerable: false
  },
  'getElementByKey': {
    enumerable: false
  }
});
