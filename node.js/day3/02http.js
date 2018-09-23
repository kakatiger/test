//使用http模块，向服务器端发送请求
const http=require('http');
http.get('http://www.codeboy.com/index.html',(res)=>{ //response  这里是响应的对象
//console.log(res);
console.log(res.statusCode);
console.log(res.headers);
//获取响应色数据
//事件：当有数据响应的时候
res.on('data',(buf)=>{
	console.log(buf.toString())
});
});