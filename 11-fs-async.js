const fs = require('fs');

console.log('Start');
fs.readFile('./content/first.txt','utf8', (err,result)=>{
    if(err) console.log(err);
    else {
        const first = result;
        fs.readFile('./content/second.txt','utf8',(err,result)=>{
            if(err) console.log(err)
            else{
                const second = result; 
                fs.writeFile(
                    './content/result-async.txt',
                    `Here is the Result:\n${first}\n${second}\n`,
                    {flag : 'a'}, 
                    (err)=>{
                    if(err) console.log(err);
                    console.log('We are done with this task');
                });
            } 
        });
    }
});
console.log('Starting next task');
