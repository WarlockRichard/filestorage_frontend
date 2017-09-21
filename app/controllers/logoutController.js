app.controller('filesController', ['$scope', '$location', 'Auth', function($scope, $location,  Auth) {
    $scope.loading = true;

    Auth.logout()
        .then(function(data) {
            $scope.loading = false;

            if(data.status !== 'success') {
                console.log('Still logged in');
            }
            console.log('Logged off');
            $location.path('/');
        });
}]);