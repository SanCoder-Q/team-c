shoppingCartApp = angular.module 'shoppingCartApp', []

shoppingCartApp.controller 'ShoppingCartCtrl', (($scope)->
  $scope.items = loadAllItems()
  $scope.shoppingCart = new ShoppingCart()
  return
)
