//Before
let str = "2022";
Number(str.substring(0, str.length - 1)); //Result: 202
//After
console.log(2022 / 10)  // Result: 202
console.log(2022 / 100 | 0)  // Result: 20
console.log(2022 / 1000 | 0)  // Result: 2