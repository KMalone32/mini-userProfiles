angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.getUsers = function() {
        $scope.users = mainService.getData();
        return $scope.users;
    }
    $scope.getUsers();
    
    $scope.toggleFavorite = mainService.toggleFavorite;
   
});