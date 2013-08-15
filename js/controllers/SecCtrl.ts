/// <reference path='../_all.ts' />

module angularTs {
    'use strict';

    export interface ISecScope extends ng.IScope {
        vm: SecCtrl;
    }

    export class SecCtrl {

      private coffee: Coffee;
      private http: any;
      
      public injection(): any[] {
            return [
                '$scope',
                '$http',
                SecCtrl
            ]
        }

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in App.ts and invoked from ng-controller attribute in index.html
        constructor($scope: ISecScope, $http: ng.IHttpService) { 
            $scope.vm = this;
            this.http = $http;
        }

        load() {
            this.http.get('http://localhost/angularTS/coffee.json').success(
                (data, status) => this.coffee = <Coffee>data
            );
        }
    }

}