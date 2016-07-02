angular.module('brofile')
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  })
  .controller('PartiesListCtrl', [
    '$scope', 
    '$rootScope', 
    '$meteor', 
    function ($scope, $rootScope, $meteor) {

        $scope.parties = $meteor.collection(Parties).subscribe('parties');

        $scope.addVideo = function(video) {
          video.owner = $rootScope.currentUser._id;
          video.public = true;
          if (video.type === 'youtube') {
            // video.videoId = video.url.match("watch?v=(.*)&")[1];
            video.url = video.url.replace("watch?v=", "embed/");
          }
          $scope.parties.push(video); 
          $scope.newVideo = '';
        };
   
         $scope.remove = function(party) {
            $scope.parties.remove(party);
        };
}]);