531.js
======

Given a 1RM, generate a 4 week 5/3/1 cycle. 

## Setup
```bash
$ npm install 531
```

## API

#### `fto(max, [options])` -> `Array`

Given a `max` (Number), generates an array of weeks. Each week has:

* `name`: The name of the week, e.g. "Week 1"
* `sets`: An `Array` of sets

Each set has:

* `ratio`: (Number) The ratio of the 90% 1RM to use for that set
* `repetitions`: (Number) The number of repetitions to perform
* `weight`: (Number) The total weight to use
* `max`: (Boolean) Whether that set should be performed for the maximum number of sets possible

`options` may contain:

* `round`: Defaults to `'down'`. Set to `'up'` to round up to the nearest increment
* `increment`: Defaults to `5`. Sets the increment to use when rounding weights.
* `use90`: Defaults to `true`. Set to `false` to use 100% of your 1RM for calculations.

## Example

```js
var fto   = require('531');
var cycle = fto(455);

console.log('Next cycle, my first deadlift will be:', cycle[0].sets[0].weight, 'lbs');
```
