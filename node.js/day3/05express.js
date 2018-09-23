//使用express框架构建web服务器
//1 使用3.x ，借助http模块
/*const http=require('http');
const express=require('express');
var app=express();
http.createServer(app).listen(3000,()=>{
	console.log('web服务器构建成功')
})*/
//2 使用4.x。直接构建
const express=require('express');
var app=express();
app.listen(3000,()=>{
	console.log('web服务器创建成功')
});
//获取服务器端商品列表
//请求的url为list，请求的方法为get
app.get('/list',(req,res)=>{
	console.log('huo取到了浏览器发送的请求');
});
/*app.get('/login',(req,res)=>{
	
	console.log('这个是登录路由');
	//req 请求对象
	console.log(req.url);
	console.log(req.method);//获取请求的方法
	console.log(req.query);//获取查询字符串
	console.log(req.headers);
	//res 响应对象
	//res.send('this is web1807');//服务器向浏览器作出响应。
	//把登录的html文件发送给浏览器
	//res.sendFile(__dirname+'/login.html');
	res.redirect('http://www.baidu.com')
});*/

app.get('/reg',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
})
