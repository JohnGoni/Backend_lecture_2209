const mysql = require('mysql')
const config = require('./mysql.json');

const conn = mysql.createConnection(config);
conn.connect()
const sql ='SELECT * FROM kia';
conn.query(sql,(err, rows,result)=> {
    if (err)
        throw err;
    for(let row of rows){
    console.log(`${row.id}\t${row.player}\t${row.backNO}\t${row.position}\t${row.isdeleted}`)
    }
});
conn.end()