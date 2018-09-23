const express=require('express');
const querystring=require('querystring');
var app=express();
app.listen('3000',()=>{
 console.log('服务器创建成功')
});
 app.get('/list/:lid/:uname',(req,res)=>{
	 console.log(req.params);
	res.send('商铺  编号'+req.params.lid);
 });
 app.get('/shopping/:price/:num',(req,res)=>{
	console.log(req.params)
	res.send('购物车商品信息   价格'+req.params.price+'   数量'+req.params.num)
 })