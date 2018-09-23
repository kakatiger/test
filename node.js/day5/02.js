const express=require('express');
const bodyParser=require('body-parser');
var app=express();
const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20 });

app.listen(3000);
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
	extended:false
}))
app.post('/add',(req,res)=>{
	var obj=req.body;
	pool.query(`INSERT INTO dept SET ?`,obj,(err,result)=>{
	if (err) throw err;
	res.send('数据添加成功')
	
});

});

