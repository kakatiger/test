//构建web服务器
const express=require('express');
const mysql=require('mysql');
//引入第三方中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static('./public'));
//调用body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false 
}));
//路由
var obj=[];
app.post('/dept',(req,res)=>{
  //on('data')
  //获取post请求的数据
   obj=req.body;
  
});
var pool=mysql.createPool({
	host:'127.0.0.7',
	user:'root',
	password:'',
	port:3306,
	database:'tedu',
	connectionLimit:20
});
pool.query(`INSET INTO dept SET ?`,obj,(err,resulet)=>{
	if(err) throw err;
	console.log(result);
});
