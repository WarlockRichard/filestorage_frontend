app.controller('logoutController', ['$scope', '$location', 'Auth', function($scope, $location,  Auth) {

    Auth.logout();
}]);