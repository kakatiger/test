const express=require('express');
var app=express();
app.listen(3000,()=>{
	console.log('服务器创建成功');
});
var num=0
app.use('/sum',(req,res,next)=>{
	num++
	next();
})
app.get('/sum',(req,res)=>{
	res.send(num.toString());
})