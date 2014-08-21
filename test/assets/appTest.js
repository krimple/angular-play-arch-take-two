(function(require) {
    'use strict';
    require('../lib/angular/angular.js',
        function (angular) {
            angular.bootstrap(document, ['app']);

            var mocha = require('mocha'),
                it = mocha.it,
                describe = mocha.describe,
                assert = mocha.assert,
                beforeEach = mocha.beforeEach;

            angular.module('myApp', [])
                .constant('PI', Math.PI);

            describe('angular app boot', function() {
                beforeEach(angular.mock.module('myApp'));

                it('should inject pi', angular.mock.inject(function(PI) {
                    assert.equals(PI, Math.PI);
                }));
            });

        }
    );
})(require);