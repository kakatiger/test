SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE dept(
	did TINYINT PRIMARY KEY,
	dname VARCHAR(10)
	
);
INSERT INTO dept VALUES(10,'研发部');
INSERT INTO dept VALUES(20,'运营部');
INSERT INTO dept VALUES(30,'市场部');
INSERT INTO dept VALUES(40,'测试部');

SELECT * FROM dept;
CREATE TABLE empt(
	eid TINYINT PRIMARY KEY AUTO_INCREMENT,
	ename VARCHAR(12),
	sex BOOL,
	birthday DATE,
	salary DECIMAL(9,2),
	deptld TINYINT,
	FOREIGN KEY(deptld) REFERENCES dept(did)

);
INSERT INTO empt VALUES(1,'王欢欢',TRUE,'1999-08-7',8587.22,10);
INSERT INTO empt VALUES(2,'冯成龙',TRUE,'1999-08-7',8587.22,10);
INSERT INTO empt VALUES(3,'张大海',TRUE,'1999-08-7',8587.22,10);
INSERT INTO empt VALUES(4,'汪涵',TRUE,'1999-08-7',8587.22,20);
INSERT INTO empt VALUES(5,'欧弟',TRUE,'1999-08-7',8587.22,20);
INSERT INTO empt VALUES(6,'钱枫',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(7,'大张伟',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(8,'李嘉诚',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(9,'王一博',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(NULL,'陈奕迅',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(NULL,'陈奕迅',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(NULL,'陈奕迅',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(NULL,'陈奕迅',TRUE,'1999-08-7',8587.22,30);
INSERT INTO empt VALUES(NULL,'陈奕迅',TRUE,'1999-08-7',8587.22,NULL);
SELECT * FROM empt;