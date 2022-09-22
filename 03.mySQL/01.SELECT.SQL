/* 데이터 조작 언어 */
# 1. 조회

USE world;
SHOW TABLES;
DESC city;

/* 
SELECT 필드명 FROM 테이블명
    where 조건
    ORDER BY 필드명 순서
    LIMIT 숫자 OFFSET 숫자
    GROUP BY 필드명
    HAVING 그룹 조건
    JOIN 테이블명
    ON 조인 조건;
 */ 

 SELECT * FROM city;
 SELECT COUNT(*) FROM city;
 SELECT * FROM city WHERE CountryCode ='KOR';		//필드명의 대소문자 구별 X

# 함수
# count(*) - 건수
SELECT COUNT(*) FROM city WHERE countrycode='KOR';

SELECT SUM(population) FROM city WHERE countrycode='kor'

SELECT AVG(population) FROM city WHERE countrycode='kor'

SELECT min(population) FROM city WHERE countrycode='kor' ;

SELECT min(population),max(population),avg(population) FROM city WHERE countrycode='kor' ;

#광역시도별 인구수
SELECT district,SUM(population) FROM city WHERE countrycode='KOR' 
GROUP BY district;

#광역시도별 인구수 내림차순으로
SELECT district,SUM(population) FROM city WHERE countrycode='KOR' 
GROUP BY district ORDER BY SUM(population) DESC;

#전라남도의 도시
SELECT GROUP_CONCAT(NAME) FROM city WHERE district='Chollanam'

SELECT GROUP_CONCAT(DISTINCT district) FROM city WHERE countrycode = 'KOR'

#광역시도별 도시의 갯수
SELECT district, COUNT(*) FROM city WHERE countrycode = 'KOR'
GROUP BY district ORDER BY COUNT(*) DESC, district;

#광역시도별 도시의 갯수가 5개 이상인 경우
SELECT district, COUNT(*) FROM city WHERE countrycode = 'KOR'
GROUP BY district HAVING COUNT(*)>=5;

#광역시도별 도시의 갯수가 5개 이상인 경우 내림차순으로 표시
SELECT district, COUNT(*) FROM city WHERE countrycode = 'KOR'
GROUP BY district HAVING COUNT(*)>=5 ORDER BY COUNT(*) DESC;

#도시의 갯수가 100개인 국가를 내림차순으로 정렬
SELECT countrycode, COUNT(*) FROM city GROUP BY countrycode 
HAVING COUNT(*)>100 ORDER BY COUNT(*) DESC;

#도시의 갯수 상위 5개의 국가 코드
SELECT countrycode, COUNT(*) FROM city GROUP BY countrycode 
ORDER BY COUNT(*) DESC LIMIT 5;

#도시의 인구 상위 10개의 국가 코드
SELECT countrycode, SUM(population) FROM city GROUP BY countrycode 
ORDER BY sum(population) DESC LIMIT 10;

#도시의 인구 상위 6~10위의 국가 코드
SELECT countrycode, SUM(population) FROM city GROUP BY countrycode 
ORDER BY sum(population) DESC LIMIT 5 OFFSET 5;

#도시의 인구가 많은 국가 6~10위
SELECT country.name, SUM(city.population) FROM city 
	INNER JOIN country ON city.countrycode = country.code
	GROUP BY city.countrycode ORDER BY SUM(city.population) desc
	LIMIT 5 OFFSET 5;

# 인구가 많은 전세계 도시 top 10의 국가명, 도시명, 인구수
SELECT country.Name, city.Name, city.population FROM city 
	JOIN country ON city.countrycode=country.Code
	ORDER BY city.population DESC LIMIT 10