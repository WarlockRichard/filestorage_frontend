app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/app/templates/files/list.html',
            controller: 'filesController'
        }).
        when('/login', {
            templateUrl: '/app/templates/login.html',
            controller: 'loginController'
        }).
        when('/logout', {
            controller: 'logoutController'
        }).
        when('/upload', {
            templateUrl: '/app/templates/files/upload.html',
            controller: 'uploadController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);