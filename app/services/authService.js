app.factory('Auth', ['$http', '$location', 'locker', function($http, $location, locker) {
    return {
        login :function ($credentials) {
            if(!locker.has('token')){
                $http({
                    method: 'POST',
                    url: 'http://backend.dev/api/auth/login',
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                    data: $.param($credentials)
                }).then(function (response) {
                    if(response.data.status === 'success'){
                        locker.put('jwt', response.data.token);
                        $location.path('/');
                    }
                    else {
                        console.log('Auth failed');
                        console.log(response);
                    }
                });
            }
            else {
                $location.path('/');
            }

        },

        logout : function() {
            return $http({
                method: 'GET',
                url: 'http://backend.dev/api/auth/logout',
                headers: {
                    'Authentication' : 'Bearer : ' + locker.get('jwt')
                }
            }).then(function (response) {
                locker.forget('jwt');
                console.log(response);
                $location.path('/');
            });
        },

        getUser : function() {
            if(!locker.has('jwt')){
                $location.path('/login');
            }
            return $http({
                method: 'POST',
                url: 'http://backend.dev/api/auth/user',
                headers: {
                    'Authentication' : 'Bearer : ' + locker.get('jwt')
                }
            });
        },
        checkUser : function () {
            return locker.has('jwt')?true:$location.path('/login');
        },
        checkGuest : function () {
            return locker.has('jwt')?$location.path('/'):true;
        },
        isLoggedIn : function () {
            return locker.has('jwt');
        },
        checkStatus: function (response){
            if(response.status === '401'){
                locker.forget('jwt');
                $location.path('/login')
            }
        }
    }

}]);