'use strict';

var expect = require('chai').expect;
var weightedMean = require('../');

describe('weighted-mean', function () {
    it('should calculate the weighted mean correctly', function () {
        var mean;

        mean = weightedMean([
            [100, 2],
            [50, 4],
            [25, 1],
        ]);
        expect(Math.round(mean * 100) / 100).to.equal(60.71);

        mean = weightedMean([[100, 2]]);
        expect(Math.round(mean * 100) / 100).to.equal(100);
    });
});
