function ShoppingCart() {

  this.itemList = [];
  this.sumPrice = 0.0;
  this.itemAmount = 0;

  function updateCart() {
    var sumPrice = 0;
    var amount = 0;
    $.each(this.itemList, function(index, item) {
      amount += item.amount;
      sumPrice += item.sumPrice;
    });
    this.sumPrice = sumPrice;
    this.itemAmount = amount;
  }

  this.addItem = function(barcode) {
    var items = loadAllItems();
    var item = this.itemList.getElementByKey(barcode, "barcode");
    if(item === undefined) {
      item = items.getElementByKey(barcode, "barcode");
      item.amount = 1;
      item.sumPrice = item.price;
      this.itemList.push(item);
    }
    else {
      item.amount ++;
      item.sumPrice = item.amount * item.price;
    }
    updateCart.call(this);
  };

  var thisClosure = this;
  $(window).on('beforeunload', function() {
    thisClosure.itemList.saveInLocal("ShoppingCart_itemList");
  });

  this.itemList.getFromLocal("ShoppingCart_itemList");
  updateCart.call(this);
}
