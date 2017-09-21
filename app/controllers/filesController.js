app.controller('filesController',['$scope', '$http', 'File', function($scope, $http, File) {
    File.all().then(
        function success(response) {
            $scope.files = response.data;
            $scope.loading = false;
        });



    $scope.deleteFile = function(id) {
        $scope.loading = true;

        File.destroy(id)
            .then(function(data) {
                File.all()
                    .then(function(response) {
                        $scope.files = response.data;
                        $scope.loading = false;
                    });

            });
    };
}]);