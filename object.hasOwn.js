const Person = function (likes) {
    this.likes = likes
}
Person.prototype.name = 'example'
const p1 = new Person(24);
const p2 = new Person(22);
console.log('likes' in p1, p1.likes) // true 
console.log('name' in p1, p1.name) // true  pay attention here

console.log('likes' in p2, p2.likes) // true 
console.log('name' in p2, p2.name) // true  pay attention here