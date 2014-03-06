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

    var ScaffoldDirective = (function () {
        function ScaffoldDirective() {
            this.templateUrl = 'partials/templates/directive.html';
            this.restrict = 'E';
        }
        ScaffoldDirective.prototype.injection = function () {
            return [
                function () {
                    return new ScaffoldDirective();
                }
            ];
        };

        ScaffoldDirective.prototype.link = function ($scope, element, attributes) {
            element.text("i'm a directive");
        };
        return ScaffoldDirective;
    })();
    app.ScaffoldDirective = ScaffoldDirective;
})(app || (app = {}));
/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var ScaffoldCtrl = (function () {
        function ScaffoldCtrl() {
        }
        ScaffoldCtrl.prototype.injection = function () {
            return [
                new ScaffoldCtrl()
            ];
        };
        return ScaffoldCtrl;
    })();
    app.ScaffoldCtrl = ScaffoldCtrl;
})(app || (app = {}));
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
