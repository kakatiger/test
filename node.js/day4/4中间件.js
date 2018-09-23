//中间件配合着路由和其他中间件使用
const express=require('express');
var app=express();
app.listen(3000,()=>{
	console.log('服务器创建成功')
});
//中间件：就是一个函数
function fn(req,res,next){
	console.log('过安检');
	next();
};
//使用中间件
app.use(fn);//可以拦截所有的路由
//添加第二个中间件
app.use((req,res,next)=>{
	console.log('请出示邀请函');
	next();
})


app.get('/list',(req,res)=>{
	res.send('这个是路由');
});
app.get('/login',(req,res,next)=>{
	console.log('吃国宴');
	res.send('登陆登录');
	next();
});
//后置中间件
app.use((req,res,next)=>{
	console.log('听相声');
})

