const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,                      //standard input, terminal(keyboard)
    output :  process.stdout                    //standard output, terminal(monitor)
});
rl.setPrompt('숫자를 입력하세요.>');
rl.prompt();


// I/O (input, 파일 읽기/쓰기, 데이터 통신 등) 작업은 콜백 함수에서 처리함.
rl.on('line', buffer => {           //숫자를 입력하고 엔터를 쳤을 때 
    let num = parseInt(buffer);
    let evenOdd = (num % 2 == 0) ? '짝수' : '홀수';
    console.log(`입력한 숫자는 ${num}이고 ${evenOdd}입니다.`);

    rl.close()      // 끝낼 때 반드시 처리해야함.
});
