function ShoppingCart() {

  this.goodList = [];
  this.sumPrice = 0.0;
  this.itemAmount = 0;

  this.updateCart = function() {
    var sumPrice = 0;
    var amount = 0;
    this.goodList.forEach(function(item) {
      amount += item.amount;
      sumPrice += item.amount * item.price;
    });
    this.sumPrice = sumPrice;
    this.itemAmount = amount;
  };

  this.addItem = function(barcode) {
    var items = loadAllItems();
    var item = this.goodList.getElementByKey(barcode, "barcode");
    if(item === undefined) {
      item = items.getElementByKey(barcode, "barcode");
      item.amount = 1;
      this.goodList.push(item);
    }
    else {
      item.amount ++;
    }
    this.updateCart();
  };

  var thisClosure = this;
  $(window).on('beforeunload', function() {
    thisClosure.goodList.saveInLocal("ShoppingCart_goodList");
  });

  this.goodList.getFromLocal("ShoppingCart_goodList");
  this.updateCart();
}
