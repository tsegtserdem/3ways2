const getPriceByName = (name) => {
    const foodMap = {
        '🍔': 30,
        '🍨': 20,
        '🍿': 10,
        // You can add new food here
        // ...
    }
    return foodMap[name]
}
console.log(getPriceByName('🍔')) // 30