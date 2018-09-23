//连接mysql数据库服务器

//本身的nodejs没有操作mysql的功能
const mysql=require('mysql');

/*var connection=mysql.createConnection({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu' //进去mysql服务器后，进入数据库
});
connection.connect();
//执行SQL语句
connection.query('select * from emp where sex=0',(err,result)=>{
	if (err) throw err;
	console.log(result);
});*/

//使用mysql中的连接池	
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20 //设置连接池大小
});
/*pool.query('select * from dept',(err,result,fields)=>{
	if (err) throw err;
	//console.log(result);
	console.log(fields);
})*/

//?  占位符：防止sql注入。
/*pool.query('delete from emp where eid=? and sex=?',[10,0],(err,result)=>{
	if (err) throw err;
	console.log(result);
});*/
//修改员工编号为5的数据，把工资改为3888；
/*pool.query('update emp set salary=3888 where eid=? ',[5],(err,result)=>{
	if(err) throw err;
	console.log(result)
})*/
//插入财务部，编号50
/*pool.query(`INSERT INTO dept VALUES(?,?)`,[50,'财务部'],(err,result)=>{
	if(err) throw err;
	console.log(result);
})*/
var obj={did:70,dname:'后勤部'};
pool.query(`INSERT INTO dept SET ?`,obj,(err,result)=>{
	if(err) throw err;
	console.log(result);
});