var shoppingCartApp;

shoppingCartApp = angular.module('shoppingCartApp', []);

shoppingCartApp.controller('ShoppingCartCtrl', (function($scope) {
  $scope.items = loadAllItems();
  $scope.shoppingCart = new ShoppingCart();
}));