const express=require('express');
var app=express();
app.listen(3000,()=>{
	console.log('服务器创建成功');
});
//内置中间件

app.use(express.static('./public'));
app.use(express.static('./public2'));