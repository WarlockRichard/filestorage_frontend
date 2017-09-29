<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Filestorage</title>

    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" charset="utf-8">
    <link rel="stylesheet" href="/src/css/dropzone.css" charset="utf-8">
    <link rel="stylesheet" href="/src/css/ng-dropzone.min.css" charset="utf-8">


</head>
<body ng-app="App">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#/!" ng-click="selectedTab='files'">Filestorage</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto" ng-show="isLoggedIn">
            <li class="nav-item">
                <a class="nav-link" href="#/!">
                    My Files
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#!upload">
                    Upload
                </a>
            </li>
        </ul>
        <div class="my-2 my-lg-0">
            <span class="nav-item" ng-hide="isLoggedIn">
                <a class="nav-link" href="#!login">Login</a>
            </span>
            <span class="nav-item" ng-show="isLoggedIn">
                <a class="nav-link" href="#!logout">Logout</a>
            </span>
        </div>
    </div>
</nav>
<div ng-view style="margin-top: 72px">

</div>


<!--<script src="src/js/ng-dropzone.js" charset="utf-8"></script>-->

<script src="/node_modules/angular/angular.js"></script>
<script src="/node_modules/angular-route/angular-route.min.js"></script>
<script src="/node_modules/jquery/dist/jquery.min.js"></script>
<script src="/node_modules/angular-locker/dist/angular-locker.min.js"></script>

<script src="src/js/dropzone.js" charset="utf-8"></script>
<script src="src/js/ng-dropzone.min.js" charset="utf-8"></script>
<script src="app/modules/app.js" charset="utf-8"></script>
<script src="app/services/authService.js" charset="utf-8"></script>
<script src="app/services/fileService.js" charset="utf-8"></script>
<script src="app/controllers/headerController.js" charset="utf-8"></script>
<script src="app/controllers/loginController.js" charset="utf-8"></script>
<script src="app/controllers/logoutController.js" charset="utf-8"></script>
<script src="app/controllers/filesController.js" charset="utf-8"></script>
<script src="app/controllers/uploadController.js" charset="utf-8"></script>
<script src="app/filters/bytes.js" charset="utf-8"></script>
<script src="app/config/routes.js" charset="utf-8"></script>
</body>
</html>