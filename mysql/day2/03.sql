#如果数据库tedu_oa存在，则删除
DROP DATABASE IF EXISTS tedu_oa;
#创建数据库tedu_oa
CREATE DATABASE tedu_oa;
#进入该数据库
USE tedu_oa;
#创建数据表emp
CREATE TABLE emp(
	eid INT,
	name VARCHAR(10),
	sex VARCHAR(1),
	phone VARCHAR(11),
	addr VARCHAR(20)
);
#插入数据
INSERT INTO emp VALUES('1','wanghuan','M','18562145201','chengdu');
INSERT INTO emp VALUES('2','liuxiang','M','18562145201','shanghai');
INSERT INTO emp VALUES('3','hahahah','M','18562145201','chengdu');
INSERT INTO emp VALUES('4','qitian','M','18562145201','chengdu');
INSERT INTO emp VALUES('5','houzi','M','18562145201','chengdu');
INSERT INTO emp VALUES('6','dapeng','M','18562145201','chengdu');
#删除员工表数据员工编号为3的数据
DELETE FROM emp WHERE eid=2;
#查询数据
SELECT * FROM emp;