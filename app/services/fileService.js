app.factory('File',['$http', function($http) {
    return {

        all :function () {
            return $http.get('http://backend.dev/api/files/');
        },

        show : function($id) {
            return $http.get('http://backend.dev/api/files/' + $id);
        },

        store : function(data) {
            return $http({
                method: 'POST',
                url: 'http://backend.dev/api/files',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(data)
            });
        },

        destroy : function(id) {
            return $http.delete('http://backend.dev/api/files/' + id);
        }
    }

}]);