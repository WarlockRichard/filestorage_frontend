app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/files', {
            templateUrl: '/src/js/templates/files/list.html',
            controller: 'FilesController'
        }).
        when('/login', {
            templateUrl: '/src/js/templates/login.html',
            controller: 'LoginController'
        }).
        when('/logout', {
            controller: 'LogoutController'
        }).
        when('/upload', {
            templateUrl: '/src/js/templates/files/upload.html',
            controller: 'UploadController'
        }).
        otherwise({
            redirectTo: '/projects'
        });
    }
]);