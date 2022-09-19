// 비동기적(Asyncronous)으로 파일 읽기 - 권장사항

const fs = require('fs');

fs.readFile('tmp/textfile.txt','utf8',(err,data)=>{
    /* if (err)
        console.log(err);
    else
        console.log('파일에서 읽은 데이터', 'data') */
   //파일의 에러는 잘 발생하지 않으므로 err  처리를 생략
   console.log('파일에서 읽은 데이터',data)   
})
