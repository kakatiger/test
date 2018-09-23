const express=require('express');
const querystring=require('querystring');
var app=express();
app.listen(3000,()=>{console.log('创建成功')});
app.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html')
});
//请求方法为post，url为member的路由
app.post('/member',(req,res)=>{
	req.on('data',(buf)=>{
		var str=buf.toString();
		var obj=querystring.parse(str);
		console.log(obj);
		//console.log(buf.toString())
		})
	res.send('登陆成功');
})
app.get('/reg',(req,res)=>{
	res.sendFile(__dirname+'/register.html')
})
app.get('/index',(req,res)=>{
	req.on('data',(buf)=>{
		var str=buf.toString();
		var obj=querystring.parse(str);
		console.log(obj);
		

	})
	res.send('注册成功')
})