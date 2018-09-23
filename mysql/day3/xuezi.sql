SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE xz_laptop(
	lid INT PRIMARY KEY,
	title VARCHAR(32),
	price DECIMAL(10,2),
	spec VARCHAR(128),
	details VARCHAR(512),
	shelftime DATE,
	isonline BOOL
);
INSERT INTO xz_laptop values(1,'联想小新，清新一下','3999','屏幕尺寸15寸，整机厚度2.12cm','联想小新，500天不卡顿，玩吃鸡，轻松搞定','2018-01-08',true);
INSERT INTO xz_laptop values(3,'戴尔游侠，游战天下','3999.22','屏幕尺寸14.9寸，整机厚度2.12cm','联想小新，500天不卡顿，玩吃鸡，轻松搞定','2018-01-08',true);
INSERT INTO xz_laptop values(6,'神州战神，无线吃鸡','4999','屏幕尺寸15.3寸，整机厚度2.12cm','联想小新，500天不卡顿，玩吃鸡，轻松搞定','2018-01-08',true);
INSERT INTO xz_laptop values(2,'小米 AIR，秒开的爽快','7999','屏幕尺寸12.5寸，整机厚度2.12cm','联想小新，500天不卡顿，玩吃鸡，轻松搞定','2018-01-08',true);
INSERT INTO xz_laptop values(9,'华硕品质，坚如磐石','3999','屏幕尺寸13寸，整机厚度2.12cm','联想小新，500天不卡顿，玩吃鸡，轻松搞定','2018-01-08',true);

update xz_laptop SET price='4999' WHERE lid=1;
SELECT * FROM xz_laptop;