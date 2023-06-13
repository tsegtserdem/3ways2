const checkProtocol = /^https?:/

console.log(checkProtocol.test('https://juejin.cn/')) // true
console.log(checkProtocol.test('http://juejin.cn/')) // true
console.log(checkProtocol.test('//juejin.cn/')) // false