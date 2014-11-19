class ShoppingCart
  constructor: ->
    @itemList = []
    @sumPrice = 0.0
    @itemAmount = 0

    $(window).on 'beforeunload', (event) =>
      @itemList.saveInLocal 'ShoppingCart_itemList'
      return
    @itemList.getFromLocal 'ShoppingCart_itemList'
    updateCart.call @

  updateCart = ->
    @sumPrice = _.reduce @itemList, ((sum, item) -> sum + item.sumPrice), 0, @
    @itemAmount = _.reduce @itemList, ((sum, item) -> sum + item.amount), 0, @
    return

  addItem : (barcode) ->
    items = loadAllItems()
    item = @itemList.getElementByKey barcode, 'barcode'
    if item?
      item.amount++
      item.sumPrice = item.amount * item.price
    else
      item = items.getElementByKey barcode, 'barcode'
      item.amount = 1
      item.sumPrice = item.price
      @itemList.push item
    updateCart.call @
