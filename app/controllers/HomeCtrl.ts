/// <reference path='../_all.ts' />


module app {
    'use strict'
    
    export class HomeCtrl {

        public injection(): Array<any> {
            return [
                '$scope',
                HomeCtrl
            ]
        }

        private member: number
    
        constructor($scope: ng.IScope) { 
            this.member = 0
        }

        private inc(): void {
            this.member++
        }

        private dec(): void {
            this.member--
        }
    }

}
