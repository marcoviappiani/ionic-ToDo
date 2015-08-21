
angular.module('todo', ['ionic'])


.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    {title: 'Collect coins'},
    {title: 'Eat mushrooms'},
    {title: 'Get high enough to grab the flah'},
    {title: 'Find the Princess'}
  ];
});