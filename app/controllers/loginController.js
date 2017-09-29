app.controller('loginController', ['$scope', '$http', 'Auth', function($scope, $http,  Auth) {
    // $scope.$on('$routeChangeStart', function(scope, next, current) {
    if($scope.$parent.isLoggedIn = !Auth.checkGuest()){
        return;
    }
    // });
    // Auth.checkGuest();
    $scope.attemptToLogin = function() {
        Auth.login({
            'email': $scope.email,
            'password': $scope.password
        });
    };
}]);