const { kStringMaxLength } = require('buffer');
const { sign } = require('crypto');
const fs = require('fs');
const { tmpdir } = require('os');

//디렉토리에 있는 파일 목록 알아내기
fs.readdir('tmp',(err,files)=>{
    console.log(files);
});

// 파일의 정보(stat) 알아내기
fs.stat('tmp/a.txt',(err,stats)=>{
    console.log(stats.mtime);           //최종 수정시간
    conso9le.log(stats.size);            //파일크기
});

console.clear();
// 디렉토리에 있는 파일에 대하여 최종 수정시간, 파일의 크기, 파일의 이름 표시
fs.readdir('tmp',(err,files)=>{
    for(let file of files){
        fs.stat('tmp/'+file,(err,stats)=>{
            console.log(`${stats.mtime}\t${stats.size}\t${file}`);
        });
    };
});

//파일 삭제하기
fs.unlink('tmp/single1.txt', err => {
    if(err)
        console.log(err)
})

//파일 이름 변경
fs.rename(tmp/single.txt)