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


    $scope.downloadFile = function(id) {
        File.download(id)
            .then(function (data) {
                console.log(data)
            });
    };



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
    $scope.downloadFile = function (id, name) {
        File.download(id).then(function (response) {
            console.log(response);
            console.log(response.headers);
            var filename = name.slice(0, -4);
            var headers = response.headers;
            var contentType = headers('content-type');

            var linkElement = document.createElement('a');
            try {
                var blob = new Blob([response.data], { type: contentType });
                var url = window.URL.createObjectURL(blob);

                linkElement.setAttribute('href', url);
                linkElement.setAttribute("download", filename);

                var clickEvent = new MouseEvent("click", {
                    "view": window,
                    "bubbles": true,
                    "cancelable": false
                });
                linkElement.dispatchEvent(clickEvent);
            } catch (e) {
                console.log(e);
            }
        }, function (response) {
            console.log(response);
        });
    };
}]);