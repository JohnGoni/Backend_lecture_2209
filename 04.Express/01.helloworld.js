const express = require(express);
const app = express();

app.use()  // = app.put() = app.get()
//use - 무엇인가를 사용하겠다. Middleware 적용
/* Middleware란? 양 쪽을 연결하여 데이터를 주고받을 수 있도록 중간에서 매개 역할을 하는 소프트웨어,
네트워크를 통해서 연결된 여러 개의 컴퓨터에 있는 많은 프로세스들에게 어떤 서비스를 사용할 수 있도록 
연결해주는 소프트웨어, 웹브라우저에서 데이터베이스로부터 데이터를 저장하거나 읽어올 수 있게 중간에 
미들웨어가 존재
 */

/* http method - get, put, post, delete, all
listen - 대기
*/

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/create',(req,res)=>{

app.get(``)

})
app.listen(3000,()=>{
    console.log('Server is running at http://127.0.0.1:3000')
})