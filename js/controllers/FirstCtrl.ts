/// <reference path='../_all.ts' />

module angularTs {
    'use strict';

    export interface IFirstScope extends ng.IScope {
        vm: FirstCtrl;
    }

    export class FirstCtrl {

      private member: number;
      
      public injection(): any[] {
            return [
                '$scope',
                FirstCtrl
            ]
        }

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in App.ts and invoked from ng-controller attribute in index.html
        constructor($scope: IFirstScope) { 
            $scope.vm = this;
            this.member = 0;
        }

        inc() {
            this.member++;
        }

        dec() {
            this.member--;
        }
    }

}
