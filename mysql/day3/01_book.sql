#设置客户端连接mysql使用的编码
SET NAMES UTF8;
DROP DATABASE IF EXISTS dangdang;
#使用UTF8作为数据库编码
CREATE DATABASE dangdang CHARSET=UTF8;
USE dangdang;
CREATE TABLE book(
	bid INT,
	title VARCHAR(12),
	author VARCHAR(12),
	price VARCHAR(8),
	pubdate VARCHAR(12),
	isaddbuy VARCHAR(1)
);
INSERT INTO book VALUES('1','older&boy','homwei','38','2000-01-01','1');
INSERT INTO book VALUES('2','茶馆','homwei','38','2000-01-01','1');
INSERT INTO book VALUES('3','older&boy','homwei','38','2000-01-01','1');
INSERT INTO book VALUES('4','撒哈拉沙漠','homwei','38','2000-01-01','1');
INSERT INTO book VALUES('5','older&boy','homwei','38','2000-01-01','1');

DELETE FROM book WHERE bid=2;
UPDATE book SET price='22',isaddbuy='0' WHERE bid=3;
SELECT * FROM book;