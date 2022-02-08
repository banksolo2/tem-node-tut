const fs = require('fs');

console.log('Start');
const first = fs.readFileSync('./content/first.txt','utf8');
const second = fs.readFileSync('./content/second.txt','utf8');

console.log(`${first}\n${second}`);

fs.writeFileSync('./content/result-sync.txt',`Here is the result:\n${first}\n${second}\n`,{flag : 'a'});

console.log('Done with this task');
console.log('Starting the next one');
