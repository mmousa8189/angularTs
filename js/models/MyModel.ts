/// <reference path='../_all.ts' />

module angularTs {
    'use strict';

    export class Coffee {
        constructor(
        	public milk: Milk,
        	public size: number,
            public name: string){}
    }

    export class Milk {
        constructor(
            public size: number,
            public type: string){}
    }
}
