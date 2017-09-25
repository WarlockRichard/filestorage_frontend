app.controller('loginController', ['$scope', '$http', 'Auth', function($scope, $http,  Auth) {
    $scope.$parent.isLoggedIn = !Auth.checkGuest();
    // Auth.checkGuest();
    $scope.attemptToLogin = function() {
        $scope.loading = true;

        Auth.login({
            'email': $scope.email,
            'password': $scope.password
        });
    };
}]);