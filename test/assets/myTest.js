(function() {
    'use strict';
    var assert = require('assert');
    var mocha = require('mocha');
    var describe = mocha.describe;
    var it = mocha.it;

    describe('Foo', function () {
        it('say hello', function () {
            var foo = 'hello world';
            assert.equal(foo.valueOf(), 'hello world');
        });
    });
}());
