var Item;

Item = (function() {
  function Item(barcode, name, unit, price) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.amount = 0;
    this.sumPrice = 0;
  }

  return Item;

})();