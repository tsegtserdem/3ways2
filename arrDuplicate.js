const removeDuplicates = (arr) => [...new Set(arr)]

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]))
// [1, 2, 3, 4, 5, 6] 