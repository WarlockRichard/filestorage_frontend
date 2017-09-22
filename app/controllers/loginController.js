app.controller('loginController', ['$scope', '$http', 'Auth', function($scope, $http,  Auth) {
    $scope.isLoggedIn = !Auth.checkGuest()
    // Auth.checkGuest();
    $scope.attemptToLogin = function() {
        $scope.loading = true;

        Auth.login({
            'email': $scope.email,
            'password': $scope.password
        });
    };
}]);