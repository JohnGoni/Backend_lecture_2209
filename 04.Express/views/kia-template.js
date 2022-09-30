module.exports = {
    home: function(trs) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center } * {margin: 0; padding: 0;}
            </style>
        </head>
        <body style="margin: 50px;">
            <div>
            <img src="/tigers/emblem.jpg" alt="엠블램">
            <button onclick="location.href='/create'" style="width:100px;height:30px;">추가</button>
            </div>
            <hr>
            <table style="text-align:center; font-size:30px;width:60px;margin:auto;width:80%;">
                <tr>
                    <th>ID</th>
                    <th>선수명</th>
                    <th>사진</th>
                    <th>백넘버</th>
                    <th>포지션</th>
                    <th>액션</th>
                </tr>
                ${trs}
            </table>
        </body>
        </html>
        `;
    },

    trsGen: function(rows) {
        let trs = '';
        for (let row of rows) {
            trs += '<tr>';
            trs += `<td>${row.id}</td><td>${row.player}</td>`;
            trs += `<td><img src='/tigers/${row.player}.jpg' height="48"></td>`
            trs += `<td>${row.backNo}</td><td>${row.position}</td>`;
            trs += `<td><a href="/update?id=${row.id}"><i class="fa-solid fa-pen-to-square"></i></a> 
                        <a href="/delete?id=${row.id}"><i class="fa-solid fa-trash"></i></a></td>`;
            trs += '</tr>';
        }
        return trs;
    },

    createForm: function() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>기아 타이거즈 선수단</h1>
            <button onclick="location.href='/'">홈으로</button>
            <hr>
            <form action="/create" method="post">
                <table>
                    <tr>
                        <td>선수명</td><td><input type="text" name="player"></td>
                    </tr>
                    <tr>
                        <td>백넘버</td><td><input type="text" name="backNo"></td>
                    </tr>
                    <tr>
                        <td>포지션</td><td><input type="text" name="position"></td>
                    </tr>
                    <tr>
                        <td>사진</td><td><input type="file" name="image"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="추가"></td>
                    </tr>
                </table>
            </form>
        </body>
        </html>
        `;
    },

    updateForm: function(id, player, backNo, position) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>기아 타이거즈 선수단</h1>
            <button onclick="location.href='/'">홈으로</button>
            <hr>
            <form action="/update" method="post">
                <input type="hidden" name="id" value="${id}">
                <table>
                    <tr>
                        <td>선수명</td><td><input type="text" name="player" value="${player}"></td>
                    </tr>
                    <tr>
                        <td>백넘버</td><td><input type="text" name="backNo" value="${backNo}"></td>
                    </tr>
                    <tr>
                        <td>포지션</td><td><input type="text" name="position" value="${position}"></td>
                    </tr>
                    <tr>
                        <td>사진</td><td><input type="file" name="image"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="수정"></td>
                    </tr>
                </table>
            </form>
        </body>
        </html>
        `;
    },
    deleteForm: function(id) {
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <script>
                let answer = confirm('정말로 삭제하시겠습니까?');
                if (answer)
                    location.href = '/deleteConfirm?id=${id}';
                else
                    location.href = '/';
            </script>
        </body>
        </html>
        `;
    }
}