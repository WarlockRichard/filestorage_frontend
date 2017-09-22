app.controller('loginController', ['$scope', '$http', 'Auth', function($scope, $http,  Auth) {
    Auth.checkGuest();
    $scope.attemptToLogin = function() {
        $scope.loading = true;

        Auth.login({
            'email': $scope.email,
            'password': $scope.password
        });
    };
}]);