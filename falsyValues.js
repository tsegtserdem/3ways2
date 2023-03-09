const removeFalsy = (arr) => arr.filter(Boolean)

console.log(removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]))

// ['a string', true, 5, 'another string']