app.controller('filesController',['$scope', '$http', 'File', 'Auth', function($scope, $http, File, Auth) {
    // console.log(Auth.checkUser());
    $scope.isLoggedIn = Auth.checkUser();
    // $scope.isLoggedIn = Auth.isLoggedIn()
    File.all()
        .then(function (response) {
            Auth.checkStatus(response);
            $scope.files =  response.data;
        });



    $scope.deleteFile = function(id) {
        $scope.loading = true;

        File.destroy(id)
            .then(function(data) {
                File.all()
                    .then(function(response) {
                        Auth.checkStatus(response);
                        $scope.files = response.data;
                        $scope.loading = false;
                    });

            });
    };
}]);