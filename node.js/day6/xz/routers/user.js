const express=require('express');
const pool=require('../pool.js');//..表示上一级目录
var router=express.Router();
//在路由器下添加路由
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
	//res.send('登录成功')
	var obj=req.body;
	//console.log(obj);
	var $uname=obj.uname;
	if (!$uname)
	{
		res.send({code:401,msg:'uname required'});
		return;
	};
	var $upwd=obj.upwd;
	if (!$upwd)
	{
		res.send({code:402,msg:'upwd required'});
		return;
	}
	//判断是否登录成功
	var sql='SELECT * FROM xz_user WHERE uname=? AND upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if (result.length>0)
		{
			res.send({code:200,msg:'login success'});
		}else{res.send({code:301,msg:'login fail'})}
	});

})
//4 查询
router.get('/detail',(req,res)=>{
	var obj=req.query;
	var $uid=obj.uid;
	if (!$uid)
	{
		res.send('请输入查询序号');
		return;
	};
	var sql='SELECT * FROM xz_user WHERE uid=?';
	pool.query(sql,$uid,(err,result)=>{
		if(err) throw err;
		if (result.length>0)
		{
			res.send(result[0]);
		}else{
			res.send('查询失败')
		}
		

	});


})
//5 修改
router.post('/update',(req,res)=>{
	var obj=req.body;
	var $uid=obj.uid;
	var $email=obj.email;
	var $phone=obj.phone;
	var $gender=obj.gender;
	var $username=obj.user_name;
	//console.log(obj)
	if (!$uid)
	{
		res.send('请输入要修改的id');
		return;
	}
	if (!$email)
	{
		res.send('请输入要修改的email');
		return;
	}
	if (!$phone)
	{
		res.send('请输入要修改的phone');
		return;
	}
	if (!$gender)
	{
		res.send('请输入要修改的gender');
		return;
	}
	if (!$username)
	{
		res.send('请输入要修改的姓名');
		return;
	}
	var sql='UPDATE xz_user SET email=?,phone=?,gender=?,user_name=? where uid=?'
	pool.query(sql,[$email,$phone,$gender,$username,$uid],(err,result)=>{
		if(err) throw err;
		if (result.length>0)
		{
			res.send('信息修改成功')
		}else{
				res.send('修改失败')
			}
	})
})
//列表查询
router.get('/list',(req,res)=>{
	var obj=req.query;
	var $size=Number(obj.size);
	var $page=Number(obj.page);
	
	if (!$size)
	{
		$size=2
	};
	if (!$page)
	{
		$page=1
	};
	var sql='SELECT * FROM xz_user limit ?,?';
	pool.query(sql,[($page-1)*$size,$size],(err,result)=>{
		if(err) throw err;
		res.send(result)
	
	})

});


//导出路由器
module.exports=router;