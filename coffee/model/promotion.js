var Promotion;

Promotion = (function() {
  function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
  }

  return Promotion;

})();
