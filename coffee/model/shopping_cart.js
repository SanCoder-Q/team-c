var ShoppingCart;

ShoppingCart = (function() {
  var updateCart;

  function ShoppingCart() {
    this.itemList = [];
    this.sumPrice = 0.0;
    this.itemAmount = 0;
    $(window).on('beforeunload', (function(_this) {
      return function(event) {
        _this.itemList.saveInLocal('ShoppingCart_itemList');
      };
    })(this));
    this.itemList.getFromLocal('ShoppingCart_itemList');
    updateCart.call(this);
  }

  updateCart = function() {
    this.sumPrice = _.reduce(this.itemList, (function(sum, item) {
      return sum + item.sumPrice;
    }), 0, this);
    this.itemAmount = _.reduce(this.itemList, (function(sum, item) {
      return sum + item.amount;
    }), 0, this);
  };

  ShoppingCart.prototype.addItem = function(barcode) {
    var item, items;
    items = loadAllItems();
    item = this.itemList.getElementByKey(barcode, 'barcode');
    if (item != null) {
      item.amount++;
      item.sumPrice = item.amount * item.price;
    } else {
      item = items.getElementByKey(barcode, 'barcode');
      item.amount = 1;
      item.sumPrice = item.price;
      this.itemList.push(item);
    }
    return updateCart.call(this);
  };

  return ShoppingCart;

})();
