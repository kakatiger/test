SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz CHARSET=UTF8;
USE xz;
CREATE TABLE xz_user(
	uid INT AUTO_INCREMENT PRIMARY KEY,
	uname VARCHAR(32) UNIQUE,
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16),
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender BOOL
);
INSERT INTO xz_user VALUES(1,'东方不败','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(2,'两小无猜','csw@74651587','ohh-85646@163.com','13548463287','img','方大同',1);
INSERT INTO xz_user VALUES(NULL,'东北F4','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'Gage','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',0);
INSERT INTO xz_user VALUES(NULL,'buytheworld','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'下一个路口','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'围魏救赵','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'他山之石','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'金玉良缘','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'玉石联盟','csw@74651587','ohh-85646@163.com','13548463287','img','欧阳靖',1);
INSERT INTO xz_user VALUES(NULL,'小二辩日','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'孔子东游','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'游客223','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'角度看积分','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
INSERT INTO xz_user VALUES(NULL,'东方不败3','csw@74651587','ohh-85646@163.com','13548463287','img','郭宏宇',1);
CREATE TABLE xz_receiver_address(
	aid INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	receiver VARCHAR(16),
	province VARCHAR(16),
	city VARCHAR(16),
	county VARCHAR(16),
	address VARCHAR(128) NOT NULL,
	cellphone VARCHAR(16),
	fixedphone VARCHAR(16),
	postcode CHAR(6),
	tag VARCHAR(16),
	is_default BOOL,
	FOREIGN KEY(user_id) REFERENCES xz_user(uid)
);
INSERT INTO xz_receiver_address VALUES(1,1,'刘安因','云南省','昆明市','小牛县','金牛大道爱丽之门','15232087514','010572688','678000','大得多',true);
INSERT INTO xz_receiver_address VALUES(2,2,'毛大龄','云南省','昆明市','小牛县','金牛大道爱丽之门','15232087514','010572688','678000','大得多',true);
INSERT INTO xz_receiver_address VALUES(3,7,'李二醛','云南省','昆明市','小牛县','金牛大道爱丽之门','15232087514','010572688','678000','大得多',true);
INSERT INTO xz_receiver_address VALUES(4,10,'家会场','云南省','昆明市','小牛县','金牛大道爱丽之门','15232087514','010572688','678000','大得多',true);
INSERT INTO xz_receiver_address VALUES(5,11,'曹大海','云南省','昆明市','小牛县','金牛大道爱丽之门','15232087514','010572688','678000','大得多',false);
INSERT INTO xz_receiver_address VALUES(6,13,'刘二哥','云南省','昆明市','小牛县','金牛大道爱丽之门','15232087514','010572688','678000','大得多',true);
CREATE TABLE xz_shopping_cart(
	cid INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	product_id INT,
	count INT,
	FOREIGN KEY(user_id) REFERENCES xz_user(uid)
);
INSERT INTO xz_shopping_cart VALUES(1,1,134,2);
INSERT INTO xz_shopping_cart VALUES(2,1,34,2);
INSERT INTO xz_shopping_cart VALUES(3,12,09,2);
INSERT INTO xz_shopping_cart VALUES(4,1,35,2);
INSERT INTO xz_shopping_cart VALUES(5,19,31,2);

CREATE TABLE xz_order(
	aid INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	address_id INT,
	status INT,
	order_time BIGINT,
	pay_time BIGINT,
	deliver_time BIGINT,
	received_time BIGINT,
	FOREIGN KEY(user_id) REFERENCES xz_user(uid),
	FOREIGN KEY(address_id) REFERENCES xz_receiver_address(aid)
);
INSERT INTO xz_order VALUES(1,2,1,1,1513728000000000,151373000000000,15137301000000,15137400000000);
INSERT INTO xz_order VALUES(NULL,3,2,3,1513728000000000,151373000000000,15137301000000,15137400000000);
INSERT INTO xz_order VALUES(NULL,3,3,5,1513728000000000,151373000000000,15137301000000,15137400000000);
INSERT INTO xz_order VALUES(NULL,7,5,3,1513728000000000,151373000000000,15137301000000,15137400000000);
INSERT INTO xz_order VALUES(NULL,5,4,2,1513728000000000,151373000000000,15137301000000,15137400000000);
INSERT INTO xz_order VALUES(NULL,1,1,1,1513728000000000,151373000000000,15137301000000,15137400000000);
