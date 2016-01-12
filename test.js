'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var pipeline = require('./')

/*!
 * fixtures.
 */

function word (text) {
  return text.split(/\s+/)
}

function reverse (list) {
  return list.reverse()
}

function join (list) {
  return list.join(' ')
}

/*!
 * tests.
 */

test('pipeline()', function (t) {
  var text = 'dog lazy the over jumps fox brown quick The'
  var txet = 'The quick brown fox jumps over the lazy dog'
  var pipe = pipeline(word, reverse, join)
  t.deepEqual(pipe(text), txet)
  t.end()
})
