const mysql = require('mysql')
const config = require('./mysql.json');

const conn = mysql.createConnection(config);
conn.connect()
/* const sql ="SELECT * FROM kia where position LIKE '%투수%'"; >> 내가 작성한 정답
conn.query(sql,(err, rows,result)=> { */
const sql = "SELECT * FROM kia where position=? and isdeleted=0;";
conn.query(sql,['투수'],(err,rows,fields)=>{ 
    if (err)
        throw err;
    for(let row of rows){
    console.log(`${row.id}\t${row.player}\t${row.backNo}\t${row.position}\t${row.isdeleted}`)
    }
});
conn.end();