//使用中间件拦截特定的路由
const express=require('express');
var app=express();
app.listen(3000,()=>{
	console.log('服务器创建成功');
});
app.use('/list',(req,res,next)=>{
	console.log('这是主逻辑');
	next();
});

app.use('/list',(req,res,next)=>{
	console.log('单独拦截中间件');
	next();
});

app.get('/list',(req,res,next)=>{
	res.send('这是列表的路由');
	next();

});
app.get('/details',(req,res)=>{
	res.send('商品列表')
})
app.use('/list',(req,res,next)=>{
	console.log('这是后置中间件')
})