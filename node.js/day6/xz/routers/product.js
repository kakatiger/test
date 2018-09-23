const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

router.get('/list',(req,res)=>{
	var obj=req.query;
	var $size=parseInt(obj.size);
	var $page=parseInt(obj.page);
	
	if (!$size)
	{
		$size=10
	};
	if (!$page)
	{
		$page=1
	};
	var sql='SELECT * FROM xz_laptop limit ?,?';
	pool.query(sql,[($page-1)*$size,$size],(err,result)=>{
		if(err) throw err;
		res.send(result)
	
	})

});
//商品检索
router.get('/detail',(req,res)=>{
	if (!(req.query.lid))
	{
		res.send('请输入要查询商品编号');
		return;
	};
	pool.query('SELECT * FROM xz_laptop WHERE lid=?',[req.query.lid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	})
});

//删除
router.get('/delete',(req,res)=>{
	if (!(req.query.lid))
	{
		res.send({code:401,msg:'required lid'});
		return;
	};
	pool.query('DELETE FROM xz_laptop WHERE lid=?',[req.query.lid],(err,result)=>{
		if(err) throw err;
		if (result.affectedRows>0)
		{
			res.send(`第${req.query.lid}条商品已经被删除`)
		}else{res.send({code:401,msg:'delete fail'})}
	});
});






//，添加

router.post('/add',(req,res)=>{
	var obj=req.body;
	var i=401
	var arr=[];
	for (var key in obj )
	{
		if (!obj[key])
		{
			res.send({code:i,msg:[key]+'  required'})
		}
			i++;
			
			
			arr[arr.length]=obj[key];
			
	};
	
	var sql='INSERT INTO xz_laptop VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	pool.query(sql,arr,(err,result)=>{
		if(err) throw err;
		if (result.affectedRows>0)
		{
			res.send({code:201,msg:'add success'})
		}else{ res.send({code:404,msg:'add fail'})}
	});

});
//修改
router.post('/update',(req,res)=>{
	var obj=req.body;
	var arr=[];
	var i=401
	for (var key in obj )
	{
		if (!obj[key])
		{
			res.send({code:i,msg:[key]+'  required'})
		}
		i++;
		arr[arr.length]=obj[key];
	}
	var arr1=arr.slice(1);
	arr1[arr1.length]=arr[0]
	var sql='UPDATE xz_laptop SET family_id=?,  title=?,  subtitle=?,  price=?,  promise=?,spec=?,  lname=?,  os=?,  memory=?,  resolution=?,  video_card=?,  cpu=?,  video_memory=?,  category=?,  disk=?,  details=?,  shelf_time=?,  sold_count=?,  is_onsale=? WHERE lid=?';
	pool.query(sql,arr1,(err,result)=>{
		if(err) throw err;
		if (result.affectedRow>0)
		{
			res.send({code:201,msg:'update success'});
		}else{res.send({code:401,msg:'update fail'})}
	});


});









//导出路由
module.exports=router;