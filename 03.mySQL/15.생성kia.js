const mysql = require('mysql');
const config = require('./mysql.json');

const conn = mysql.createConnection(config);
conn.connect();
let sql = `
    INSERT INTO kia(player,backNo,POSITION)
	VALUE('한승택',4,'포수');
`
sql ='SELECT * FROM kia';
conn.query(sql,(err,rows,fields)=>{
        if (err)
            throw err;
        for(let row of rows){
            console.log(`${row.id}\t${row.player}\t${row.backNo}\t${row.position}\t${row.isdeleted}`)
            }
    });
    conn.end()