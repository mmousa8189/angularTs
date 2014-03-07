/// <reference path='_all.ts' />
var app;
(function (app) {
    'use strict';

    var myapp = angular.module('app', ['ngRoute']);

    myapp.controller('ctrl', app.ScaffoldCtrl.prototype.injection());

    myapp.service('service', app.ScaffoldService.prototype.injection());

    myapp.directive('directive', app.ScaffoldDirective.prototype.injection());

    myapp.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/home', { templateUrl: 'partials/home.html' }).otherwise({ redirectTo: '/home' });
        }
    ]);
})(app || (app = {}));
