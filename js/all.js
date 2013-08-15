/// <reference path='../_all.ts' />
var angularTs;
(function (angularTs) {
    'use strict';

    var Coffee = (function () {
        function Coffee(milk, size, name) {
            this.milk = milk;
            this.size = size;
            this.name = name;
        }
        return Coffee;
    })();
    angularTs.Coffee = Coffee;

    var Milk = (function () {
        function Milk(size, type) {
            this.size = size;
            this.type = type;
        }
        return Milk;
    })();
    angularTs.Milk = Milk;
})(angularTs || (angularTs = {}));
/// <reference path='../_all.ts' />
var angularTs;
(function (angularTs) {
    'use strict';

    var FirstCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in App.ts and invoked from ng-controller attribute in index.html
        function FirstCtrl($scope) {
            $scope.vm = this;
            this.member = 0;
        }
        FirstCtrl.prototype.injection = function () {
            return [
                '$scope',
                FirstCtrl
            ];
        };

        FirstCtrl.prototype.inc = function () {
            this.member++;
        };

        FirstCtrl.prototype.dec = function () {
            this.member--;
        };
        return FirstCtrl;
    })();
    angularTs.FirstCtrl = FirstCtrl;
})(angularTs || (angularTs = {}));
/// <reference path='../_all.ts' />
var angularTs;
(function (angularTs) {
    'use strict';

    var SecCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in App.ts and invoked from ng-controller attribute in index.html
        function SecCtrl($scope, $http) {
            $scope.vm = this;
            this.http = $http;
        }
        SecCtrl.prototype.injection = function () {
            return [
                '$scope',
                '$http',
                SecCtrl
            ];
        };

        SecCtrl.prototype.load = function () {
            var _this = this;
            this.http.get('http://localhost/angularTS/coffee.json').success(function (data, status) {
                return _this.coffee = data;
            });
        };
        return SecCtrl;
    })();
    angularTs.SecCtrl = SecCtrl;
})(angularTs || (angularTs = {}));
/// <reference path='_all.ts' />
var angularTs;
(function (angularTs) {
    'use strict';

    var showcase = angular.module('showcase', []);

    showcase.controller('firstCtrl', angularTs.FirstCtrl.prototype.injection());
    showcase.controller('secCtrl', angularTs.SecCtrl.prototype.injection());

    showcase.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/first', { templateUrl: 'partials/part1.html', controller: 'firstCtrl' }).when('/second', { templateUrl: 'partials/part2.html', controller: 'secCtrl' }).otherwise({ redirectTo: '/first' });
        }
    ]);
})(angularTs || (angularTs = {}));
