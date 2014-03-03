/// <reference path='_all.ts' />

module app {
    'use strict'

    var myapp: ng.IModule = angular.module('app', ['ngRoute'])

    myapp.controller('ctrl', ScaffoldCtrl.prototype.injection())

    myapp.service('service', ScaffoldService.prototype.injection())

    myapp.directive('directive', ScaffoldDirective.prototype.injection())

    myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
		$routeProvider.when('/home', {templateUrl: 'partials/home.html'}).
		otherwise({redirectTo: '/home'})
  	}])
}