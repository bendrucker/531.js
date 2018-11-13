531.js [![Build Status](https://travis-ci.org/bendrucker/531.js.svg?branch=master)](https://travis-ci.org/bendrucker/531.js) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/531.js.svg)](https://greenkeeper.io/)
======

> Given a one rep max, generate a 4 week 5/3/1 cycle.

## Install

```sh
npm install --save 531
```

## Usage

```js
var fto = require('531')
var cycle = fto(455)

// first week, first set weight:
// => cycle[0][0].weight
```

## API

#### `fto(max, [options])` -> `array`

Returns an array (of length 4) of set arrays (each of length 3).

Each set has:

###### ratio

Type: `number`

The ratio of the 90% 1RM to use for that set.

###### repetitions

Type: `number`

The number of repetitions to perform.

###### weight

Type: `number`

The total weight to use (unitless).

##### max

Type: `boolean`

Whether that set should be performed for the maximum number of sets possible.

---

##### max

*Required*  
Type: `number`

Your estimated one rep max to use.

##### options

###### round

Type: `string`  
Default: `'down'`

The direction to round weights to.

###### increment

Type: `number`  
Default: `5`

The increment to use when rounding weights.

###### use90

Type: `boolean`  
Default: `true`

Set to `false` to use 100% of your estimated one rep max for calculations instead of the recommended 90%.

## License

MIT © [Ben Drucker](http://bendrucker.me)
