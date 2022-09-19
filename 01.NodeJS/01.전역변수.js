const path = require('path');

/* const fs = require('fs'); */   //  import numpy 와 비슷한 개념

console.log(__dirname);     //  이 프로그램이 있는 디렉토리
console.log(__filename);    //  이 프로그램의 파일 이름

// 상대경로(relative path)
const relPath = 'tmp/textfile.txt';

// 절대경로(absolute path)
const absPath = path.join(__dirname, 'tmp', 'textfile.txt');
console.log(absPath);