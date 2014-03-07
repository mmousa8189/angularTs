/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';

    var ScaffoldService = (function () {
        function ScaffoldService() {
        }
        ScaffoldService.prototype.injection = function () {
            return [
                ScaffoldService
            ];
        };
        return ScaffoldService;
    })();
    app.ScaffoldService = ScaffoldService;
})(app || (app = {}));
