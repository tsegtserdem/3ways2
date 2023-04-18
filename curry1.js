const addCurried = x => y => x + y

console.log(
    addCurried(2)(5) // y => 2 + y
) // [Function (anonymous)]