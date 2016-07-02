angular.module("brofile").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){
    $scope.party = $meteor.object(Parties, $stateParams.partyId);
}]);