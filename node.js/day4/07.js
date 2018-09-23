const express=require('express');
const querystring=require('querystring')
const bodyparser=require('body-parser')
var app=express();
app.listen(3000,()=>{
	console.log('服务器创建成功');
});
//内置中间件

app.use(express.static('./public'));
app.use(bodyparser.urlencoded({
	extended:false
}))
app.post('/mylogin',(req,res)=>{
	/*req.on('data',(buf)=>{
	var str=buf.toString();
	console.log(str)
	var obj=querystring.parse(str);
	})*/
	console.log(req.body);
	res.send('登录成功亲爱的'+req.body.uname)

})