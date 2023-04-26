// Using Number
let x = Number.MAX_SAFE_INTEGER; // x = 9007199254740991
console.log(x++); // Value will be incremented by 1 (9007199254740992)
console.log(x++); // Value will remain same, no change (9007199254740992)

// Using BigInt
let y = BigInt.MAX_SAFE_INTEGER; // x = 9007199254740991
console.log(y++); // Value will be incremented by 1 (9007199254740992)
console.log(y++); // Again value will be incremented by 1, perfect. (9007199254740993)no