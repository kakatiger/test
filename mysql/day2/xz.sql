DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz;
USE xz;
CREATE TABLE user(
	uid INT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(32),
	phone VARCHAR(11),
	sex VARCHAR(1),
	username VARCHAR(8),
	regtime VARCHAR(10),
	isonline VARCHAR(1)
);

INSERT INTO user VALUES('1','huahua','5648563','4513fs@163.com','11111111111','F','Tianmin','3018-01-01','1');
INSERT INTO user VALUES('2','haha','5648563','4513fs@163.com','11111111111','F','bianmin','3018-01-01','0');
INSERT INTO user VALUES('3','aqz','5648563','4513fs@163.com','11111111111','M','canmin','3018-01-01','1');
INSERT INTO user VALUES('4','wsx','5648563','4513fs@163.com','11111111111','F','manmin','3018-01-01','0');
INSERT INTO user VALUES('5','edc','5648563','4513fs@163.com','11111111111','F','kanmin','3018-01-01','1');

DELETE FROM user WHERE uid=2;
#修改编号为3的数据
UPDATE user SET upwd='thu48712',email='kjoiu@163.com',phone='44444444444';
SELECT * FROM user;