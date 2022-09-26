const mysql = require('mysql')
const config = require('./mysql.json');

const conn = mysql.createConnection(config);
conn.connect()
const sql ='SELECT * FROM kia';
conn.query(sql,(err, rows,result)=> {
    if (err)
        throw err;
    for(let row of rows){
    console.log(`${row.gid}\t${row.name}\t${row.debutDate}\t${row.hit_song_id}`)
    }
});
conn.end()

// 깃헙보고 slq문 완성하기