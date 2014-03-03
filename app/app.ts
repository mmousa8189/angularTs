/// <reference path='_all.ts' />

module app {
    'use strict'

    var myapp = angular.module('app', ['ngRoute'])

    myapp.controller('homeCtrl', HomeCtrl.prototype.injection())

    myapp.service('service', ScaffoldService.prototype.injection())

    //myapp.directive('userService', UserService)

    myapp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {templateUrl: 'partials/home.html'}).
		otherwise({redirectTo: '/home'})
  	}])
}