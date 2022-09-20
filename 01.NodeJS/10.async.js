const async = require('async');
const fs = require('fs');

/* fs.readFile('tmp/a.txt','utf8', (err,bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt','utf8', (err,bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/C.txt','utf8', (err,bufC) => {
    console.log(bufC);
}); */

async.parallel({
    bufA: function(callback){
        fs.readFile('07.File/tmp/a.txt','utf8',callback);
    },
    bufB: function(callback){
        fs.readFile('07.File/tmp/b.txt','utf8',callback);
    },
    bufC: function(callback){
        fs.readFile('07.File/tmp/c.txt','utf8',callback);
    }
},(err,results)=>{
    console.log(results.bufA);
    console.log(results.bufB);
    console.log(results.bufC);
});