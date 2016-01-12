# function-pipeline
> Similar to the Unix `|` operator; returns a function that invokes the given series of functions whose output is subsequently passed to the next function in the series.

[![Build Status](http://img.shields.io/travis/wilmoore/function-pipeline.js.svg)](https://travis-ci.org/wilmoore/function-pipeline.js) [![Code Climate](https://codeclimate.com/github/wilmoore/function-pipeline.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/function-pipeline.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install function-pipeline --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/function-pipeline.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/function-pipeline.svg)](https://www.npmjs.org/package/function-pipeline) [![NPM downloads](http://img.shields.io/npm/dm/function-pipeline.svg)](https://www.npmjs.org/package/function-pipeline) [![David](https://img.shields.io/david/wilmoore/function-pipeline.js.svg)](https://david-dm.org/wilmoore/function-pipeline.js)

## API Example

```js
var pipeline = require('function-pipeline')

var word = text => text.split(/\s+/)
var reverse = list => list.reverse()
var join = list => list.join(' ')
var text = 'dog lazy the over jumps fox brown quick The'
var pipe = pipeline(word, reverse, join)

Promise.resolve(text).then(pipe)
//=> The quick brown fox jumps over the lazy dog
```

## API

### `pipe(…Function|Function[])`

###### arguments

 - `fns (…Function|Function[])` Functions to apply as an argument list or array of arguments.

###### returns

 - `(Function)` Function that invokes the given series of functions.

## Inspiration

 - [Pipeline (Unix)]
 - [|>]
 - [>>>]
 - [.]

## Alternatives

 - [lodash.flow]
 - [value-pipe]

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/function-pipeline.js.svg)](https://github.com/wilmoore/function-pipeline.js/blob/master/license)

[|>]: http://elixir-lang.org/docs/stable/elixir/Kernel.html#%7C%3E/2
[>>>]: https://downloads.haskell.org/~ghc/7.6.2/docs/html/libraries/base-4.6.0.1/Control-Arrow.html
[.]: https://wiki.haskell.org/Function_composition
[lodash.flow]: https://lodash.com/docs#flow
[value-pipe]: https://www.npmjs.com/package/value-pipe
[Pipeline (Unix)]: https://en.wikipedia.org/wiki/Pipeline_(Unix)
