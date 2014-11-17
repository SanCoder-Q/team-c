function ShoppingCart() {
  this.goodList = [];
  this.goodList.getFromLocal("ShoppingCart_goodList");

  var thisClosure = this;
  $(window).on('beforeunload', function() {
    thisClosure.goodList.saveInLocal("ShoppingCart_goodList");
  });

}
