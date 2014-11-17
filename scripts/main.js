$(document).ready(function () {
 var shoppingCart = new ShoppingCart();

  var feature = (function () {
    var initItems = function () {
      var items = loadAllItems();
      _(items).each(function (item, index) {
        var addCart = '<button id="btn-'+index+'">加入购物车</button>';
        var listItem = $('<tr class="itemRow">\
                          <td>' + item.name + '</td>\
                          <td>' + item.price + '</td>\
                          <td>' + item.unit + '</td>\
                          <td>' + addCart + '</td>\
                          </tr>');
        $('#item-table').append(listItem);
      });
      $('.itemRow button').each(function(i){
        $(this).click(function(event) {
          event.preventDefault();
          var itemIndex = parseInt($(event.target).attr("id").split("-")[1]);
          shoppingCart.addItem(items[itemIndex].barcode);
          printItemAmount();
        });
      });
    };

    var printItemList = function() {
      $.each(shoppingCart.itemList, function(index, item){
        var itemRow = $('<tr>\
                        <td>' + item.name + '</td>\
                        <td>' + item.price.toFixed(2) + '</td>\
                        <td>' + item.unit + '</td>\
                        <td>' + item.amount + '</td>\
                        <td>' + item.sumPrice.toFixed(2) + '</td>\
                        </tr>');
        $('#itemList').append(itemRow);
      });
    };

    var printDate = function() {
      $("#pay-date").text(utils.getDate());
    };

    var printItemAmount = function() {
      $("#count").text(shoppingCart.itemAmount);
    };

    var printSumPrice = function() {
      $("#sumPrice").text(shoppingCart.sumPrice.toFixed(2) + "元");
    };

    return {
      init: initItems,
      printItemList: printItemList,
      printDate: printDate,
      printItemAmount: printItemAmount,
      printSumPrice: printSumPrice
    };
  })();

  feature.init();
  feature.printDate();
  feature.printItemList();
  feature.printItemAmount();
  feature.printSumPrice();
});
