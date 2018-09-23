SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE laptop(
lid INT,
title VARCHAR(128),
price DECIMAL(9,2),
StockCount SMALLINT,
shelfTime DATETIME,
isIndex BOOL
);
INSERT INTO laptop VALUES(1,'联想电脑，性能全靠你联想.走一走，看一看，买了不吃亏，买了不上当',19999.99,108,'2018-06-07 15:25:33',true);
INSERT INTO laptop VALUES(2,'华硕电脑，坚如磐石',998,108,'',false);
INSERT INTO laptop VALUES(3,'DELL，你想怎样就怎样',2222.99,108,'2018-06-07 15:25:33',false);
SELECT * FROM laptop;