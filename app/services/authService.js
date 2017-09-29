app.factory('Auth', [ '$http', '$location', 'locker', function($http, $location, locker) {
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
                        console.log(response);
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
                    'Authorization' : 'Bearer ' + locker.get('jwt')
                }
            }).then(function (response) {
                locker.forget('jwt');
                $location.path('/login');
                $location.replace();
            }, function (response) {
                locker.forget('jwt');
                console.log(response);
                $location.path('/login');
                $location.replace();
            });
        },

        getUser : function() {
            if(locker.has('jwt')){
                $location.path('/login');
            }
            return $http({
                method: 'POST',
                url: 'http://backend.dev/api/auth/user',
                headers: {
                    'Authorization' : 'Bearer ' + locker.get('jwt')
                }
            });
        },
        getToken : function () {
            return locker.get('jwt');
        },
        isLoggedIn : function () {
            return locker.has('jwt');
        },
        checkUser : function () {
            if(locker.has('jwt')){
                return true;
            }
            else {
                $location.path('/login');
                $location.replace();
                return false;
            }
        },
        checkGuest : function () {
            return locker.has('jwt')?$location.path('/'):true;
        },
        checkStatus: function (response){
            console.log(response.status);
            if(response.status === 401){
                locker.forget('jwt');
                $location.path('/login')
            }
        }
    }

}]);