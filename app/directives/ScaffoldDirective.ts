/// <reference path='../_all.ts' />

module app {
    'use strict'

    export class ScaffoldDirective implements ng.IDirective {

    	public injection(): Array<any> {
            return [
                () => { 
                    return new ScaffoldDirective() 
                }
            ]
        }
    	
        public templateUrl: string
    	public restrict: string

        constructor() {
            this.templateUrl = 'partials/templates/directive.html'
            this.restrict = 'E'
        }

        public link ($scope: ng.IScope, element: JQuery, attributes: ng.IAttributes): void {
            element.text("i'm a directive")
        }

    }

}