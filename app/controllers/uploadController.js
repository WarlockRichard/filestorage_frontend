app.controller('uploadController',['$scope', '$http', '$location', 'File', 'Auth',  function($scope, $http, $location, File, Auth) {

    // $scope.$on('$routeChangeStart', function(scope, next, current) {
    if(!($scope.$parent.isLoggedIn = Auth.checkUser())){
        return;
    }
    // });
    //Set options for dropzone
    //Visit http://www.dropzonejs.com/#configuration-options for more optionsar acceptedTypes = ['jpg', 'svg', 'png'];
    $scope.dzOptions = {
        url : 'http://backend.dev/api/files',
        paramName: 'file',
        acceptedFiles : 'image/jpeg, images/jpg, image/png, application/pdf, text/plain',//'image/jpeg, images/jpg, image/png',
        addRemoveLinks : true,
        dictDefaultMessage : 'Click to add or drop file',
        dictRemoveFile : 'Remove file',
        dictResponseError : 'Could not upload this file',
        parallelUploads : 1,
        autoProcessQueue : true,
        accept: function(file, done) {
            if($scope.type === 'image'){
                acceptedFiles = ['jpg', 'svg', 'png'];
            }
            else if($scope.type === 'text'){
                acceptedFiles = ['pdf', 'txt'];
            }
            else
                done();
            if ($.inArray(file.name.slice(-3), acceptedFiles ) >= 0) {
                //accepted file
                done();
            }
            else {
                //Unaccepted file revert
                this.removeFile(file);
            }
        },
        headers : {'Authorization' : 'Bearer ' + Auth.getToken()}
    };

    $scope.dzCallbacks = {
        'success' : function(file){
                $location.path('/');
            // File.store(file);
        }
    };

    $scope.data = {};


    $scope.commitUpload = function() {

        File.store($scope.data)
            .then(function success(response) {
                    $location.path('/');
                },
                function error(response) {
                    console.log(response.data);
                });
    };

}]);