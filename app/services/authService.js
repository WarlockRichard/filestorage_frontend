app.factory('Auth', ['$http', 'locker', function($http, locker) {
    return {
        login :function ($credentials) {
            $http({
                method: 'POST',
                url: 'http://backend.dev/api/auth/login',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param($credentials)
            }).then(function (data) {
                locker.put('jwt', data.token);
            });
        },

        logout : function() {
            return $http({
                method: 'GET',
                url: 'http://backend.dev/api/auth/logout',
                headers: {
                    'Authentication' : 'Bearer : ' + locker.get('jwt')
                }
            });
        },

        getUser : function() {
            return $http({
                method: 'POST',
                url: 'http://backend.dev/api/auth/user',
                headers: {
                    'Authentication' : 'Bearer : ' + locker.get('jwt')
                }
            });
        }
    }

}]);