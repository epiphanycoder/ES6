console.log(typeof null);
let strObj = new String('I am string');
console.log(typeof strObj);
console.log(strObj instanceof String);
Object.prototype.toString.call(strObj);