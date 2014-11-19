shoppingCartApp = angular.module 'shoppingCartApp', []

shoppingCartApp.controller 'ShoppingCartCtrl', (($scope)->
  $scope.items = loadAllItems()
  $scope.shoppingCart = new ShoppingCart()
  $scope.date = utils::getDate()
  return
)
