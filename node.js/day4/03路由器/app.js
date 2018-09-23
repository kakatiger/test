const express=require('express');
const querystring=require('querystring');
var app=express();
app.listen('3000',()=>{
	console.log('服务器创建成功')
});

const user=require('./routers/user.js')
const product=require('./routers/product.js')
//把这个路由器挂载到/user
//路由访问: /user
app.use('/user',user);
app.use('/product',product);