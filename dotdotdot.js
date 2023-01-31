const arr = [1, 2, 3, 4, 5]

console.log(arr) // [ 1, 2, 3, 4, 5 ]
console.log(...arr) // 1 2 3 4 5

const { name, ...other } = { name: 'fatfish', age: 100, luckyNumber: 6 }

console.log(name) // fatfish
console.log(other) // { age: 100, luckyNumber: 6 }