app.controller('filesController', ['$scope', '$http', '$location', 'Auth', function($scope, $http, $location,  Auth) {
    $scope.attemptToLogin = function() {
        $scope.loading = true;

        Auth.login({
            'email': $scope.email,
            'password': $scope.password
        })
            .then(function(data) {
                $scope.loading = false;
                if(data.status === 'success'){
                    $location.path('/');
                }
                else {
                    console.log('Auth failed');
                }
            });
    };
}]);