app.controller('filesController',['$scope', '$http', 'File', 'Auth', function($scope, $http, File, Auth) {
    // console.log(Auth.checkUser());
    // $scope.$on('$routeChangeStart', function(scope, next, current) {
    if(!($scope.$parent.isLoggedIn = Auth.checkUser())){
        return;
    }
    // });
    // $scope.isLoggedIn = Auth.isLoggedIn()
    File.all()
        .then(function (response) {
            $scope.files =  response.data;
        },function (response) {
            Auth.checkStatus(response);
        });



    $scope.deleteFile = function(id) {
        File.destroy(id)
            .then(function(data) {
                File.all()
                    .then(function(response) {
                        $scope.files = response.data;
                    },function (response) {
                        Auth.checkStatus(response);
                    });

            });
    };
}]);