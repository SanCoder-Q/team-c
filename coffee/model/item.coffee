class Item
  constructor: (@barcode, @name, @unit, price) ->
    @price = price or 0.00
    @amount = 0
    @sumPrice = 0
