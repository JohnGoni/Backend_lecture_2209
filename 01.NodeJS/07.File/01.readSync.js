//동기적으로 읽기 - 비권장사항
const fs = require('fs');

// encoding 정보를 주지 않으며 binary로 읽음.
let buffer = fs.readFileSync('tmp/textfile.txt');
console.log(buffer);                // ASCII code 값
console.log(buffer.toString())      //

// 문자로 읽을 경우엔 인코딩 정보가 필요함.
const text = fs.readFileSync('tmp/textfile.txt','utf8');
console.log(text);