app.controller('logoutController', ['$scope', '$location', 'Auth', function($scope, $location,  Auth) {
    if(!Auth.checkUser()){
        return;
    }
    Auth.logout();
}]);