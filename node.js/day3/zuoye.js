const express=require('express');
var app=express();
app.listen(8888,()=>{
	console.log('服务器创建Ok');
});
app.get('/index',(req,res)=>{
	res.send('index路由下的响应');
	
});
app.get('/shopping',(req,res)=>{
	res.sendFile(__dirname+'/shopping.html');
});
app.get('/',(req,res)=>{
	res.redirect('/index')
})