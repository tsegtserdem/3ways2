const stats = [
    {
        name: '🍔',
        group: 1,
    },
    {
        name: '🍨',
        group: 1,
    },
    {
        name: '🍿',
        group: 2,
    },
    {
        name: '🍵',
        group: 1,
    },
]

// ❌
// const names = []
// for (let i = 0, len = foods.length; i < len; i++) {
//   if (foods[ i ].group === 1) {
//     names.push(foods[ i ].name)
//   }
// }
// ✅

const names = stats
    .filter((stats) => stats.group === 1)
    .map((stats) => stats.name)
console.log(names) // [ '🍔', '🍨', '🍵' ]