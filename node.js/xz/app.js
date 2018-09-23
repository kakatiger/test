const express=require('express');
const user=require('./routers/user.js');
const bodyParser=require('body-parser');
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static('./public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));


//把用户路由器挂载到/user下
app.use('/user',user)
