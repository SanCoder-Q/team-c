class Promotion
  constructor: (@type, barcodes) ->
    @barcodes = barcodes or []
