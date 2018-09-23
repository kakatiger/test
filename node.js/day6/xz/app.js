const express=require('express');
const user=require('./routers/user.js');
const product=require('./routers/product.js');
const bodyParser=require('body-parser');//只能给服务器使用；路由器最终会导入此文件，所有路由可以使用
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static('./public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));


//把用户路由器挂载到/user下
app.use('/user',user);
app.use('/product',product);
