//路由器是属于express下的功能
const express=require('express');
var router=express.Router();//调用路由器功能
//添加路由
router.get('/login',(req,res)=>{
	res.send('这是登陆的页面');
});
router.get('/reg',(req,res)=>{
	res.send('这是注册页面')
});
//导出当前的路由器
module.exports=router;