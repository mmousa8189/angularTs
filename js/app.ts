/// <reference path='_all.ts' />

module angularTs {
    'use strict';

    var showcase = angular.module('showcase', []);

    showcase.controller('firstCtrl', FirstCtrl.prototype.injection());
    showcase.controller('secCtrl', SecCtrl.prototype.injection());

    showcase.config(['$routeProvider', function($routeProvider) {
		    $routeProvider.when('/first', {templateUrl: 'partials/part1.html', controller: 'firstCtrl'}).
		    when('/second', {templateUrl: 'partials/part2.html', controller: 'secCtrl'}).
		    otherwise({redirectTo: '/first'});
  		}]);
}