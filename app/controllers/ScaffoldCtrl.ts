/// <reference path='../_all.ts' />

module app {
    'use strict'
    
    export class ScaffoldCtrl {

        public injection(): Array<any> {
            return [
                new ScaffoldCtrl()
            ]
        }
    
        constructor() { 
        }
    }

}
