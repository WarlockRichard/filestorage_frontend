app.factory('File',['$http', 'Auth', function($http, Auth) {
    console.log(Auth.checkUser());
    return {

        all :function () {
            var response = $http.get('http://backend.dev/api/files');
            Auth.checkStatus(response);
            return response;
        },

        show : function($id) {
            var response =  $http.get('http://backend.dev/api/files/' + $id);
            Auth.checkStatus(response);
            return response;
        },

        store : function(data) {
            var response = $http({
                method: 'POST',
                url: 'http://backend.dev/api/files',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(data)
            });
            Auth.checkStatus(response);
            return response;
        },

        destroy : function(id) {
            var response = $http.delete('http://backend.dev/api/files/' + id);
            Auth.checkStatus(response);
            return response;
        }
    }

}]);