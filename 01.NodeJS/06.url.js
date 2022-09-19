const url = require('url');     //get 방식

const urlSample = 'https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880'
const parseObject = url.parse(urlSample);

console.log(parseObject);
console.log(parseObject.href);  //https://www.hanbit.co.kr/academy/books/book_view.html?p_code=B8613955880
console.log(parseObject.query); //p_code=B8613955880
