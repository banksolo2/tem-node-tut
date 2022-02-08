const names = require('./4-names');
const utils = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');

console.log(data);

console.log(data.items);
console.log(data.person);

utils.sayHi('Banks');
utils.sayHi(names.name1);
utils.sayHi(names.name2);
