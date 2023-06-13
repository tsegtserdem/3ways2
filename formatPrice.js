const formatPrice = (price) => {
    const regexp = new RegExp(`(?!^)(?=(\\d{3})+${price.includes('.') ? '\\.' : '$'})`, 'g')
    return price.replace(regexp, ',')
}

let a =
    // formatPrice('123') // 123
    // formatPrice('1234') // 1,234
    // formatPrice('123456') // 123,456
    // formatPrice('123456789') // 123,456,789
    formatPrice('123456789.123') // 123,456,789.123

const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

console.log(format.format(123456789.123)) // $123,456,789.12
console.log("🚀 ~ file: formatPrice.js:7 ~ a:", a)

