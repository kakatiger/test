//使用http模块，构造web服务器
const http=require('http');
//构建服务器
var server=http.createServer();
//监听端口
server.listen(3000,()=>{
	console.log('web服务器构建成功')
});
//接收浏览器或其他客户端的请求
//事件：当有浏览器发送请求时，触发这个事件。
server.on('request',(req,res)=>{//req:浏览器请求对象   res:服务器响应对象
	/*console.log('东拐，收到了');
	console.log(req.method);//获取请求的方法
	console.log(req.url);//获取请求的url
	console.log(req.headers);//获取请求的头信息*/
	/*res.writeHead(200,{'Content-Type':'text/html',
		'server':'web1807'	
	});*/
	/*res.writeHead(302,{
		'location':'http://www.baidu.com'
	})*/
	res.write('this is web1807 home page');//发到浏览器的页面上
	res.end();//响应的结束
});