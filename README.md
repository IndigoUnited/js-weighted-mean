# weighted-mean

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/weighted-mean
[downloads-image]:http://img.shields.io/npm/dm/weighted-mean.svg
[npm-image]:http://img.shields.io/npm/v/weighted-mean.svg
[travis-url]:https://travis-ci.org/IndigoUnited/js-weighted-mean
[travis-image]:http://img.shields.io/travis/IndigoUnited/js-weighted-mean/master.svg
[coveralls-url]:https://coveralls.io/r/IndigoUnited/js-weighted-mean
[coveralls-image]:https://img.shields.io/coveralls/IndigoUnited/js-weighted-mean/master.svg
[david-dm-url]:https://david-dm.org/IndigoUnited/js-weighted-mean
[david-dm-image]:https://img.shields.io/david/IndigoUnited/js-weighted-mean.svg
[david-dm-dev-url]:https://david-dm.org/IndigoUnited/js-weighted-mean#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/IndigoUnited/js-weighted-mean.svg

Calculates the weighted mean of an array of numbers.


## Installation

`$ npm install weighted-mean` - `NPM`   
`$ bower install weighted-mean` - `bower`

The browser file is named `index.umd.js` which supports CommonJS, AMD and globals (`weightedMean`).
If you want to run this module on old browsers, you must include [es5-shim](https://github.com/es-shims/es5-shim).


## Usage

The example bellow is based on `nodejs`.

```js
const weightedMean = require('weighted-mean');

const mean = weightedMean([
    [100, 2],   // 100 is the value, 2 is the weight
    [50, 4],
    [25, 1],
]);
```


## Tests

`$ npm test`


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
