SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE user(
	uid INT PRIMARY KEY,
	uname VARCHAR(16) UNIQUE,
	upwd VARCHAR(32) DEFAULT '123456'
);
INSERT INTO user VALUES(1,'TIM','QQQQQQ');
INSERT INTO user VALUES(2,NULL,'');
INSERT INTO user VALUES(3,NULL,DEFAULT);
INSERT INTO user(uid,uname) VALUES(6,'HAET');
#创建产品分类表
CREATE TABLE laptop_family(
	fid INT PRIMARY KEY,
	fname VARCHAR(20) NOT NULL
);
INSERT INTO laptop_family VALUES(10,'联想');
INSERT INTO laptop_family VALUES(20,'DELL');
INSERT INTO laptop_family VALUES(30,'APPLE');
#创建产品表
CREATE TABLE laptop(
lid INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(128),
familyId INT,    #隶属的分类编号
FOREIGN KEY(familyId) REFERENCES laptop_family(fid)
);
INSERT INTO laptop VALUES(1,'联想',10);
INSERT INTO laptop VALUES(2,'APPLE AIR',30);
INSERT INTO laptop VALUES(5,'ASUS',NULL);
INSERT INTO laptop VALUES(NULL,'ASUS',NULL);
