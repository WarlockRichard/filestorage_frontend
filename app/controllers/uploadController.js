app.controller('uploadController',['$scope', '$http', '$location', 'File', 'Auth',  function($scope, $http, $location, File, Auth) {

    // $scope.isLoggedIn = Auth.isLoggedIn();

    console.log($scope.isLoggedIn = Auth.checkUser());
    //Set options for dropzone
    //Visit http://www.dropzonejs.com/#configuration-options for more options

    $scope.dzOptions = {
        url : 'http://backend.dev/api/files',
        acceptedFiles : 'image/jpeg, images/jpg, image/png',//'image/jpeg, images/jpg, image/png',
        addRemoveLinks : true,
        dictDefaultMessage : 'Click to add or drop file',
        dictRemoveFile : 'Remove file',
        dictResponseError : 'Could not upload this file',
        parallelUploads : 1,
        autoProcessQueue : true,
        headers : {'Authentication' : 'Bearer : ' + Auth.getToken()}
    };
    $scope.change = function() {
        var acceptedFiles;
        if($scope.type == 'image'){
            acceptedFiles= 'image/jpeg, images/jpg, image/png';
        }
        else if($scope.type == 'text'){
            acceptedFiles = 'application/pdf';
        }
        else if($scope.type == 'other'){
            acceptedFiles = '';
        }
        $scope.dzOptions = {
            url : 'http://backend.dev/api/files',
            acceptedFiles : acceptedFiles,//'image/jpeg, images/jpg, image/png',
            addRemoveLinks : true,
            dictDefaultMessage : 'Click to add or drop file',
            dictRemoveFile : 'Remove file',
            dictResponseError : 'Could not upload this file',
            parallelUploads : 5,
            autoProcessQueue : true,
            headers : {'Authentication' : 'Bearer : ' + Auth.getToken()}
        };
    };

    $scope.dzCallbacks = {
        'addedfile' : function(file){
            console.info('File added.', file);
        }
    };

    $scope.data = {};

    $scope.loading = true;

    $scope.commitUpload = function() {
        $scope.loading = true;

        File.store($scope.data)
            .then(function success(response) {
                    $location.path('/');
                },
                function error(response) {
                    console.log(response.data);
                });
    };

}]);