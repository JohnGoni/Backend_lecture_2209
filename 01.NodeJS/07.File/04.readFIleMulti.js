const fs= require('fs');


//순서 보장이 안됨.
fs.readFile('tmp/a.txt','utf8', (err,bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt','utf8', (err,bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/C.txt','utf8', (err,bufC) => {
    console.log(bufC);
});

//순서 보장 방법 => callback 지옥
fs.readFile('tmp/a.txt','utf8',(err,bufA)=>{
    console.log(bufA);
    fs.readFile('tmp/b.txt','utf8',(err,bufB) =>{
        console.log(bufB);
        fs.readFile('tmp/c.txt','utf8',(err,bufC) =>{
            console.log(bufC);
        })
    })
})

//순서 보장 방법2
fs.readFile('tmp/a.txt','utf8',(err,bufA)=>{
    fs.readFile('tmp/b.txt','utf8',(err,bufB) =>{
        fs.readFile('tmp/c.txt','utf8',(err,bufC) =>{
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        })
    })
})