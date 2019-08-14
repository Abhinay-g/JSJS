var compose = require('lodash/fp/compose')
const add = x => y => x + y
const multiply = x => y => x * y
const add2Multiply3 = compose(multiply(3), add(2))
console.log(add2Multiply3(5));