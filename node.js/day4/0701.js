const express=require('express');
//const querystring=require('querystring');
//引入第三方中间件 body-parser
const bodyParser=require('body-parser');
var app=express();
app.listen(3000,(req,res)=>{
  console.log('服务器构建成功');
});

//托管静态资源
app.use(express.static('./public'));
//使用第三方中间件body-parser
app.use(bodyParser.urlencoded({
  extended: false //不使用querystring的查询字符串
}));

app.post('/mylogin',(req,res)=>{
  //获取浏览器发送的数据
  /*
  req.on('data',(buf)=>{
     var str=buf.toString();//查询字符串
	 var obj=querystring.parse(str);
	 console.log(obj);
  });
  */
  //只能在post请求中获取表单数据
  console.log(req.body);
});

