class utils
  dateDigitToString = (num) ->
    if num < 10 then '0' + num else num
  getDate: ->
    currentDate = new Date()
    year = dateDigitToString currentDate.getFullYear()
    month = dateDigitToString currentDate.getMonth() + 1
    date = dateDigitToString currentDate.getDate()
    hour = dateDigitToString currentDate.getHours()
    minute = dateDigitToString currentDate.getMinutes()
    second = dateDigitToString currentDate.getSeconds()
    year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second

Array::saveInLocal = (key) ->
  localStorage[key] = angular.toJson @ if typeof key is 'string'
  return

Array::getFromLocal = (key) ->
  if typeof key is 'string' and localStorage[key]?
    list = JSON.parse localStorage[key]
    if list instanceof Array
      @.push(item) for index, item of list
  return

Array::getElementByKey = (value, key) ->
  if typeof key is 'string'
    _.find @, ((item)->item[key] is value)

Object.defineProperties Array.prototype, (
  'saveInLocal' : enumerable : false
  'getFromLocal' : enumerable : false
  'getElementByKey' : enumerable : false)
