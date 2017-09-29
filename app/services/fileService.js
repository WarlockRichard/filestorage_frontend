app.factory('File',['$http', 'Auth', function($http, Auth) {
    return {

        all :function () {
            return $http({
                method: 'GET',
                url: 'http://backend.dev/api/files',
                headers: {
                    'Authorization' : 'Bearer ' + Auth.getToken()
                }
            });
        },

        show : function($id) {
            return  $http({
                method: 'GET',
                url: 'http://backend.dev/api/files/' + $id,
                headers: {
                    'Authorization' : 'Bearer ' + Auth.getToken()
                }
            });
        },

        store : function(data) {
            return $http({
                method: 'POST',
                url: 'http://backend.dev/api/files',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Bearer ' + Auth.getToken()
                },
                data: $.param(data)
            });
        },

        destroy : function(id) {
            return $http({
                method: 'DELETE',
                url: 'http://backend.dev/api/files/' + id,
                headers: {
                    'Authorization' : 'Bearer ' + Auth.getToken()
                }
            });
        }
    }

}]);