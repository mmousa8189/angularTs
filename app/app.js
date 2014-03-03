/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var ScaffoldModel = (function () {
        function ScaffoldModel() {
        }
        return ScaffoldModel;
    })();
    app.ScaffoldModel = ScaffoldModel;
})(app || (app = {}));
/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var ScaffoldService = (function () {
        function ScaffoldService() {
        }
        ScaffoldService.prototype.injection = function () {
            return [
                ScaffoldService
            ];
        };
        return ScaffoldService;
    })();
    app.ScaffoldService = ScaffoldService;
})(app || (app = {}));
/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var HomeCtrl = (function () {
        function HomeCtrl($scope) {
            this.member = 0;
        }
        HomeCtrl.prototype.injection = function () {
            return [
                '$scope',
                HomeCtrl
            ];
        };

        HomeCtrl.prototype.inc = function () {
            this.member++;
        };

        HomeCtrl.prototype.dec = function () {
            this.member--;
        };
        return HomeCtrl;
    })();
    app.HomeCtrl = HomeCtrl;
})(app || (app = {}));
/// <reference path='_all.ts' />
var app;
(function (app) {
    'use strict';

    var myapp = angular.module('app', ['ngRoute']);

    myapp.controller('homeCtrl', app.HomeCtrl.prototype.injection());

    myapp.service('service', app.ScaffoldService.prototype.injection());

    //myapp.directive('userService', UserService)
    myapp.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/home', { templateUrl: 'partials/home.html' }).otherwise({ redirectTo: '/home' });
        }
    ]);
})(app || (app = {}));
