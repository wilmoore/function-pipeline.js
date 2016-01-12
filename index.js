'use strict'

/*!
 * exports.
 */

module.exports = pipe

/**
 * Similar to the Unix `|` operator; returns a function that invokes the given series of
 * functions whose output is subsequently passed to the next function in the series.
 *
 * @param {…Function|Function[]} fns
 - Functions to apply as an argument list or array of arguments.
 *
 * @return {Function}
 * Function that invokes the given series of functions.
 */

function pipe () {
  var fns = [].slice.call(arguments)
  var end = fns.length
  var idx = -1
  var out

  return function pipe (initialValue) {
    out = initialValue

    while (++idx < end) {
      out = fns[idx](out)
    }

    return out
  }
}
