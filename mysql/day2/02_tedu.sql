#删除数据库tedu，如果数据库存在
DROP DATABASE IF EXISTS tedu;
#创建数据库 tedu
CREATE DATABASE tedu;
#创建数据表
USE tedu;
CREATE TABLE student(
	sid INT,	#integer
	name VARCHAR(8),	#variablr charator
	sex VARCHAR(1),	#M/F
	score INT
);
#向数据表中插入数据
INSERT INTO student VALUES('1','WA','M','85');
INSERT INTO student VALUES('2','WA','M','87');
INSERT INTO student VALUES('3','WA','M','87');
INSERT INTO student VALUES('4','WA','M','87');
INSERT INTO student VALUES('5','WA','M','87');

#查询表中所有的数据
SELECT * FROM student;