const express=require('express');
const pool=require('../pool.js');//..表示上一级目录
var router=express.Router();
//在路由器下添加路由器
router.post('/register',(req,res)=>{
	//console.log(req.body);
	var obj=req.body;
	//判断表单内容
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	var $email=obj.email;
	var $phone=obj.phone;
	if($uname==''){
		res.send({code:401,msg:'uname required'});
		return;
	};
	if ($upwd=='')
	{
		res.send('请输入密码');
		return;
	};
	if ($email=='')
	{
		res.send({code:403,msg:'email required'});
		return;
	};
	if ($phone=='')
	{
		res.send({code:404,msg:'phone required'});
		return;
	};
	//res.send('注册成功')
	//以上验证通过后，执行插入数据库操作
	var sql='INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)';
	

	pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
		if(err) throw err;
		//判断插入成功
		if (result.affectedRows>0)
		{
			res.send('注册成功')
		}else{res.send('服务器崩溃')}
	});
	
});

//2删除用户
router.get('/delete',(req,res)=>{
	var obj=req.query;
	console.log(obj)
	var $uid=obj.uid;
	if ($uid=='')
	{
		res.send('删除信息不能为空');
		return;
	}
	pool.query('DELETE FROM xz_user where uid=?',$uid,(err,result)=>{
		if(err) throw err;
		if (result.affectedRows>0)
		{
			res.send(`第${$uid}条信息成功删除`);
		}else{
			res.send('删除失败');
		};
		

	});
});

//3.用户登录
router.post('/login',(req,res)=>{
	res.send('登录成功')
})


//导出路由器
module.exports=router;