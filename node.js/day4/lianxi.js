const express=require('express');
var app=express();
app.listen(8888,(req,res)=>{});
app.get('/index',(req,res)=>{
	res.send('today is a good day')
});
app.get('/shopping',(req,res)=>{
	res.sendFile(__dirname+'/shopping.html')
});
app.get('/',(req,res)=>{
	res.redirect('/index')
})