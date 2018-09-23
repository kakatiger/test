//路由器是属于express下的功能
const express=require('express');
var router=express.Router();//调用路由器功能
router.get('/list',(req,res)=>{
	res.send('这是商品列表')
});
router.get('/details',(req,res)=>{
	res.send('这是商品的详细信息')
})

module.exports=router;