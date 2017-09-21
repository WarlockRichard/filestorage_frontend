<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Filestorage</title>

    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700,300&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="src/css/styles.css" media="screen" title="no title" charset="utf-8">
</head>
<body ng-app="App">
<section class="menu">
    <div class="menu-list">
        <a ng-class="{'active':selectedTab === 'files'}" ng-click="selectedTab = 'files'" href="#/!">Мои файлы</a>
        <a ng-class="{'active':selectedTab === 'upload'}" ng-click="selectedTab = 'upload'" href="#!upload">Загрузить</a>
        <a ng-show="{is_logged_in}" href="#!logout">Выйти</a>
        <a ng-hide="{is_logged_in}" href="#!login">Войти</a>
    </div>
</section>
<div ng-view>

</div>
<!--<section class="popuperror-container" ng-controller="indexPopupError">-->
<!--    <div class="popuperror-overlay" ng-click="hide()"></div>-->
<!--    <div class="popuperror-body">-->
<!--        <div class="popuperror-message"></div>-->
<!--        <div class="btn" ng-click="hide()">-->
<!--            Закрыть-->
<!--        </div>-->
<!--    </div>-->
<!--</section>-->
<script src="/node_modules/angular/angular.js"></script>
<script src="/node_modules/angular-route/angular-route.min.js"></script>
<script src="/node_modules/jquery/dist/jquery.min.js"></script>
<script src="/node_modules/angular-locker/dist/angular-locker.min.js"></script>

<script src="app/modules/app.js" charset="utf-8"></script>
<script src="app/services/fileService.js" charset="utf-8"></script>
<script src="app/controllers/filesController.js" charset="utf-8"></script>
<script src="app/controllers/uploadController.js" charset="utf-8"></script>
<script src="app/config/routes.js" charset="utf-8"></script>

</body>
</html>