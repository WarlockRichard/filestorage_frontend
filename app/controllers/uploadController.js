app.controller('uploadController',['$scope', '$http', '$location', 'File',  function($scope, $http, $location, File) {

    //Set options for dropzone
    //Visit http://www.dropzonejs.com/#configuration-options for more options
    $scope.dzOptions = {
        url : '/upload',
        acceptedFiles : $scope.type,//'image/jpeg, images/jpg, image/png',
        addRemoveLinks : true,
        dictDefaultMessage : 'Click to add or drop file',
        dictRemoveFile : 'Remove file',
        dictResponseError : 'Could not upload this file',
        parallelUploads : 5,
        autoProcessQueue : false
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