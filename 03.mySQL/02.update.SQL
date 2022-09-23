/* 삽입
INSERT INTO 테이블명 
	(필드명) 		#필드명을 사용하면 일부 필드만 생성
				#사용하지 않으면 모든 필드 데이터 추가
	values(필드명에 대한 값)
 */



UPDATE city SET NAME='Gwangju', district='Gwangju' WHERE id=2336;

SELECT * FROM city WHERE NAME ='Gwangju'

#전라남도 도시의 인구를 20만으로 변경
UPDATE  city  set Population=200000 WHERE district='chollanam'

UPDATE city, (SELECT * FROM city WHERE district='Chollanam') b
	SET city.population = b.population + 50000
	WHERE city.id=b.id

CREATE TABLE tigers(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	player VARCHAR(10) NOT NULL,
	backNO INT,
	POSITION VARCHAR(10)
);

/* id 선수명 백넘버 포지션 
create table tigers(
	id	int	not null	primary key		auto_increment, */

insert into tigers
	values(default, '양현종',54,'투수');

insert into tigers(player,backNo,position)
	values('이의리',48,'투수')

/* 내가 작성
INSERT INTO tigers(id, player, backNo, POSITION)
 	VALUES (NOT NULL,'양현종',54,'투수'),
 	(NOT NULL,'이의리',48,'투수'),
 	(NOT NULL,'박동원',10,'포수'),
 	(NOT NULL,'김선빈',3,'내야수'),
 	(NOT NULL,'박찬호',1,'내야수'),
 	(NOT NULL,'나성범',47,'외야수'),
 	(NOT NULL,'소크라테스',30,'외야수');
SELECT * FROM tigers LIMIT 7;
	 */

SELECT NOW(),CURDATE(),CURTIME()
SELECT date_add(now(), INTERVAL 40 DAY);

#Inner join
SELECT gg.name,gg.debut,s.title,s.lyrics 
	FROM girl_group AS gg		#left
	INNER JOIN song AS s		#right
	ON s.sid = gg.hit_song_id

#LEFT Outer join
SELECT gg.name,gg.debut,s.title,s.lyrics 
	FROM song AS s		#left
	LEFT OUTER JOIN girl_group AS gg		#right
	ON s.sid = gg.hit_song_id

#RIGHT Outer join
SELECT s.sid,gg.name,gg.debut,s.title,s.lyrics 
	FROM song AS s		#left
	RIGHT OUTER JOIN girl_group AS gg		#right
	ON s.sid = gg.hit_song_id

#FULL Outer join
SELECT s.sid,gg.name,gg.debut,s.title,s.lyrics 
	FROM song AS s		#left
	RIGHT OUTER JOIN girl_group AS gg		#right
	ON s.sid = gg.hit_song_id
UNION
SELECT s.sid,gg.name,gg.debut,s.title,s.lyrics 
	FROM song AS s		#left
	LEFT OUTER JOIN girl_group AS gg		#right
	ON s.sid = gg.hit_song_id.

#2009년도에 데뷔한 걸그룹의 히트송은?(걸그룹, 데뷔일, 곡명) - 내가 푼 방식
SELECT girl_group.name,girl_group.debut, song.title 
FROM song
RIGHT OUTER JOIN girl_group
ON song.sid = girl_group.hit_song_id
WHERE YEAR(girl_group.debut)=2009;

#2009년도에 데뷔한 걸그룹의 히트송은?(걸그룹, 데뷔일, 곡명) - 강사님 방식
SELECT girl_group.name,girl_group.debut, song.title 
FROM song
RIGHT OUTER JOIN girl_group
ON song.sid = girl_group.hit_song_id
WHERE girl_group.debut BETWEEN DATE('2009-01-01') AND DATE ('2009-12-31')
ORDER BY girl_group.debut;